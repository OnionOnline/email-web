---
sidebar_position: 2
---

# How to send encrypted email

To send email to an `onion.email` address:

1. Find the recipient's OpenPGP/GPG public key on a public key server or request it directly.
2. Encrypt the message with that public key before sending. Unencrypted messages are declined.
3. Optionally provide your Core ID in one of these ways:
   1. Create your own email address with your Core ID, e.g. `cb00…@yourprovider.com`
   2. Append your Core ID into your email address, e.g. `yourname+cb00…@yourprovider.com`
   3. Define your Core ID as your name in your email client settings (first or second name).
   4. Add your Core ID to the email's headers items, e.g. `X-Coreid: cb00…`

When a Core ID is supplied, Onion Email validates it. A missing Core ID does not prevent an encrypted message from being delivered.

The recipient may also use a plus-address variation such as `username+something@onion.email`. It routes through `username@onion.email`; no separate registration is needed. See [Plus addressing](/docs/guide/create-an-alias#plus-addressing).

:::tip OpenPGP and GPG
OpenPGP is the encryption standard. GPG (GnuPG) is a compatible implementation of that standard, so messages encrypted with GPG are supported.
:::

## Outlook example

Manual how to send email from Outlook to `onion.email` receiver's address: [Send a digitally signed or encrypted message](https://support.microsoft.com/en-us/office/send-a-digitally-signed-or-encrypted-message-a18ecf7f-a7ac-4edd-b02e-687b05eff547).

## Thunderbird example

Manual how to send email from Thunderbird to `onion.email` receiver's address: [Digitally Signing and Encrypting Messages](https://support.mozilla.org/en-US/kb/digitally-signing-and-encrypting-messages).

## MailMate example

Manual how to set CoreID in MailMate to [automate the workflow process](/docs/guide/mailmate-client).

To learn more about OpenPGP and S/MIME support in MailMate, see the [Security](https://manual.mailmate-app.com/preferences#openpgp-and-smime) section of the manual.
