# AutoMails by Gentlereminder.in

Welcome to AutoMails, an innovative tool designed by the team at Gentlereminder.in to streamline the process of sending dynamic emails directly from your Google Sheets data. This tool leverages Google Apps Script and HTML to offer a user-friendly interface for setting up and sending personalized emails for any need, be it newsletters, appointment reminders, or custom notifications.

## Features

- **Dynamic Email Content**: Customize emails based on spreadsheet data to add a personal touch to your messages.
- **HTML Content Support**: Craft visually appealing emails with HTML, including inline CSS for styling.
- **Document Link Integration**: Easily include content from Google Docs as part of your email body.
- **Legacy Support**: Plain text support ensures compatibility with all email clients.
- **Security**: Designed with security in mind to protect your data and privacy.

## Getting Started

### Prerequisites

- A Google account.
- Access to Google Sheets and Google Apps Script.
- Basic knowledge of HTML (for custom email bodies).

### Setup Guide

1. **Create a Google Sheet**: This sheet will host your email data (recipients, content, etc.).
2. **Open Script Editor**: From your Google Sheet, navigate to `Extensions > Apps Script` and create a new script.
3. **Copy the AutoMails Script**: Clone this repository and copy the AutoMails script into your script editor.
4. **Configure Your Email Template**: Customize the provided HTML template or create your own according to your needs.
5. **Set Document Properties**: Store your configuration (e.g., email column, sheet name) as script properties for easy reference.

## Usage

1. **Prepare Your Data**: Populate your Google Sheet with email addresses, subjects, and any other data you wish to include in your emails.
2. **Open the AutoMails Interface**: Run the `setupEditConfiguration` function from the Apps Script editor to launch the configuration dialog.
3. **Configure and Send**: Follow the on-screen instructions to configure your email settings and send your emails.

## Contributing

We welcome contributions and suggestions to improve AutoMails! Please feel free to fork the repository, make changes, and submit pull requests. If you encounter any issues or have suggestions for new features, please open an issue in this repository.

## Security

Your security is our top priority. AutoMails is designed to operate securely within the Google Cloud Platform, and we continually work to ensure the highest security standards. Remember to review and adhere to Google's best practices for securing Apps Script projects.

## Support

For help with AutoMails, refer to our detailed [Help Guide](https://gentlereminder.in) or open an issue in this repository. Our team is committed to providing support and ensuring you can make the most of AutoMails.

## License

AutoMails is provided  "as is" without any explicit license. all rights are reserved by the creator. Still feel free to use and modify the tool for personal or commercial purposes.
