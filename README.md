# Zekademy
Assignment


Project Description

This project is a part of assignment given by Zekaademy.

In this project I tried to build a backend part of a web application that will be able to:-
1. Provide the basic user authorization and authentication operation like signup and sign in using the JWT token authorization with the conformation mail functionality to the newly registered user.
2. Give the functionality of uploading an image and later to fetch it from the database.

To implement this project by one own you can do the following steps:-
1. Create a node app by npm init command and install the following packages
    "@aws-sdk/client-s3": "^3.216.0",
    "@aws-sdk/s3-request-presigner": "^3.216.0",
    "bcrypt": "^5.1.0",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "crypto": "^1.0.1",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.7.3",
    "multer": "^1.4.5-lts.1",
    "nodemailer": "^6.8.0",
    "nodemon": "^2.0.20",
    "validator": "^13.7.0"
 2. Now establish the following folder structure 
 
 <img width="149" alt="image" src="https://user-images.githubusercontent.com/89704806/204088545-f3526824-866a-4bc3-aa20-4fd99bd8fecf.png">

 
<img width="141" alt="image" src="https://user-images.githubusercontent.com/89704806/204088476-1a7d958b-6ae8-476b-86b2-0edf6ade9378.png">

3. Now to first start with the index.js here we will direct the all control from app.js to the user and image routes. So just setup the server here and 
