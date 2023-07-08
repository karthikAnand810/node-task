README file for a Node.js project:

# Simple Node App

Short description of your Node.js project.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)

## Installation

1. Clone the repository: `https://github.com/karthikAnand810/node-task.git`
2. Navigate to the project directory: `cd node-task`
3. Install the dependencies: `npm install`

## Usage

1. Run the application: `npm start`
2. Access the application in your browser at `http://localhost:5000`

## API Reference

1. Users
   1.1 Create User -> POST http://localhost:5000/api/users/create
   1.2 Get All Users -> GET http://localhost:5000/api/users
   1.3 Get a user by ID -> GET http://localhost:5000/api/users/(id)
   1.4 Update a user by ID -> PUT http://localhost:5000/api/users/update/(id)
   1.5 Delete a user by ID -> DELETE http://localhost:5000/api/users/delete/(id)
2. UserAccounts
   1.1 Create a new account -> POST http://localhost:5000/api/accounts/create
   1.2 Get all accounts -> GET http://localhost:5000/api/accounts
   1.3 Get an account by ID -> GET http://localhost:5000/api/accounts/(id)
   1.4 Update an account by ID -> PUT http://localhost:5000/api/accounts/update/(id)
   1.5 Delete an account by ID -> DELETE http://localhost:5000/api/accounts/delete/(id)
3. Policies
   1.1 Create a new policy -> POST http://localhost:5000/api/policies/create
   1.2 Get all policies -> GET http://localhost:5000/api/policies
   1.3 Get a policy by ID -> GET http://localhost:5000/api/policies/(id)
   1.4 Update a policy by ID -> PUT http://localhost:5000/api/policies/update/(id)
   1.5 Delete a policy by ID -> DELETE http://localhost:5000/api/policies/delete/(id)
   1.6 Upload a policy file in xlsv or csv -> POST http://localhost:5000/api/policies/upload
