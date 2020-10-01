# burger-app

![Badge](https://img.shields.io/github/license/Asostoa/burger-app)
![BadgeGithub](https://img.shields.io/github/followers/asostoa?style=social)
![BadgeSize](https://img.shields.io/github/repo-size/Asostoa/burger-app)
![BadgeSize](https://img.shields.io/github/v/release/Asostoa/burger-app)



## Description

Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

![image (14)](https://user-images.githubusercontent.com/65316520/94834407-56464180-03de-11eb-8802-a12535f6779e.png)

## Table of contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#License)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub)

  ## Installation
- Clone the repository to your local development environment.
```git clone https://github.com/Asostoa/burger-app```
 Run npm install to install all dependencies. To use the application locally, run node server.js in your CLI.

-Also this Application has been debloyed on HEROKU
- [Heroku](https://whispering-taiga-34406.herokuapp.com)

  ## Usage

- This application uses MySQL workbench , and JawsDB as the database to store the information about Burgers.
- This is a node application that uses inquirer to retrieve information from the user. Using the information that is retrieve to run a different set of query's to the database depending on the action that the user wishes to make.
- To end the applicatin select the option of "Exit" this will kill your server and exit the application;


 ## Directory 
 ```
Config/        //Contains Conection.js and orm.js.
Conntrollers/  // Im here we create the routes.
Db/            //Here I keep the schemas.sql & seeds.sql file's.
Models/        //Contains Burgers Models
Public/Assets/ //Contains css files, front-end js and Logo and images.
Views/         //Contains Handlebars files for Index, and Burger model. 
server.js/      //This is the entry point for the application

 ```
  ## Constributors

 Alexander de Sostoa

  ## Test

![XlUp99rHdA (1)](https://user-images.githubusercontent.com/65316520/94834457-678f4e00-03de-11eb-8fda-05d815d98879.gif)

## Repository
- [Project Repo](https://github.com/Asostoa/burger-app)
## GitHub 
- [GitHub Profile](https://github.com/Asostoa)

<!-- https://whispering-taiga-34406.herokuapp.com/  -->
