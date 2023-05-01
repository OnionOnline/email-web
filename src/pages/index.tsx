import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import SvgLogo from '@site/static/img/logo.svg';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <SvgLogo width="92" opacity="0.8" className="logo" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Peel away your worries with Onion Email`}
      description="The ultimate layer of privacy protection for your online communications.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className="howto">
          <div className="container">
            <div>
              <h2>How to send your first onion email?</h2>
              <div>In order to successfully receive an email, the sender must fulfill the following criteria:</div>
              <div>
                <ol>
                    <li>
                        <strong>Provide a valid Core ID:</strong> The sender's email name, the recipient email's 'plus' addressing field, or the 'X-CoreId' header must contain a valid Core ID. The email will be rejected if no valid Core ID is found.
                    </li>
                    <li>
                        <strong>Core ID validation:</strong> The provided Core ID must pass the <a href="https://github.com/cryptohub-digital/ican.js" target="_blank" rel="noopener noreferrer">ICAN check</a>. The email will be rejected if the Core ID is invalid.
                    </li>
                    <li>
                        <strong>Enforce encryption:</strong> The email body must be encrypted using PGP/GPG. The recipient's public key can be found in databases such as <a href="https://keys.openpgp.org" target="_blank" rel="noopener noreferrer">keys.openpgp.org</a>. The email will be rejected if encryption is not found.
                    </li>
                </ol>
              </div>
              <div>If all of these conditions are met, the email will be forwarded to the recipient. If any of these conditions are not met, the email will be rejected and an appropriate error message will be provided.</div>
              <hr />
              <div>Reach us with your first email:</div>
              <div>
                <Link
                  className="button button--secondary button--lg"
                  to="mailto:sales@onion.email?key=https%3A%2F%2Fonion.email%2Fkeys%2FOnionEmail(4ABCA2C2)%E2%80%93Public.asc">
                  Contact sales via 🧅📧
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
