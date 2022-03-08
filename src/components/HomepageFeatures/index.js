import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        RediDB is very simple and features are mostly self explanatory. That's what it was supposed to be!
        This datastore has one version only and runs with docker compose. It's as simple as copying a file and changing user and password. With a tool like Portainer, it's just as simple as two clicks!
      </>
    ),
  },
  {
    title: 'Secure',
    description: (
      <>
        Without sending an authentication request you won't have any access to data stored on the db. If the credentials are wrong, RediDB will disconnect you.
      </>
    ),
  },
  {
    title: 'Fast',
    description: (
      <>
        RediDB is extremely fast. It uses Websockets for fast data transport and stores the data in an variable which is backed up every two seconds.
        When RediDB starts, it reads the data and saves it automatically. That's how we achieve fast and persistent data saving.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
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
