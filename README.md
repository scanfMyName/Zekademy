# Zekademy Assignment


## Project Description

This project is a part of assignment given by Zekademy.

In this project I tried to build a backend part of a web application that will be able to:-
1. Provide the basic user authorization and authentication operation like signup and sign in using the JWT token authorization with the conformation mail functionality to the newly registered user.
2. Give the functionality of uploading an image and later to fetch it from the database.

I used json-web-token library to implement the jwt token functionality, the nodemailer library to implement the feature of mailing new users and bcrypt library to implement the password hashing feature. 

I have used here MongoDB database to store user's details and AWS S3 bucket to store the images in the binary form. And perform the basic operation on them.

I used here the node js library with express framework to implement the server functionality because I find it easy to use and scalable in future. Also it lead to a pathway to use a lot of other libraries which are quite compatible with it. 

Here the challenges I faced:-
1. Nodemailer is quite uncomfortable with using common email services such as gmail and other services. 
2. The free AWS account creation needs your credit details which is not easily possible for everyone to use.

The project folder's structure is like this:-

<img width="120" alt="image" src="https://user-images.githubusercontent.com/89704806/204096833-de854178-5c89-44d0-aaee-b2673f483831.png">


## How to install and make it workable?

Clone this repository and install the postman(if you haven't). 
To install all the dependencies for the server to run, write :-

```bash
  npm i
```
in your terminal.

- Do the necessory changes like providing the s3 bucket region, key and secret key and also the mongodb database's connect link in the process.env  file for saving the image in s3 bucket and storing user's details. 
- Do the some changes in the nodemailer option and in the createTransport funntion to make it workable for the email you provided to send confirmation emails to the new users.

The process is over now start sending requests using the postman.

## To make it workable for a frontend app
In addition to the above you need to call the following api's in the frontend.
1. /api/register : 
Here you need to send the user's information in json data format in body of the request.
This api will send you the token created by the jwt library and a message of success after complete validation else the corresponding error in json format.

2. /api/login : Here you need to send the user's information in json data format in body of the request.
This will also provide the same as above.

3. /api/image/upload : Here you need to send the image as a form element in the body of the request.
This api will return you the corresponding id by which the provided image will be accessible in the future.

4. /api/image/fetch : here you need to provide the query params for the image id(corresponding to what you saved in the s3 bucket) that you want to fetch.
This api will return you the image link from where you can access the needed image as provided in the request if any such image exist in the s3 bucket.


## Tech Stack


**Server:** Node, Express, MongoDB, AWS
