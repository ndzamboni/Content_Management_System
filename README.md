# Content Management System (CMS) Blog

## Description

This project is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts. The site is built from scratch and follows the Model-View-Controller (MVC) paradigm, using Handlebars.js as the templating language, Sequelize as the ORM, and express-session for authentication. The application is deployed on Render and connects to an external PostgreSQL database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- PostgreSQL

### Setup

1. Clone the repository:

    ```sh
    git clone https://github.com/ndzamboni/Content_Management_System.git
    cd Content_Management_System
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory with the following content, replacing with your actual database credentials and secret key:

    ```env
    DB_NAME=your_database_name
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    DB_HOST=your_database_host
    DB_PORT=5432
    SECRET=your_secret_key
    ```

4. Set up your database:

    If you are running the app locally, you can create the database and tables using Sequelize:

    ```sh
    node server.js
    ```

    If you are deploying on Render and using an external PostgreSQL server, ensure your PostgreSQL server is set up with the necessary schema. You can use the provided `schema.sql` file to set up the database schema.

## Usage

1. Start the application:

    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3001` to view the application.

### Deployed Application

The application is also deployed on Render. Visit the following URL to access the deployed version:

- [Deployed Application URL](https://your-app-name.onrender.com)

## Features

- **User Authentication**: Users can sign up, log in, and log out.
- **Blog Posts**: Users can create, edit, and delete their blog posts.
- **Comments**: Users can comment on blog posts.
- **Responsive Design**: The application is responsive and works on various devices.
- **Light/Dark Mode**: Users can toggle between light and dark mode.

## File Structure

```plaintext
Content_Management_System/
├── config/
│   └── connection.js
├── controllers/
│   ├── api/
│   │   ├── index.js
│   │   ├── postRoutes.js
│   │   ├── userRoutes.js
│   │   └── commentRoutes.js
│   ├── homeRoutes.js
│   └── dashboardRoutes.js
├── models/
│   ├── index.js
│   ├── User.js
│   ├── Post.js
│   └── Comment.js
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
├── seeds/
│   └── seed.js
├── utils/
│   ├── auth.js
│   └── helpers.js
├── views/
│   ├── layouts/
│   │   └── main.handlebars
│   ├── partials/
│   │   ├── header.handlebars
│   │   └── footer.handlebars
│   ├── home.handlebars
│   ├── login.handlebars
│   ├── signup.handlebars
│   ├── dashboard.handlebars
│   └── post.handlebars
├── .env
├── .gitignore
├── package.json
├── schema.sql
└── server.js

