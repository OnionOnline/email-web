import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import SvgLogo from '@site/static/img/logo.svg';
import styles from './index.module.css';

const benefits = [
	['01', 'Plaintext stops here', 'Messages must use OpenPGP-compatible encryption, including GPG, before they can reach your private inbox. Unencrypted mail is declined at the gateway.'],
	['02', 'Your inbox stays private', 'Publish an Onion Email address while keeping the destination mailbox behind it undisclosed.'],
	['03', 'Identity when useful', 'A sender may attach a Core ID for decentralized identity context. It is optional, and validated when present.'],
];

const flow = [
	['Address', 'Share your alias', 'Use your @onion.email address publicly instead of exposing your everyday mailbox.'],
	['Encrypt', 'Sender uses your public key', 'The message is protected with OpenPGP/GPG before it leaves the sender’s device.'],
	['Verify', 'The gateway checks policy', 'Encrypted messages continue. Plaintext is rejected. Approved service senders may bypass the encryption rule.'],
	['Deliver', 'Only accepted mail is forwarded', 'Your private destination receives the original accepted message through authenticated email routing.'],
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home(): React.JSX.Element {
	return (
		<Layout title="Encrypted email routing that refuses plaintext" description="Onion Email protects your private inbox with an encrypted email gateway. Unencrypted mail is declined, Core ID is optional, and accepted messages are forwarded securely.">
			<main className={styles.page}>
				<section className={styles.hero}>
					<div className={styles.heroGlow} aria-hidden="true" />
					<div className={`container ${styles.heroGrid}`}>
						<div className={styles.heroCopy}>
							<div className={styles.eyebrow}><span className={styles.statusDot} />Encrypted email gateway</div>
							<h1>Private email should never arrive in plaintext.</h1>
							<p className={styles.heroLead}>Onion Email puts a strict privacy layer in front of your inbox. It accepts OpenPGP/GPG-encrypted mail, declines plaintext, and keeps your real destination address out of public view.</p>
							<div className={styles.actions}>
								<Link className={styles.primaryAction} to="/docs/howto">Send encrypted email <Arrow /></Link>
								<Link className={styles.secondaryAction} to="/docs/intro">Explore the service</Link>
							</div>
							<p className={styles.heroNote}>OpenPGP/GPG required · Core ID optional · trusted-service exceptions supported</p>
						</div>
						<div className={styles.gatewayCard} aria-label="Onion Email gateway flow">
							<div className={styles.cardTopline}><span>Gateway policy</span><span className={styles.liveState}>Active</span></div>
							<div className={styles.routeVisual}>
								<div className={styles.routePoint}><span className={styles.routeIcon}>@</span><small>Public alias</small></div>
								<div className={styles.routeLine}><span /></div>
								<div className={styles.onionMark}><SvgLogo role="img" aria-label="Onion Email" /></div>
								<div className={styles.routeLine}><span /></div>
								<div className={styles.routePoint}><span className={styles.routeIcon}>✓</span><small>Private inbox</small></div>
							</div>
							<div className={styles.policyList}>
								<div><span>Encrypted OpenPGP/GPG</span><strong className={styles.accepted}>Accepted</strong></div>
								<div><span>Unencrypted message</span><strong className={styles.declined}>Declined</strong></div>
								<div><span>Core ID</span><strong>Optional</strong></div>
							</div>
						</div>
					</div>
				</section>

				<section className={styles.benefitsSection}>
					<div className="container">
						<div className={styles.sectionIntro}>
							<p className={styles.kicker}>A quieter, safer inbox</p>
							<h2>Protection before delivery.</h2>
							<p>Privacy policy is enforced at the email gateway—not left as another setting for the recipient to remember.</p>
						</div>
						<div className={styles.benefitGrid}>
							{benefits.map(([number, title, body]) => <article className={styles.benefitCard} key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}
						</div>
					</div>
				</section>

				<section className={styles.flowSection}>
					<div className={`container ${styles.flowLayout}`}>
						<div className={styles.flowHeading}>
							<p className={styles.kicker}>How it works</p>
							<h2>Four steps.<br />One private destination.</h2>
							<p>Onion Email is a routing layer, so you can keep using the mailbox you already trust.</p>
							<Link to="/docs/guide/key-servers" className={styles.textLink}>Find a recipient’s public key <Arrow /></Link>
						</div>
						<div className={styles.flowList}>
							{flow.map(([label, title, body], index) => (
								<article className={styles.flowItem} key={label}>
									<div className={styles.flowNumber}>{String(index + 1).padStart(2, '0')}</div>
									<div><span>{label}</span><h3>{title}</h3><p>{body}</p></div>
								</article>
							))}
						</div>
					</div>
				</section>

				<section className={styles.transparencySection}>
					<div className={`container ${styles.transparencyCard}`}>
						<div><p className={styles.kicker}>Clear rules, no mystery</p><h2>Built to reject, not quietly collect.</h2></div>
						<div className={styles.transparencyCopy}>
							<p>Messages that do not meet the recipient’s policy are declined during processing. Approved transactional senders can be allowlisted for account verification and service notices.</p>
							<p>Core ID adds identity context when supplied, but it is not required to send encrypted mail.</p>
							<Link to="/docs/guide/error-codes" className={styles.textLink}>Read the rejection codes <Arrow /></Link>
						</div>
					</div>
				</section>

				<section className={styles.ctaSection}>
					<div className={`container ${styles.ctaCard}`}>
						<SvgLogo className={styles.ctaLogo} aria-hidden="true" />
						<div><p className={styles.kicker}>Start a private conversation</p><h2>Send us an encrypted email.</h2><p>Use our public key and see the Onion Email gateway in action.</p></div>
						<Link className={styles.lightAction} to="mailto:contact@onion.email?key=https%3A%2F%2Fkeys.openpgp.org%2Fvks%2Fv1%2Fby-fingerprint%2FF670A2D3626AB878A46D7AA8879FF4E05B438A11">Contact Onion Email <Arrow /></Link>
					</div>
				</section>
			</main>
		</Layout>
	);
}
