# Blogs API

## Context
This project consists of an API and database application for managing and producing content for a blog. The application utilizes Node.Js and the Sequelize package to organize CRUD (Create, Read, Update, and Delete) operations for the blog data.

The principles of REST (Representational State Transfer) are applied to the API, which allows for communication between the client application and the server to be uniform, scalable, and easy to understand.

User authentication is performed through the use of JWT (JSON Web Token), which is a secure and efficient method for authenticating users. This means that only authenticated users will have access to the content editing and deletion functionalities.

The main goal of this project is to provide a complete and efficient platform for content production and management for a blog. With the organized API and database, it is possible to create, edit, and delete content in a simple and fast way, while the REST principles and user authentication ensure data security and integrity.
<br><br>

## Tools
<div style="display: inline_block">
  <img align="center" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg">
  <img align="center" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg">
  <img align="center" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg">
  <img align="center" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg">
  <img align="center" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-plain.svg">
 </div>
<br>

## Starting The Project
1. Clone the repository:
  * ```git clone git@github.com:pedrobianchi90/blogs-api.git```
2. Navigate to the cloned repository folder:
  * ```cd blogs-api```
3. Install the dependencies:
  * ```npm install```
4. Docker:
  * To start the docker-compose, you must use the command `docker-compose up -d` inside the project's root folder.
  <br>
  
## To Do List:
* Endpoint POST `/post`
* Endpoint GET `post/:id`
* Endpoint PUT `/post/:id`
* Endpoint DELETE `post/:id`
