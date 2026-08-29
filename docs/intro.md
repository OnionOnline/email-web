---
sidebar_position: 1
---

# What is Onion Email?

Onion Email is an encrypted email gateway that protects the private mailbox behind your public `@onion.email` address.

## What you get

You will get:

- A public alias that keeps your destination mailbox private
- A gateway that declines unencrypted mail before forwarding
- OpenPGP-compatible protection, including GPG/GnuPG, using the recipient's public key
- Optional Core ID context when a sender supplies one
- Trusted-sender exceptions for essential verification and service messages
- Plus-address variations such as `username+shopping@onion.email`, all routed to the base alias

## How it works

The service is working as follows:

1. Register your private destination address. A Core ID may be added, but is not required.
2. Approve the creation of the address by clicking on the link in the email sent to your email address.
3. Generate an OpenPGP key pair with GPG/GnuPG or another compatible application, then upload your public key to a public key server.
4. Establish a redirection rule within your email service to enable sending emails from your Onion Email address alias (optional).
5. Share the Onion Email alias. Accepted messages are forwarded to the verified destination; plaintext messages are declined.

:::note Trusted senders
Approved transactional senders may be allowlisted so account verification and security notices can arrive even when the sender does not support OpenPGP/GPG.
:::
