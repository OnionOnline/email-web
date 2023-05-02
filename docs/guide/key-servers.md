---
sidebar_position: 5
---

# The key servers

If you want to send an email to someone with an Onion Email address, you need to encrypt the message with the receiver's public key. You can find the key in the public key database, such as [keys.openpgp.org](https://keys.openpgp.org/) or [pgp.mit.edu](https://pgp.mit.edu/). Otherwise, ask the receiver about their public key.

## How to find the public key?

You can find the receiver's public key if they have uploaded it to a public place, such as:

1. GPG/PGP key servers, e.g. [keys.openpgp.org](https://keys.openpgp.org/) or [pgp.mit.edu](https://pgp.mit.edu/)
2. Their own public place, e.g. website or GitHub
3. They use customized `mailto` links with the `key` parameter, e.g. `mailto:contact@onion.email?key=https%3A%2F%2Fkeys.openpgp.org%2Fvks%2Fv1%2Fby-fingerprint%2FF670A2D3626AB878A46D7AA8879FF4E05B438A11`, where the value is the location of the public key in ASC format.
