---
sidebar_position: 6
---

# MailMate Client

## Adding a CoreID Header

If you're looking to customize your emails sent from MailMate by adding a specific header, such as `CoreID`, this guide will walk you through the process. You can add a default value for this header, or leave it empty if you prefer.

### Steps to Add the CoreID Header

1. **Open Terminal**: First, you'll need to open your Terminal application. This is where you'll enter the command to add the header.

2. **Enter the Command**: Use the following command template to add the `CoreID` header to MailMate. Replace `<your_value>` with your desired default value or leave it blank for an empty value.

    ```bash
    defaults write com.freron.MailMate MmAdditionalComposerHeaders "( { headerName = 'X-CoreId'; defaultValue = '<your_value>'; type = 'plain'; } )"
    ```

    For example, if you want to set a default value, your command might look like this:

    ```bash
    defaults write com.freron.MailMate MmAdditionalComposerHeaders "( { headerName = 'X-CoreId'; defaultValue = 'cb00…'; type = 'plain'; } )"
    ```

    To set it with an empty value, just omit the value in the command:

    ```bash
    defaults write com.freron.MailMate MmAdditionalComposerHeaders "( { headerName = 'X-CoreId'; defaultValue = ''; type = 'plain'; } )"
    ```

3. **Restart MailMate**: After executing the command, restart MailMate for the changes to take effect.

### Additional Notes

- **Editing the CoreID**: The `CoreID` header can be manually edited for each email if you set a default value or left it empty.
- **Multiple Headers**: If you need to add multiple custom headers, you can modify the command to include additional header configurations.

By following these steps, you can effectively add a `CoreID` header to your emails in MailMate, enhancing your email customization capabilities.

## Setting CoreID as Full Name in IMAP Account Settings

In addition to adding a `CoreID` header, you can also set your `CoreID` as the Full Name in your IMAP account settings within MailMate. This can be particularly useful for identification purposes. Follow these steps to set it up:

### Steps to Set CoreID as Full Name

1. **Access IMAP Account Settings**:
   - Open MailMate.
   - Navigate to the top menu and select `File`.
   - Choose `Edit IMAP Account`.
   - Select the account you wish to modify from the list.

2. **Set Full Name to CoreID**:
   - In the account settings window, locate the field labeled `Full Name`.
   - Enter your `CoreID` as the value for this field. For instance, you can input something like `cb00…` or any other CoreID format you are using.

3. **Save the Changes**:
   - After entering your CoreID, ensure you save the changes.
   - Close the settings window and the changes should be applied to your selected IMAP account.

### Important Notes

- **Visibility**: The Full Name set here will be visible to recipients of your emails as part of your email identity.
- **Different Accounts**: If you have multiple accounts in MailMate, you can set a unique `CoreID` for each by repeating these steps for each account.
- **Consistency**: If you are using `CoreID` in other settings or headers, ensure consistency for easier management and identification.

By setting your `CoreID` as the Full Name in your IMAP account settings, you add another layer of customization to your MailMate configuration, enhancing your email personalization and identification.
