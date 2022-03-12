# E-commerce-Store

## Screenshots
![ecommBackEnd](https://user-images.githubusercontent.com/90432404/157997450-777aefa9-71ad-4a6f-affd-fbee0135afe4.gif)

## Table of Contents
 [Description](#Description)
 <br>
 [Screenshots](#Screenshots)
 <br>
 [License](#license)
 <br>
 [Walkthrough Video](#Walkthrough%20Video)
 <br>
 [Live Deployment](#Deployment)
 <br>
 [Questions](#questions)
 
 
 
 ## Description
 + E-commerce backend RESTful API
 + Established API routing for products, categories and tags
 + Utilizes Object Relationional Mapping to connect with database
 + Utilizes Asychronous function calls for Category and Product Data
 + Application allows user to
   + Create New
     + Categories
     + Tags
     + Products
   + Read based on id or read all
     + Categories
     + Tags
     + Products
   + Update based on id
     + Categories
     + Tags
     + Products
   + Delete based on id
     + Departments
     + Roles
     + Employees
 
 ## Walkthrough Video


https://user-images.githubusercontent.com/90432404/157998209-28e5ae28-1950-4bf6-9679-70c057e927c9.mp4



## License 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Deployment
- Clone repository onto local device
- Rename .env.EXAMPLE to just .env
- navigate to the cloned directory in terminal
- run npm init -y && npm install in terminal
- run "mysql -u root -p", then enter password to acces mysql shell
- run "SOURCE .db/schema.sql"
- Seed the database by running "npm run seed" in terminal
- Start server using "npm start" or "node server.js"
- Use Insomnia or Postman to test end points
  + http://localhost:3001/categories/
    + Get
    + Post
  + http://localhost:3001/categories/:id
    + Get
    + Put
    + Delete
  + http://localhost:3001/products/
    + Get
    + Post
  + http://localhost:3001/products/:id
    + Get
    + Put
    + Delete
  + http://localhost:3001/tags/
    + Get
    + Post
  + http://localhost:3001/tags/:id
    + Get
    + Put
    + Delete
## Questions

Questions will happily be answered by:
<br>
Kamyar Mivehchi
<br>
[kammivehchi@gmail.com](mailto:kammivehchi@gmail.com)
<br>
[Github](https://github.com/Kam-Mivehchi)
