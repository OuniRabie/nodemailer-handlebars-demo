# nodemailer-handlebars-demo
A Node.js project demonstrating how to send dynamic emails using Nodemailer and Handlebars templates. Includes examples for welcome and verification emails with reusable templates and inline CSS for email client compatibility
# Node.js Email Sender with Handlebars Templates

This project demonstrates how to send **dynamic emails** using **Node.js**, **Nodemailer**, and **Handlebars templates**. It includes three examples:
1. **Welcome Email**: A personalized welcome email for new users.
2. **Verification Email**: A verification email with a dynamic link.
3. **Newsletter Email**: A professional newsletter email with dynamic content.

The project uses **Google's Gmail SMTP server** to send emails and **Handlebars** for creating reusable and dynamic email templates.

## Features
- Send **welcome emails** with personalized content.
- Send **verification emails** with dynamic links.
- Send **newsletter emails** with dynamic titles and content.
- Use **Handlebars templates** for clean and reusable email designs.
- Inline CSS for email client compatibility.
- Easy to extend for additional email types (e.g., password resets, order confirmations).

## Prerequisites
Before running the project, ensure you have the following:
1. **Node.js** installed (v14 or higher).
2. A **Google account** with "Less secure app access" enabled or an **App Password**.
3. Basic knowledge of JavaScript and Node.js.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/OuniRabie/nodemailer-handlebars-demo.git
   cd nodemailer-handlebars-demo
2. Install dependencies:
   ```bash
   npm install
Configuration
Update Email Credentials:
Open app.js and replace the following placeholders with your Gmail credentials:
```bash
auth: {
    user: 'your-email@gmail.com', // Replace with your Gmail address
    pass: 'your-password',       // Replace with your Gmail password or App Password
},
```
Update Recipient Email:
In app.js, replace the recipient email address (adress-to-send@gmail.com) with the email address you want to send the emails to.
Check the recipient's inbox for the following emails:

  Welcome Email
  Verification Email
  Newsletter Email
  
## Project Structure
```bash
nodemailer-handlebars-demo/
│
├── templates/                  # Handlebars email templates
│   ├── emails/
│   │   ├── welcome.hbs         # Welcome email template
│   │   ├── verification.hbs    # Verification email template
│   │   ├── newsletter.hbs      # Newsletter email template
│   ├── layouts/
│   │   ├── main.hbs           # Main layout for emails
│   ├── partials/
│   │   ├── header.hbs         # Reusable header
│   │   ├── footer.hbs         # Reusable footer
│
├── app.js                     # Main application file
├── package.json               # Project dependencies
├── README.md                  # Project documentation
```
## Contributing

Feel free to contribute to this project by:

  Adding new email templates.
  Improving the code structure.
  Fixing bugs or adding new features.
  
## License
This project is licensed under the MIT License. See the LICENSE file for details.
