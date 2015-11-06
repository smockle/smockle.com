import {default as appcss} from './app.css';
import {default as homecss} from './home.css';
import {default as resumecss} from './resume.css';
let css = {app: appcss, home: homecss, resume: resumecss};
import React from 'react';

class Resume extends React.Component {
  componentDidMount() {
    document.fonts.load('1em Effra')
    .then(function() {
      document.body.classList.add(css.app['sans-loaded']);
    });
    document.fonts.load('1em Freight Text Pro')
    .then(function() {
      document.body.classList.add(css.app['serif-loaded']);
    });
  }

  render() {
    return (
      <div className={css.home.home}>
      <section className={css.resume.hero} id='hero'>
        <div className={css.resume.wrapper}>
          <header className={css.resume.header}>
            <h1 className={css.resume.big}>Clay Miller</h1>
            <div>
              <a href="mailto:clay@smockle.com">clay@smockle.com</a>
            </div>
            <p>I build the Internet. My ideal workplace lets me take ownership in my work, learn bleeding-edge technologies, help people connect and grow, and build things that endure. Diversity, accessibility and empathy are very important to me. I’ll continue developing—learning new skills while honing existing ones—and I’ll share everything I learn.</p>
          </header>
        </div>
      </section>

<div className={css.resume.container}>
<div className={css.resume.col6}>

      <section id="work" className={css.resume.work}>
        <div className={css.resume.wrapper}>
          <h1>Work.</h1>
          <div className={css.resume.block}>
            <div className={css.resume.flex}>
              <h2>Xamarin</h2>
              <date>2014-03-17—Present</date>
            </div>
            <div>Full Stack Developer</div>
            <div>
              <p>Xamarin provides development tools to build and test native mobile apps, including Xamarin Platform, Xamarin Test Cloud, &amp; Xamarin Insights.</p>
            </div>
            <ul>
              <li>Wrote 190,000 lines of production code on <a href="https://xamarin.com">xamarin.com</a>.</li>
              <li>Converted an additional 20,000 lines of Less to Sass.</li>
              <li>Wrote 200 unit and acceptance tests.</li>
              <li>Designed, built and maintained a <a href="https://evolve.xamarin.com/2014/">conference website</a> used daily by 1200 attendees.</li>
              <li>Created a party registration form which attracted 1400 attendees.</li>
              <li>Performed A/B tests on product landing pages resulting in a 12% increase in conversions.</li>
              <li>Managed a live video feed viewed in 90 countries.</li>
              <li>Presented sortable and filterable information for 320 consulting partners.</li>
              <li>Shipped 8 pages in the Visual Studio IDE.</li>
              <li>Increased Qualys <a href="https://www.ssllabs.com/ssltest/analyze.html?d=evolve.xamarin.com&latest">SSL Labs score</a> from a D to an A+.</li>
            </ul>
          </div>
          <div className={css.resume.block}>
            <div className={css.resume.flex}>
              <h2>Auburn University Career Center</h2>
              <date>2014-01-13 — 2014-05-02</date>
            </div>
            <div>Web Developer</div>
            <ul>
              <li>Designed and developed <a href="http://auburn.edu/career/">responsive websites</a> with the Laravel MVC framework.</li>
              <li>Integrated feeds from Twitter, the University Calendar and the Career Center Blog.</li>
            </ul>
          </div>
          <div className={css.resume.block}>
            <div className={css.resume.flex}>
              <h2>ACLU of Alabama</h2>
              <date>2013-08-05 — 2013-12-16</date>
            </div>
            <div>Web Developer (Freelance)</div>
            <div>
              <p>The ACLU is our nation's guardian of liberty, working daily in courts, legislatures and communities to defend and preserve the individual rights and liberties.</p>
            </div>
            <ul>
            <li>Designed, developed and published a <a href="http://aclualabama.org/wp/">WordPress-based website</a>.</li>
            <li>Delivered comprehensive documentation.</li>
            </ul>
          </div>
          <div className={css.resume.block}>
            <div className={css.resume.flex}>
              <h2>Auburn University OIT</h2>
              <date>2011-08-22 — 2013-12-20</date>
            </div>
            <div>Web Developer</div>
            <div>
              <p>The Auburn University Office of Information Technology provides centralized computing services and resources to the Auburn University community.</p>
            </div>
            <ul>
              <li>Maintained the Auburn University <a href="http://auburn.edu">homepage</a>.</li>
              <li>Created a <a href="http://www.auburn.edu/asim">science education website</a> providing resources to twelve universities and every high school in Alabama.</li>
              <li>Designed the main university portal accessed by 24,000 students and faculty members.</li>
              <li>Refreshed the primary Auburn University site-wide template.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="education" className={css.resume.education}>
        <div className={css.resume.wrapper}>
          <h1>Education.</h1>
          <div>
            <div className={css.resume.flex}>
              <h2>Auburn University</h2>
              <date>2010-08-18 — 2014-12-13</date>
            </div>
            <div className={css.resume.flex}>
              <span>BS in Software Engineering; Spanish concentration</span>
              <span>3.28 GPA</span>
            </div>
          </div>
        </div>
      </section>

</div>
<div className={css.resume.col6}>

      <section id="skills" className={css.resume.skills}>
        <div className={css.resume.wrapper}>
            <h1>Skills.</h1>
            <ol className={css.resume.ol}>
              <li>Create design comps and icons with <strong>Sketch</strong>. Manipulate complex paths in <strong>Illustrator</strong>. Perform raster image edits in <strong>Photoshop</strong>.</li>
              <li>Write semantic <strong>HTML5</strong> and <strong>JSX</strong> including ARIA landmark roles</li>
              <li>Use CSS Modules to create composable style classes. Add variables and prefixes with <strong>PostCSS</strong>, <strong>Sass</strong> or <strong>Less</strong>.</li>
              <li>Build and transpile <strong>ECMAScript 6/7</strong> modules with Babel. Lint with ESLint. Validate types with Flow.</li>
              <li>Reduce boilerplate by using a framework like <strong>React</strong> (+ Redux) or <strong>Ember</strong>.</li>
              <li>Produce optimized JPEG 2000 and WebP images with a fallback. Serve fingerprinted static assets with long Cache-Control headers.</li>
              <li>Remove unused glyphs in <strong>FontForge</strong> while preserving OpenType features.</li>
              <li>Compile assets with <strong>Webpack</strong>, <strong>Grunt</strong> or <strong>Broccoli</strong>.</li>
              <li>Make sites available offline via an <strong>App Cache</strong> and a <strong>Service Worker</strong>.</li>
              <li>Set up a web server with <strong>Node.js</strong> &amp; <strong>Express</strong>. Configure <strong>NGINX</strong> as a reverse proxy, load balancer or static file server with HTTP/2 support.</li>
              <li>Store data in <strong>MongoDB</strong> and <strong>Redis</strong>. Spin up <strong>MariaDB</strong> or <strong>Postgres</strong> if I’m using Ghost or <strong>WordPress</strong>.</li>
              <li>Manage environments with <strong>Docker</strong> Machine and Compose. Manage code with <strong>Git</strong>.</li>
              <li>Set up <strong>Amazon Web Services</strong> (IAM, EC2, RDS, SES, SNS, S3, CloudFront, Route 53).</li>
              <li>Purchase a domain and configure DNS. Add DKIM, SPF and DMARC records to verify emails. Set up secondary DNS with AXFR.</li>
              <li>Install an SSL certificate, then configure the server for HSTS, HPKP, forward secrecy and OCSP stapling. Generate unique primes for DH.</li>
              <li>Test via <strong>Mocha</strong>, Chai and <strong>Sinon</strong>. Report coverage to Code Climate and Coveralls. Run continuously in Travis CI and AppVeyor.</li>
              <li>Manage depedency security with Snyk, compatibility with Greenkeeper and updates with David DM.</li>
              <li>Analyze traffic in <strong>Google Analytics</strong>. Monitor servers and processes with <strong>New Relic</strong>.</li>
            </ol>
        </div>
      </section>

      <section id="awards">
        <div className={css.resume.wrapper}>
          <h1>Designations.</h1>
          <ul>
            <li>GitHub Atom 1 Intrepid Collator – 2015</li>
            <li>Honors Graduate, Auburn University - 2014</li>
            <li>Communications Director, Auburn Mobile Club – 2013–2014</li>
            <li>Auburn University Presidential Scholarship - 2010–2014</li>
            <li>National Merit Scholar - 2010</li>
          </ul>
        </div>
      </section>

      <section className={css.resume.profiles} id='connect'>
        <div className={css.app.wrapper}>
          <div className={css.home.connectIcons}>
            <a className={css.home.twitterLink} href='https://twitter.com/smockled' title='Twitter'>
              <img alt='Twitter' className={css.home.twitterIcon} src={require('../assets/images/connect/twitter.svg')}></img>
              @smockled
            </a>
            <a className={css.home.githubLink} href='https://github.com/smockle' title='GitHub'>
              <img alt='GitHub' className={css.home.gitHubIcon} src={require('../assets/images/connect/github.svg')}></img>
              smockle
            </a>
            <a className={css.home.dribbbleLink} href='https://dribbble.com/smockle' title='Dribbble'>
              <img alt='Dribbble' className={css.home.dribbbleIcon} src={require('../assets/images/connect/dribbble.svg')}></img>
              smockle
            </a>
            <a className={css.home.linkedInLink} href='https://linkedin.com/in/smockle' title='LinkedIn'>
              <img alt='LinkedIn' className={css.home.linkedInIcon} src={require('../assets/images/connect/linkedin.svg')}></img>
              smockle
            </a>
          </div>
        </div>
      </section>
</div>
</div>

</div>
    );
  }
}
export default Resume;
