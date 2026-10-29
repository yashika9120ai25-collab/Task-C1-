# DEV@Deakin — P4 Login and Registration

## Project Overview

DEV@Deakin P4 is a React-based web application featuring user registration, login, and profile functionality. It uses Firebase Authentication to manage user accounts and Cloud Firestore to store user profile information.

## Technologies Used

- **React** — Building the user interface with reusable components.
- **Vite** — Development server and build tool.
- **Tailwind CSS** — Styling and responsive layouts.
- **Firebase Authentication** — User registration, login, and logout.
- **Cloud Firestore** — Storing user profile details.
- **React Router** — Navigation between pages.

## Features

- **User Registration:** Create an account using full name, email address, and password.
- **Form Validation:** Validate required fields, email format, password length, and password confirmation.
- **User Login:** Sign in using Firebase Authentication.
- **User Logout:** Securely sign out of the current session.
- **User Profile:** Display the signed-in user's name and email address.
- **Protected Profile Access:** Redirect unauthenticated users to the login page.
- **Responsive Navigation:** Desktop and mobile navigation with a conditional Profile link and Login/Logout options.
- **Content Sections:** Home, About, Work, Articles, Tutorials, Contact, and Gallery.
- **Search Functionality:** Find and navigate to supported content sections.

## Project Setup

### Prerequisites

- Node.js and npm installed.
- A Firebase project with Email/Password Authentication enabled.
- Cloud Firestore configured for user profile storage.

### Installation

1. Clone or download the project repository.
2. Open the project directory in the terminal.
3. Install the dependencies:

   ```bash
   npm install
   ```

### Firebase Configuration

Configure the required Firebase environment variables in a local `.env` file and ensure `src/firebase/config.js` uses them to initialize Firebase.

Do not commit the `.env` file or expose passwords, private credentials, or other secrets in the repository.

### Run the Application

Start the Vite development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal to access the application.

## Authentication and Data Storage

Firebase Authentication manages user accounts and sign-in sessions. After registration, the application saves the user's profile information in Cloud Firestore, associated with the authenticated user's UID.

The Profile page displays the user's name and email address. Users who are not signed in are redirected to the login page when they attempt to access the profile.

## Security Considerations

- Validate user input before submitting authentication requests.
- Use Firebase Authentication instead of storing passwords directly.
- Configure appropriate Cloud Firestore Security Rules to ensure users can access only the data they are authorized to access.
- Keep environment files and sensitive credentials out of version control.
- Use authentication checks for pages that require a signed-in user.

## Project Purpose

This project demonstrates the implementation of user authentication, form validation, profile management, client-side routing, and responsive UI design using React and Firebase.