# React Account Management Application

This is a simple account management application built with React (v16+) and React Router. The application allows users to create an account, log in, view and edit their account information. User data is stored in local storage.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Code Explanation](#code-explanation)
- [Screenshots](#screenshots)

## Features

**Register**: Users can create a new account.
**Login**: Registered users can log in with their email and password.
**Account Management**: Users can view and edit their account information.
**Logout**: After updating their account, users are redirected to the login page (simulating a logout).

## Technologies Used

**React**: A JavaScript library for building user interfaces.
**React Router v6**: For routing between pages.
**React Toastify**: For toast notifications.
**Bootstrap**: For basic styling and responsive design.
**Local Storage**: Used to mock a backend by storing user data in the browser's local storage.

## Setup and Installation
1.  **Clone the repository**
  
   git clone https://github.com/your-username/react-account-management.git
   cd react-account-management

2. **install dependencies**
   npm install

3. **Run the application**
   npm start

## Project structure
![image](https://github.com/user-attachments/assets/fd42e494-6de2-4072-8edd-e095f94c6402)

**components/**: Contains the main form components (Login, Register, Account).
**services/**: Contains authService.js, which handles authentication logic.
**styles/**: Contains FormStyles.css for styling forms.
**App.js**: Main application file where routes are set up.
**index.js**: Entry point of the application.

## Usage
1. **Registration**
   -Open the app, and you will be directed to the registration page by default.
  -Fill out the registration form with your email and password.
  -Submit the form to register your account.
  -Upon successful registration, you will be redirected to the account page.

2. **Login**
   -If you already have an account, click on the "Sign In" link at the bottom of the registration form.
   -Enter your email and password to log in.
   -Upon successful login, you will be redirected to your account page.

3. **Account management**
  -On the account page, you can view and edit your email and password.
  -Click "Update" to save changes.
  -After updating, you will be redirected to the login page (simulating a logout).

## Code Explanation
1. ## Components
   **Login.js**: Provides a form for users to log in with their email and password. On success, users are redirected to the account page.
  **Register.js**: Contains a registration form for new users to sign up. On success, users are redirected to the account page.
  **Account.js**: Allows users to view and edit their account information. After updating, users are redirected to the login page.
2. ## Service
  **authService.js**: Handles authentication functions, such as registration, login, updating user data, and logout. Data is stored in local storage to simulate a backend   

## Screeshots
**Login page**
![image](https://github.com/user-attachments/assets/907b4f19-a91c-454d-82f4-bf5e00f96e38)

**Register Page**
![image](https://github.com/user-attachments/assets/2c7a624c-6307-4c96-b913-d667badfcbd7)

**Account Page**
![image](https://github.com/user-attachments/assets/3a2b77ba-f39e-4db4-a124-edfca760ae2a)



