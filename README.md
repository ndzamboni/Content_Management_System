# Content Management System (CMS) Blog

## Description

This project is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts. The site is built from scratch and follows the Model-View-Controller (MVC) paradigm, using Handlebars.js as the templating language, Sequelize as the ORM, and express-session for authentication. The application is deployed on Render and connects to an external PostgreSQL database.

<!-- screenshot -->

![Screenshot](/demo/demo1.PNG)
![Screenshot](/demo/demo2.PNG)
![Screenshot](/demo/demo3.PNG)


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

- [CMS Blog-Nick Zamboni]([https://your-app-name.onrender.com](https://content-management-system-rigk.onrender.com)

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
```

## API Endpoints

### User Routes

- `POST /api/users/signup`: Sign up a new user.
- `POST /api/users/login`: Log in a user.
- `POST /api/users/logout`: Log out the current user.

### Post Routes

- `GET /api/posts`: Get all posts.
- `POST /api/posts`: Create a new post.
- `GET /api/posts/:id`: Get a single post by ID.
- `PUT /api/posts/:id`: Update a post by ID.
- `DELETE /api/posts/:id`: Delete a post by ID.

### Comment Routes

- `POST /api/comments`: Create a new comment.
- `GET /api/comments/:postId`: Get all comments for a specific post.

## Features

- **User Authentication**: Sign up, login, and logout functionalities with session management.
- **Create and Manage Posts**: Users can create new posts, edit, and delete their own posts.
- **Commenting System**: Users can comment on posts and view comments.
- **Responsive Design**: The application is styled with Bootstrap for responsiveness.
- **Dark Mode/Light Mode Toggle**: Users can switch between a Miami Vice themed light mode and a Cyberpunk themed dark mode.

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express.js](https://expressjs.com/) - Web framework for Node.js
- [Sequelize](https://sequelize.org/) - ORM for SQL databases
- [PostgreSQL](https://www.postgresql.org/) - Relational database management system
- [Handlebars.js](https://handlebarsjs.com/) - Templating engine
- [Bootstrap](https://getbootstrap.com/) - CSS framework for responsive design
- [Render](https://render.com/) - Cloud platform for deploying web services

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- [OpenAI](https://openai.com/) for the assistance in writing this README.
- [Render](https://render.com/) for hosting services.
- [Bootstrap](https://getbootstrap.com/) for the responsive design framework.
- [Sequelize](https://sequelize.org/) for the ORM tool.
- [Handlebars.js](https://handlebarsjs.com/) for the templating engine.
