import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Block unwanted communication',
    Svg: require('@site/static/img/icon-shield.svg').default,
    description: (
      <>
        Onion Email will block any emails that do not have a valid Core ID and permission to communicate with you.
      </>
    ),
  },
  {
    title: 'Focus on Security',
    Svg: require('@site/static/img/icon-document.svg').default,
    description: (
      <>
        A valid Core ID and GPG/PGP encryption are required by default.
      </>
    ),
  },
  {
    title: 'Core ID',
    Svg: require('@site/static/img/icon-id.svg').default,
    description: (
      <>
        <a href="https://corepass.net" target="_blank" rel="noopener noreferrer">CorePass</a> is a new way to manage your identity, using a blockchain-based decentralized identity platform to manage Core IDs.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
