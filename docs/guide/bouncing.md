---
sidebar_position: 6
---

# Bouncing

## What is bouncing?

In the context of email communication, "bouncing" refers to the process where an email message is rejected by the recipient's mail server and returned to the sender. This typically occurs when there are issues with the recipient's email address, such as it being invalid, inactive, or non-existent. Bounces can also happen if the recipient's server identifies the incoming email as spam or if there are policy restrictions on the server that prevent the delivery of the email. When an email bounces, the sender usually receives a bounce-back message, often from a specially formatted email address, explaining why the email was not delivered. This information is crucial for email senders, particularly in marketing or informational campaigns, as it helps them clean and update their email lists and troubleshoot delivery issues. Understanding and managing email bounces is a key aspect of maintaining effective email communication and ensuring a high delivery rate.

## Why do emails bounce?

Emails bounce for a variety of reasons, which can generally be categorized into two main types: "hard bounces" and "soft bounces."

1. **Hard Bounces**: These occur when the email is permanently rejected. Common reasons for hard bounces include:
   - **Invalid Recipient Address**: The email address doesn't exist, perhaps due to a typo or because it was deleted or never created.
   - **Domain Issues**: The domain name (like example.com in john(at)example.com) doesn’t exist or has expired.
   - **Server Rejection**: The recipient’s email server has blocked the sending server or has very strict filtering rules.

2. **Soft Bounces**: These are temporary delivery failures. Common causes include:
   - **Mailbox Full**: The recipient's email inbox is full and cannot accept new messages.
   - **Large Email Size**: The sent email is too large for the recipient's server to accept.
   - **Server Issues**: The recipient’s email server is down or temporarily unavailable.
   - **Spam Detection**: The email is suspected as spam by the recipient’s server, possibly due to its content or the sender’s reputation.

Understanding why emails bounce is crucial for maintaining effective email communication. Regularly monitoring and analyzing bounce reasons can help in taking corrective actions, like cleaning up email lists or adjusting email content and settings, to improve the deliverability of future emails.

## How Onion.email handles bounces?

Onion.email implements a system where it will return emails to the sender in certain scenarios: if the recipient's email address is invalid or non-existent in their system, if the sender's email address is not included in a whitelist, or if the sender's email fails to meet specific requirements. In such cases, the sender is notified with a bounce-back message from a distinctively formatted email address, detailing the reasons for non-delivery. This feature is particularly beneficial for senders in marketing or information dissemination roles, as it assists in maintaining accurate email lists and identifying delivery challenges. Onion.email utilizes this mechanism as a way to sift through and eliminate spam or undesired emails. Under certain circumstances, such as repeated subscriptions or high-frequency sending, an email address might be temporarily or permanently blocked, underscoring Onion.email’s commitment to protecting its users from spam and unsolicited emails. Typically, these incidents are identified as 'Hard Bounces - Server Rejection' by the sender's email server, leading to eventual cessation of email delivery attempts after multiple failures. While this process is effective in filtering unwanted communications, it may also lead to some unintended consequences, depending on the policies of the specific email server involved.
