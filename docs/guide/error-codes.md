---
sidebar_position: 7
---

# Error codes

Status Code | Substatus | Case | Description
--- | --- | --- | ---
E:400 | 1 | 1 | The submitted Core ID is deemed invalid
E:404 | 1 | 1 | The recipient's email address is invalid
E:404 | 1 | 2 | The recipient's email address is invalid
E:406 | 1 | 1 | The message lacks valid OpenPGP/GPG encryption. Locate the recipient's public key on a server such as [keys.openpgp.org](https://keys.openpgp.org)
E:406 | 1 | 3 | A required PGP/GPG signature was not found
E:500 | 1 | 1 | The recipient's email address occurs error
E:500 | 1 | 2 | Failed to load the recipient from the database
E:500 | 1 | 3 | Failed to forward message to recipient
