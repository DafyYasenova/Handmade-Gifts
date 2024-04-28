# Handmade-Gifts - Angular project 
# Overview:
Handmade Gifts is a web application built with Angular that aims to provide a platform for sharing handmade products. The app has been developed with handheld brands in mind who want their products to reach a larger number of people.

On Handmade Gifts, users can create an account and upload their handmade products such as ornaments, souvenirs, accessories and other unique items. Each user has the ability to add a description of their products, photos and prices to present them to potential customers.

Additionally, Handmade Gifts provides a convenient search engine that allows users to discover handmade products created by other users.

# Demo - 
## demo:
https://handmade-gifts-a8b18.firebaseapp.com
## video:
https://www.youtube.com/watch?v=WR5QrE5p-JI


# Installation and Getting Started
To set up the project:

Navigate to the project folder.

##  Client side:

Navigate to client folder: cd client

Run app: ng serve


##  Server side: 
Use practice server SoftUni, having initialized ready posts.

There are registered users with email and password:

peter@abv.bg : 123456

george@abv.bg : 123456

Open new terminal

Navigate to server: cd server

Install all dependencies using: npm install

Start server: node server.js

Run the project and enjoy!

# Features:
##  Authentication:
Done by registering and logging in to the system

##  Home page:
Visible to everyone logged into the app.

##  About page:
Shows some background and information about the products. The page is visible to everyone logged into the app. Here are our partiers, and each is a link to the corresponding partier.

##  Gallery:
Published posts are visible to everyone, but only logged in users can access detailed information about each post. Non-logged in users can view the products in the gallery, but cannot access the detail page.

##  Details:
This page contains information such as product name, brand, category, status, price, additional information, production time, photo of the relevant product.
Here are the edit and delete functionalities if the respective product was created by the logged in user. There is also a like button for users who do not own the connected product.
There is a return to gallery button on each detail page.

###  Edit page:
Every logged in user can edit their posts.
###  Delete:
 Every logged in user can delete their posts.
###  Create page:
 Visible only for logged in users.
 
### Like/unlike:
Any registered and logged in user can like a post of which he is not the owner. When the Like button is clicked, it shows that the product has been liked. If you decide, you can unlike it, and the button returns to its original state. The like is saved on the server, which means that when the same product is re-entered by the corresponding user, the like will be reflected.

## Search page:
Accessible page only for logged in user. In it you can search for a specific product by name.

## Profile page:
Every registered and logged in user has access to his profile page, which contains information about the user himself, as well as all the posts created by him.

##  Technologies:
Angular v16

HTML5

CSS3

TypeScrypt


# License
This project is licensed under the MIT License.