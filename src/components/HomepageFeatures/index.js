import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Anonymous Internet',
    description: (
        <>
        Negy gives everyone robust privacy. It is completely free and takes less than a minute to set up.
        </>
    ),
  },
  {
    title: 'Never give up UX',
    description: (
        <>
        We don't have to sacrifice the UX for the strong privacy protection, as Negy sticks to the network layer and does not interfere with the UX of the application layer.
        </>
    ),
  },
  {
    title: 'Dark web won\'t be our target',
    description: (
        <>
        Negy's target audience is not users who want to access the dark web. Rather, it is the opposite. To gain stronger security, http access is blocked. (Only https is allowed.)
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
      <div className={styles.ph}>
      <a href="https://www.producthunt.com/posts/negy?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-negy" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=363782&theme=light" alt="Negy - Next&#0032;Generation&#0032;Anonymous&#0032;Internet | Product Hunt" style={{width: '250px', height: '54px'}} width="250" height="54" /></a>
      </div>
      </div>
      </section>
  );
}
