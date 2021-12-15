import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Learn about DAOs',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Learn what NnsDAO is doing and how to quickly create your own DAOs using NnsDAO.
      </>
    ),
  },
  {
    title: 'How to contribute to DAOs',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Check out the DAOs, DAOn guides, and find your own <code>DAOs</code> to contribute to.
      </>
    ),
  },
  {
    title: 'Connect with other Developers',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Join our Discord and talk to other IC Blockchain developers. Ask questions, 
        team up(DAOs) or simply hang out and chat about all things Crypto.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className={styles.title} >What do you want to do today?</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
