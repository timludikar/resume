import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Achievements.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <h2>ACHIEVEMENTS</h2>
        <article>
          <h3>FULL STACK TORONTO</h3>
          <ul>
            <li>Co-founder of Toronto’s  rst Full Stack, non-pro t, developer community.</li>
            <li>Hosted the  rst Full Stack Conference in November 2014 in Toronto.</li>
            <li>On track to doubling sponsorship contributions for 2015.</li>
          </ul>
        </article>
        <article>
          <h3>SOFT GRAVITY</h3>
          <ul>
            <li>Built a front-end development team from the ground up.</li>
            <li>Successfully delivered 2, $100k development projects in 4 months.</li>
            <li>Started the company’s first R&D Department.</li>
          </ul>
        </article>
        <article>
          <h3>ViXS SYSTEMS</h3>
          <ul>
            <li>Instigated a key department responding to the Sales, Marketing, and Engineering Directors developing new rapid prototype designs.</li>
            <li>Promoted within 5 months to supporting Tier One customers with Linux Application support.</li>
            <li>Managed and completed simultaneous software engineering projects.</li>
            <li>Critical team member in the company’s largest production win.</li>
          </ul>
        </article>
        <article>
          <h3>THALES RAIL SIGNALING SOLUTIONS</h3>
          <ul>
            <li>Fast-tracked to work on the highest pro le project in the company as a Systems Design Specialist.</li>
            <li>Received excellent reviews 2 years in a row.</li>
          </ul>
        </article>
      </section>
    );
  }
}

export default CSSModules(App, styles);
