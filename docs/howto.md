---
sidebar_position: 2
---

# How to send email?

To send the email successfully to `onion.emal` receiver's address you need to follow the steps below:
1. Provide your Core ID with one of the following ways:
   1. Add your Core ID to the recipient's 'plus' addressing field, e.g. `receiver+cb00…@onion.email`
   2. Create your own email address with your Core ID, e.g. `cb00…@yourprovider.com`
   3. Add your Core ID to the email's headers items, e.g. `X-CoreId: cb00…`
1. Encrypt your email's body with receiver GPG/PGP key. You can find the key on the dabase of public keys, e.g. [keys.openpgp.org](https://keys.openpgp.org/) or [pgp.mit.edu](https://pgp.mit.edu/). Otherwise ask the receiver about his public key.
