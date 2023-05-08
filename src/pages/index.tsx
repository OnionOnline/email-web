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
              <div>To successfully send an email, the sender must fulfill the following criteria:</div>
              <div>
                <ol>
                  <li>
                    <strong>Provide your valid Core ID:</strong> The sender's email name, email's 'plus' addressing field, or the 'X-CoreId' header must contain a valid Core ID. The email will be rejected if no valid Core ID is found. Check the <a href="/docs/guide/coreid">list of supported options</a> for more information.
                  </li>
                  <li>
                    <strong>Core ID validation:</strong> The provided Core ID must pass the <a href="https://github.com/cryptohub-digital/ican.js" target="_blank" rel="noopener noreferrer">ICAN check</a>. The email will be rejected if the Core ID is invalid.
                  </li>
                  <li>
                    <strong>Sign the email:</strong> The sender's email must be signed using PGP/GPG. The email will be rejected if no signature is found.
                  </li>
                  <li>
                    <strong>Encrypt the email:</strong> The email body must be encrypted using PGP/GPG. The recipient's public key can be found in databases such as <a href="https://keys.openpgp.org" target="_blank" rel="noopener noreferrer">keys.openpgp.org</a>. The email will be rejected if encryption is not found. Found out more about <a href="/docs/guide/key-servers">the key servers</a>.
                  </li>
                </ol>
              </div>
              <div>If all of these conditions are met, the email will be forwarded to the recipient. If any of these conditions are not met, the email will be rejected and an appropriate error message will be provided.</div>
              <hr />
              <div>Reach us with your first email:</div>
              <div>
                <Link
                  className="button button--secondary button--lg"
                  to="mailto:sales@onion.email?key=https%3A%2F%2Fkeys.openpgp.org%2Fvks%2Fv1%2Fby-fingerprint%2FF670A2D3626AB878A46D7AA8879FF4E05B438A11">
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
