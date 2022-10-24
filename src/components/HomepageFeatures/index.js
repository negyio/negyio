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
        When it comes to personal data on the internet, cookies are now the most popular topic to get attention. But if you don't conceal your routing, the accessing server knows who you are on a network level.
        </>
    ),
  },
  {
    title: 'Easy to Use',
    description: (
        <>
        Negy aims to conceal routing easier than any other technology like Tor. Even if you are not an engineer, you will find it easy to use. It takes less than a minute to try it out!
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
