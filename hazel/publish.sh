#!/usr/bin/env zsh

publish_blog() {
  if [ ! -d "${HOME}/.hazel/smockle.com" ]; then
    osascript -e 'display notification "Missing git repository, checked '~/.hazel/smockle.com'." with title "Publish Blog"'
    exit 1
  fi
  cd "${HOME}/.hazel/smockle.com"
  git add . && \
  git stash; \
  git switch main; \
  git pull; \
  $(git stash pop || exit 0)
  if [ -z "$(git status --porcelain)" ]; then
    osascript -e 'display notification "Skipped publish. smockle.com/blog is already up-to-date." with title "Publish Blog"'
    exit 0
  fi
  git commit -am "Update posts"
  local PUBLISH_BLOG_STATUS=$?
  if [ ! $PUBLISH_BLOG_STATUS -eq 0 ]; then
    osascript -e 'display notification "Failed to publish to smockle.com/blog." with title "Publish Blog"'
    exit 1
  fi
  git push \
  && osascript -e 'display notification "Successfully published to smockle.com/blog." with title "Publish Blog"' \
  || osascript -e 'display notification "Failed to publish to smockle.com/blog." with title "Publish Blog"'
}
publish_blog
unset publish_blog