---
sidebar_position: 3
---

# Email headers

The system is checking the email headers for presence of the Core ID. If the Core ID is not present in the email headers, the email will continue with next checks.

## How to add Core ID to the email headers?

The Core ID header look like this:

```txt
X-Coreid: cb00…
```

To add the Core ID to the email headers you need to follow few ways:

1. The programmatic way
2. Using specified email client
3. The mass mailing solutions
4. Plugins

### The programmatic way

You can develop your own solution to add the Core ID to the email headers.

Example in Javascript:

```javascript
const newHeaders = new Headers(oldheaders);
newHeaders.set("X-Coreid", "cb00…");
```

In phpmailer:

```php
$mail->addCustomHeader("X-Coreid", "cb00…");
```

### Using specified email client

You can use the specified email client to add the Core ID to the email headers.

The [Evolution](https://help.gnome.org/users/evolution/) email client allows you to add [custom headers](https://help.gnome.org/users/evolution/stable/mail-composer-custom-header-lines.html.en).

The [Thunderbird](https://www.thunderbird.net/) email client allows you to add [custom headers](https://www.lifewire.com/arbitrary-custom-heading-email-thunderbird-1173089).

The [MailMate](https://freron.com/) email client allows you to [automate the workflow process](/docs/guide/mailmate-client).

### The mass mailing solutions

You can modify the mass mailing software, such as [Mailtrain](https://github.com/Mailtrain-org/mailtrain) to add the Core ID to the email headers. Or develop your own plugins for the mass mailing software.

### Plugins

There is one thread in discussion forum about the plugins for the Outlook. You can find it [here](https://www.add-in-express.com/forum/read.php?FID=5&TID=1480).

Thunderbird has a plugin called [Header Tools Lite](https://addons.thunderbird.net/en-US/thunderbird/addon/header-tools-lite/). It allows you to add custom headers to your emails. The programmatic way is explained in [Stackoverflow](https://stackoverflow.com/questions/162057/how-do-you-insert-email-headers-with-a-thunderbird-extension).
