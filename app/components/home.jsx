import App from 'app';
import {default as appcss} from './app.css';
import {default as homecss} from './home.css';
let css = {app: appcss, home: homecss};
import React from 'react';

export default class Home extends App {
  render() {
      return (
        <div className={css.home.home}>
          <section className={css.home.hero} id='hero'>
            <div className={css.home.wrapper}>
              <header>
                <h1 className={css.home.big}>SALUT!</h1>
                <em>I’m</em>
                <h1>Clay Miller.</h1>
              </header>
            </div>
          </section>

          <section className={css.home.build} id='work'>
            <div className={css.app.wrapper}>
              <h1>Builder.</h1>
              <p>I build the Internet. My ideal workplace lets me take ownership in my work, learn bleeding-edge technologies, help other people connect and grow, and build things that endure. Diversity, accessibility and empathy are very important to me. I’ll continue developing—learning new skills while honing existing ones—and I’ll share everything I learn.</p>
            </div>
          </section>

          <section className={css.home.explore} id='play'>
            <div className={css.app.wrapper}>
              <h1>Explorer.</h1>
              <p>My hobbies, unabridged: adjusting kerning of neo-grotesque typefaces, reading "I Want My Hat Back" in a local bookstore, engaging with brands on Twitter, savoring smoky whisky, collecting salt, detecting hints of plum in wine, creating Jackson Pollock-esque latte art, waiting for coffee grounds to bloom, geocaching in the great outdoors, comparing Sortino ratios, memorizing Kanji, sampling cow brain burritos, eating vegetarian, practing yoga, training for a half marathon, mapping functors, spinning experimental hip hop records, jamming to freak folk, critiquing postmodern literature, campaigning for social justice, lifting weights, learning about intersectionality, contributing to open source, encoding data in the blockchain, and staring thoughtfully at Impressionist paintings.</p>
            </div>
          </section>

          <section className={css.home.connect} id='connect'>
            <div className={css.app.wrapper}>
                <h1>Thought Haver.</h1>
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
                <a className={css.home.emailLink} href='mailto:clay@smockle.com' title='Email'>
                  <img alt='Email' className={css.home.emailIcon} src={require('../assets/images/connect/email.svg')}></img>
                </a>
                <a className={css.home.stackOverflowLink} href='http://stackoverflow.com/users/1923134/smockle' title='Stack Overflow'>
                  <img alt='Stack Overflow' className={css.home.stackOverflowIcon} src={require('../assets/images/connect/stack-overflow.svg')}></img>
                </a>
                <a className={css.home.linkedInLink} href='https://linkedin.com/in/smockle' title='LinkedIn'>
                  <img alt='LinkedIn' className={css.home.linkedInIcon} src={require('../assets/images/connect/linkedin.svg')}></img>
                </a>
                <a className={css.home.instagramLink} href='https://instagram.com/smockle' title='Instagram'>
                  <img alt='Instagram' className={css.home.instagramIcon} src={require('../assets/images/connect/instagram.svg')}></img>
                </a>
              </div>
            </div>
          </section>
        </div>
      );
    }
}
