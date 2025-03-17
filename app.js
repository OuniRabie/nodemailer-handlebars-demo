const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const port = 3000;

// Serve static files (CSS)
app.use(express.static(path.join(__dirname, "public")));

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "you-password",
  },
});

// Dynamically import nodemailer-express-handlebars
const configureHandlebars = async () => {
  const { default: exphbs } = await import("nodemailer-express-handlebars");

  transporter.use(
    "compile",
    exphbs({
      viewEngine: {
        extname: ".hbs",
        layoutsDir: path.join(__dirname, "templates", "layouts"),
        partialsDir: path.join(__dirname, "templates", "partials"),
        defaultLayout: "main",
      },
      viewPath: path.join(__dirname, "templates", "emails"),
      extName: ".hbs",
    })
  );
};

// Send Welcome Email
const sendWelcomeEmail = (email, name) => {
  const mailOptions = {
    from: "your-email@gmail.com",
    to: email,
    subject: "Welcome to Our Platform",
    template: "welcome",
    context: {
      title: "Welcome Email",
      name: name,
      companyName: "My Awesome Company",
      getStartedLink: "https://example.com/get-started",
      socialMedia: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
      },
      unsubscribeLink: "https://example.com/unsubscribe",
    },
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Welcome email sent:", info.response);
    }
  });
};

// Send Verification Email
const sendVerificationEmail = (email, verificationLink) => {
  const mailOptions = {
    from: "your-email@gmail.com",
    to: email,
    subject: "Verify Your Email",
    template: "verification",
    context: {
      title: "Verification Email",
      companyName: "My Awesome Company",
      verificationLink: verificationLink,
      socialMedia: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
      },
      unsubscribeLink: "https://example.com/unsubscribe",
    },
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Verification email sent:", info.response);
    }
  });
};

// Send Newsletter Email
const sendNewsletterEmail = (
  email,
  newsletterTitle,
  newsletterContent,
  readMoreLink
) => {
  const mailOptions = {
    from: "your-email@gmail.com",
    to: email,
    subject: newsletterTitle,
    template: "newsletter",
    context: {
      title: newsletterTitle,
      newsletterTitle: newsletterTitle,
      newsletterContent: newsletterContent,
      readMoreLink: readMoreLink,
      companyName: "My Awesome Company",
      socialMedia: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
      },
      unsubscribeLink: "https://example.com/unsubscribe",
    },
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Newsletter email sent:", info.response);
    }
  });
};

// Configure Handlebars and send emails
configureHandlebars().then(() => {
  // Test sending multiple emails
  sendWelcomeEmail("example@gmail.com", "Ouni Rabie");
  sendVerificationEmail("example@gmail.com", "https://example.com/verify");
  sendNewsletterEmail(
    "example@gmail.com",
    "Monthly Newsletter",
    "Check out the latest updates and features from My Awesome Company!",
    "https://example.com/newsletter"
  );
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
