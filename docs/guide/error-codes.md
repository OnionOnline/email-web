---
sidebar_position: 6
---

# Error codes

| Status Code | Substatus | Case | Description |
| --- | --- | --- | --- |
| E:400 | 1 | 1 | The submitted Core ID is deemed invalid |
| E:403 | 10 | 1 | The message directed to the recipient lacks encryption through the use of a PGP/GPG key. You may locate the signing key on servers like https://keys.openpgp.org by searching for recipient's email address |
| E:403 | 10 | 2 | The message directed to the recipient lacks encryption through the use of a PGP/GPG key. You may locate the signing key on servers like https://keys.openpgp.org by searching for recipient's email address |
| E:403 | 10 | 3 | The message directed to the recipient lacks encryption through the use of a PGP/GPG key. You may locate the signing key on servers like https://keys.openpgp.org by searching for recipient's email address |
| E:403 | 10 | 4 | The message directed to the recipient lacks a signature and should be signed with your PGP/GPG key |
| E:403 | 10 | 5 | The message directed to the recipient lacks a signature and should be signed with your PGP/GPG key |
| E:404 | 1 | 1 | The recipient's email address is invalid |
| E:406 | 1 | 1 | The message directed to the recipient lacks encryption through the use of a PGP/GPG key. You may locate the signing key on servers like https://keys.openpgp.org by searching for recipient's email address |
| E:406 | 1 | 2 | The message directed to the recipient lacks a signature and should be signed with your PGP/GPG key |
| E:422 | 1 | 1 | The message directed to the recipient is missing body content |
| E:500 | 1 | 1 | The recipient's email address occurs error |
