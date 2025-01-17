# Backend Project

## Overview
This is a simple backend project with a well-structured folder hierarchy. It includes APIs for basic functionalities like a "Hello World" message, generating a JSON Web Token (JWT), and handling POST requests.

## Features
- **GET `/hello`**: Returns a "Hello World" message.
- **GET `/auth/token`**: Generates and returns a JWT token.
- **POST `/auth/body`**: Returns a response message "I am post body".

## Project Structure
backend-project/ ├── controllers/ │ └── authController.js ├── middleware/ │ └── authMiddleware.js ├── models/ │ └── userModel.js ├── routes/ │ └── authRoutes.js ├── .env ├── .gitignore ├── app.js ├── package.json └── README.md


## Prerequisites
- **Node.js** (v14 or later)
- **npm** (v6 or later)
