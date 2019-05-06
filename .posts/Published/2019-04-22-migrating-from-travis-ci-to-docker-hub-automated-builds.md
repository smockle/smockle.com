---
title: Migrating from Travis CI to Docker Hub Automated Builds
---

Historically, I’ve used Travis CI to build and push new versions of my Docker images. In [“Keeping systems up-to-date”][1], I describe a feature missing from Travis CI that prompted me to try Docker Hub [Automated Builds][2]:

> If you maintain Docker images, you’ll want to rebuild them when their base images are updated. This will produce a new image that includes security patches and bug fixes available in the base image. Docker Hub’s Automated Builds service supports this via a feature called “Repository Links”…

The migration process was straightforward, with one complication—I build multi-architecture images using a [Docker image manifest][3]. This is not supported by the Docker Hub UI or by the version of Docker installed on the build infrastructure. But with [“custom build phase hooks”][4], I was able to build and push multi-architecture images successfully[^1].

First, I configured Automated Builds in the Docker Hub UI. I changed the value of “Build Tag” from `latest` to `build` and added set the “Environment Variable” `DOCKER_CLI_EXPERIMENTAL` to `enabled`:

![Build settings](/2019-04-22-migrating-from-travis-ci-to-docker-hub-automated-builds/build-settings.png)

Next, I added a directory named `hooks` to the root of my project. Inside `hooks`, I created four files—`pre_build`, `build`, `pre_push` and `post_push`.

`docker-ee` version `17.x` is installed by default on Docker Hub build infrastructure. The `docker manifest` command was added in `docker-ee` version `18.x`. My **`pre_build`** hook updates `docker-ee` and [prepares for multi-arch builds][5]:

	#!/bin/bash
	apt-get -y update
	apt-get -y --only-upgrade install docker-ee
	docker run \
	  --rm \
	  --privileged \
	  multiarch/qemu-user-static:register --reset

My **`build`** hook builds and tags images for `armhf` and `amd64` processors. A `build` tag is also created, to support the “Build Tag” option set in the Docker Hub UI:

	#!/bin/bash
	docker build \
	  --build-arg ARCH="armhf" \
	  -t smockle/ddns53:arm \
	  -f $DOCKERFILE_PATH .
	
	docker build \
	  --build-arg ARCH="amd64" \
	  -t smockle/ddns53:amd64 \
	  -t smockle/ddns53:$DOCKER_TAG \
	  -f $DOCKERFILE_PATH .

My **`pre_push`** hook pushes the architecture-specific images:

	#!/bin/bash
	docker push smockle/ddns53:arm
	docker push smockle/ddns53:amd64

The non-overridable **`push`** step pushes the `build` tag[^2]. Finally, my **`post_push`** hook creates a Docker image manifest and publishes it as `latest`:

	#!/bin/bash
	docker manifest create \
	  smockle/ddns53:latest \
	  smockle/ddns53:amd64 \
	  smockle/ddns53:arm
	
	docker manifest annotate \
	  smockle/ddns53:latest \
	  smockle/ddns53:arm --os linux --arch arm
	
	docker manifest annotate \
	  smockle/ddns53:latest \
	  smockle/ddns53:amd64 --os linux --arch amd64
	
	docker manifest push --purge smockle/ddns53:latest

I committed and pushed the `hooks` directory. Back in the Docker Hub UI, I set “Repository Links” to “Enable for Base Image” to rebuild whenever my base image is updated:

![Repository Links](/2019-04-22-migrating-from-travis-ci-to-docker-hub-automated-builds/repository-links.png)

I clicked “Save and Build” and waited for the build to complete. After a few minutes, my build succeeded—making my migration from Travis CI to Docker Hub Automated Builds a success[^3].

[^1]: For example, [smockle/ddns53][6]

[^2]: The `build` tag is pointless, but if it is not created, the non-overridable `push` step will fail. You could set “Build Tag” to `amd64` in the UI and modify the hooks accordingly. I prefer not to split `docker push` commands.

[^3]: As an added bonus, READMEs displayed in the Docker Hub are now updated automatically.

[1]:	/blog/2019/04/21/keeping-systems-up-to-date/
[2]:	https://docs.docker.com/docker-hub/builds/
[3]:	https://docs.docker.com/engine/reference/commandline/manifest/
[4]:	https://docs.docker.com/docker-hub/builds/advanced/#custom-build-phase-hooks
[5]:	https://hub.docker.com/r/multiarch/qemu-user-static/#binfmt_misc-register
[6]:	https://cloud.docker.com/u/smockle/repository/docker/smockle/ddns53