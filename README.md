# Furniture Store

## Description

This is a fake furniture store web application. The backend was made using java/springboot and the front end was made usnig react/material UI. Users can navigate to the website, view items, add items to thier cart, and finally checkout when they are ready. In addition, there is an admin view where administrative users can add, update, delete and view items. 

## Table of Contents
 - [Deployment](#deployment)
 - [User Stories](#user-stories)
 - [Tech Stack](#tech-stack)
 - [Installation](#installation)
 - [Website Screenshots](#website-screenshots)
 - [Acknowledgements](#acknowledgements)

## Deployment
  Note: This application is deployed in two parts. The back-end api was deployed using render and the front-end was deplyed using netlify. Users are expected to use the front-end website to interact with the application as intended.
  <br />
  #### Live Websites
  Front-End: [Furniture-Store front end website](https://grand-nougat-e75839.netlify.app)
  <br />
  Back-End: [Furniture-Store back end api]()

  #### Docker
  This applicaiton was also dockerized. In order to run the docker containers, follow the instructions in the [Installation](#installation) section, then run `docker-compose up` from the root project directory to build the images and run the containers.

## User Stories
#### As a non-admin user, I want to 
  1. View a list of products
  2. Filter products to narrow down results
  3. View one item to see more details
  4. Add items of interest to my cart
  5. Checkout
#### As an admin user, I want to
  1. Sign in to an auth proteted admin endpoint
  2. View all current products and see all properties associated with products
  3. Add new products
  4. Update products
  5. Delete products
     
## Tech Stack
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=materialui,docker,mongodb,java,js,react" />
  </a>
  
## Installation
  1. For the front end, a .env file will need to be created ( `/client/.env` ) with auth0 credentials
  2. For the backend, a .env file will need to be created (`/server/src/main/resources/.env`) with both auth0 and mongoDB credentials
  3. Navigate to the `/server` directory for the java code and run the springboot application.
  4. Open a new terminal and run the following commands to start up the front end

  ``` javascript
      // change directories
      cd client

      // install dependencies
      npm install

      // generate auth credentials based on the .env file
      npm run config

      // run the application
      npm start
  ```

## Website Screenshots
<img width="990" alt="Screenshot 2024-08-09 at 2 48 58 PM" src="https://github.com/user-attachments/assets/fb1dfbd1-8a16-4a4c-96c7-d1efca50c3d3">
<img width="987" alt="Screenshot 2024-08-09 at 2 53 38 PM" src="https://github.com/user-attachments/assets/b9d8224a-2282-4b77-b57a-efb2d61df257">
<img width="989" alt="Screenshot 2024-08-09 at 2 53 52 PM" src="https://github.com/user-attachments/assets/dd12a128-5bb8-4046-9e18-5846ce6055bd">
<img width="989" alt="Screenshot 2024-08-09 at 2 53 18 PM" src="https://github.com/user-attachments/assets/52060ed8-910a-431b-85ac-63d6117d2524">

## Acknowledgements
[Geeks for Geeks: Spring Boot – Map Entity to DTO using ModelMapper](https://www.geeksforgeeks.org/spring-boot-map-entity-to-dto-using-modelmapper/)
<br />
[LinkedIn: Project Structure Best Practices (Springboot)](https://www.linkedin.com/pulse/project-structure-best-practices-springboot-divyateja-yasoju-innyc)
<br/>
[GitHub: Kanban-Board](https://github.com/MultiverseLearningProducts/kanban-board)
<br/>
[FreeCodeCamp: How to test services, endpoints, and repositories in Spring Boot](https://www.freecodecamp.org/news/unit-testing-services-endpoints-and-repositories-in-spring-boot-4b7d9dc2b772/)
[Cloudinary](https://cloudinary.com/)


