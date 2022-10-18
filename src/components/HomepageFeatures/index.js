import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Anonymous Internet',
    description: (
        <>
        Negy transparently conceals the routing of HTTP requests. In other words, Negy makes it impossible for the accessing server to know who has accessed it.
        </>
    ),
  },
  {
    title: 'Protect Your Personal Data',
    description: (
        <>
        When it comes to personal data on the internet, cookies are now the most popular topic to get attention. But if you don\'t conceal your routing, you know who you are on a network level - Negy aims to be at the cutting edge of internet security.
        </>
    ),
  },
  {
    title: 'Easy to Use',
    description: (
        <>
        Negy aims to conceal routing easier than any other technology. Even if you are not a technician, you will find it easy to use. It takes less than a minute to try it out.
        </>
    ),
  },
];

function Feature({title, description}) {
  return (
      <div className={clsx('col col--4')}>
      <div className="text--center">
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
      <div className="row">
      {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
      ))}
    </div>
      </div>
      </section>
  );
}
