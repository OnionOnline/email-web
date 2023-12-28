---
sidebar_position: 2
---

# How to send email?

To send the email successfully to `onion.emal` receiver's address you need to follow the steps below:

1. Provide your Core ID with one of the following ways:
   1. Create your own email address with your Core ID, e.g. `cb00…@yourprovider.com`
   2. Append your Core ID into your email address, e.g. `yourname+cb00…@yourprovider.com`
   3. Define your Core ID as your name in your email client settings (first or second name).
   4. Add your Core ID to the email's headers items, e.g. `X-Coreid: cb00…`
2. Encrypt your email's body with receiver GPG/PGP key. You can find the key on the dabase of public keys, e.g. [keys.openpgp.org](https://keys.openpgp.org/) or [pgp.mit.edu](https://pgp.mit.edu/). Otherwise ask the receiver about his public key.

## Outlook example

Manual how to send email from Outlook to `onion.email` receiver's address: [Send a digitally signed or encrypted message](https://support.microsoft.com/en-us/office/send-a-digitally-signed-or-encrypted-message-a18ecf7f-a7ac-4edd-b02e-687b05eff547).

## Thunderbird example

Manual how to send email from Thunderbird to `onion.email` receiver's address: [Digitally Signing and Encrypting Messages](https://support.mozilla.org/en-US/kb/digitally-signing-and-encrypting-messages).

## MailMate example

Manual how to set CoreID in MailMate to [automate the workflow process](/docs/guide/mailmate-client).

To learn more about OpenPGP and S/MIME support in MailMate, see the [Security](https://manual.mailmate-app.com/preferences#openpgp-and-smime) section of the manual.
