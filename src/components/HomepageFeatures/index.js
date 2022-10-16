import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Anonymous Internet',
    description: (
        <>
        Negy follows the traditional protocol called tor, but with much improved convenience and portability. Anonymised routing, which until now has given the impression of the Dark Web, is now easily available to everyone.
        </>
    ),
  },
  {
    title: 'Just as Proxy',
    description: (
        <>
        Negy requires little special configuration. Simply adapt the proxy settings from the respective OS or software settings.
        </>
    ),
  },
  {
    title: 'High Portability',
    description: (
        <>
        The gateways, nodes and node pool that make up Negy can all be run as containers. You have maximum flexibility to run your own personal gateway at hand, or create a node pool and reconfigure the network itself.
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
