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
        <div className={css.app.wrapper}>
          <header className={css.resume.header}>
            <h1>Clay Miller</h1>
            <div>
              <span style={{margin: '0 10px'}}>/</span>
            </div>
            <p>I build the Internet. My ideal workplace lets me take ownership in my work, learn bleeding-edge technologies, help people connect and grow, and build things that endure. Diversity, accessibility and empathy are very important to me. I’ll continue developing—learning new skills while honing existing ones—and I’ll share everything I learn.</p>
          </header>
        </div>
      </section>

      <section id="work">
        <div className={css.resume.wrapper}>
          <h1>Work.</h1>
          <div>
            <div className={css.resume.flex}>
              <h2>Xamarin</h2>
              <date>2014-03-17—</date>
            </div>
            <div>Full Stack Developer</div>
            <div>
              <p>Xamarin provides development tools to build and test native mobile apps, including Xamarin Platform, Xamarin Test Cloud, &amp; Xamarin Insights.</p>
            </div>
            <h3>Highlights</h3>
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
          <div>
            <div className={css.resume.flex}>
              <h2>Auburn University Career Center</h2>
              <date>2014-01-13 — 2014-05-02</date>
            </div>

            <div>Web Developer</div>
            <h3>Highlights</h3>
            <ul>
              <li>Designed and developed <a href="http://auburn.edu/career/">responsive websites</a> with the Laravel MVC framework.</li>
              <li>Integrated feeds from Twitter, the University Calendar and the Career Center Blog.</li>
            </ul>
          </div>
          <div>
            <h2>ACLU of Alabama</h2>
            <date>2013-08-05 — 2013-12-16</date>

            <div>Web Developer (Freelance)</div>
            <div>
              <p>The ACLU is our nation's guardian of liberty, working daily in courts, legislatures and communities to defend and preserve the individual rights and liberties.</p>
            </div>
            <h3>Highlights</h3>
            <ul>
            <li>Designed, developed and published a <a href="http://aclualabama.org/wp/">WordPress-based website</a>.</li>
            <li>Delivered comprehensive documentation.</li>
            </ul>
          </div>
          <div>
            <h2>Auburn University OIT</h2>
            <date>2011-08-22 — 2013-12-20</date>
            <div>Web Developer</div>
            <div>
              <p>The Auburn University Office of Information Technology provides centralized computing services and resources to the Auburn University community.</p>
            </div>
            <h3>Highlights</h3>
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
            <h2>Auburn University</h2>
            <date>2010-08-18 — 2014-12-13</date>

            <div>BS in Software Engineering; Spanish concentration</div>
            <h3>Courses</h3>
            <ul className={css.resume.courses}>
              <li>COMP 4970 - Introduction To Game Design and Development</li>
              <li>COMP 5600 - Artificial Intelligence</li>
              <li>COMP 5710 - Software Quality Assurance</li>
            </ul>
          </div>
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

      <section id="skills" className={css.resume.skills}>
        <div className={css.resume.wrapper}>
            <h1>Skills.</h1>
            <ol className={css.resume.ol}>
              <li><strong>Sketch</strong> to create design comps and icons. <strong>Illustrator</strong> for more complex paths. <strong>Photoshop</strong> for raster image edits.</li>
              <li>Semantic <strong>HTML5</strong> or <strong>JSX</strong> with ARIA landmark roles</li>
              <li>CSS Modules for composable style classes. <strong>PostCSS</strong> for variables and prefixes.  <strong>Sass</strong>/<strong>Less</strong> in older projects. Color contrast checked in tota11y.</li>
              <li><strong>ECMAScript 6/7</strong> transpiled with Babel. Organized in modules. Linted with ESLint. Types via Flow.</li>
              <li>If necessary, a framework to organize routing, data, etc. Lately I’m working with <strong>React</strong> + Redux + React Router, but I’ve used <strong>Ember</strong> too.</li>
              <li>JPEG 2000 and WebP images with a fallback. Optimized and fingerprinted. Sent with long Cache-Control headers.</li>
              <li><strong>FontForge</strong> to remove unused glyphs from web fonts while preserving OpenType features.</li>
              <li>Build pipeline via <strong>Webpack</strong>. Hot reloading of styles, components and routes. I’ve also used <strong>Grunt</strong> and <strong>Broccoli</strong>.</li>
              <li>Offline and low-bandwidth support via both <strong>App Cache</strong> and a <strong>Service Worker</strong>.</li>
              <li><strong>Node.js</strong> + <strong>Express</strong> as a web server. <strong>NGINX</strong> as a reverse proxy, load balancer or static file server. With HTTP/2.</li>
              <li><strong>MongoDB</strong> and <strong>Redis</strong> for data storage. <strong>MariaDB</strong> or <strong>Postgres</strong> if I’m setting up Ghost or <strong>WordPress</strong>.</li>
              <li><strong>Docker</strong> Machine and Compose to manage environments. <strong>Git</strong>’s reflog to save my lost code.</li>
              <li><strong>Amazon Web Services</strong> (IAM, EC2, RDS, SES, SNS, S3, CloudFront, Route 53) as a PaaS.</li>
              <li>Domain purchased and DNS configured. DKIM, SPF and DMARC records for email verification. Secondary DNS with AXFR.</li>
              <li>SSL certificate installed and server configured for HSTS, HPKP, forward secrecy and OCSP stapling. Unique primes for DH.</li>
              <li>Tests via <strong>Mocha</strong>, Chai and <strong>Sinon</strong>. Coverage reported to Code Climate and Coveralls. Run continuously in Travis CI and AppVeyor.</li>
              <li>Dependencies managed via Snyk (for security), Greenkeeper (for safety) and David DM (for updates).</li>
              <li>Visitor analytics through <strong>Google Analytics</strong>. Server and process monitoring in <strong>New Relic</strong>.</li>
            </ol>
        </div>
      </section>

      <section className={css.home.explore} id='play'>
        <div className={css.resume.wrapper}>
          <h1>Interests.</h1>
          <p>I like engaging with brands on Twitter, savoring smoky whisky, creating Jackson Pollock-esque latte art, geocaching in the great outdoors, comparing Sortino ratios, memorizing Kanji, practing yoga, jamming to freak folk, critiquing postmodern literature, learning about intersectionality and staring thoughtfully at Impressionist paintings.</p>
        </div>
      </section>

      <section className={css.home.connect} id='connect'>
        <div className={css.app.wrapper}>
          <h1>Profiles.</h1>
          <div className={css.home.connectIcons}>
            <a className={css.home.twitterLink} href='https://twitter.com/smockled' title='Twitter'>
              <img alt='Twitter' className={css.home.twitterIcon} src={require('../assets/images/connect/twitter.svg')}></img>
            </a>
            <a className={css.home.githubLink} href='https://github.com/smockle' title='GitHub'>
              <img alt='GitHub' className={css.home.gitHubIcon} src={require('../assets/images/connect/github.svg')}></img>
            </a>
            <a className={css.home.dribbbleLink} href='https://dribbble.com/smockle' title='Dribbble'>
              <img alt='Dribbble' className={css.home.dribbbleIcon} src={require('../assets/images/connect/dribbble.svg')}></img>
            </a>
            <a className={css.home.linkedInLink} href='https://linkedin.com/in/smockle' title='LinkedIn'>
              <img alt='LinkedIn' className={css.home.linkedInIcon} src={require('../assets/images/connect/linkedin.svg')}></img>
            </a>
          </div>
        </div>
      </section>
    </div>
    );
  }
}
export default Resume;
