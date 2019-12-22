# Github repository API

#### _For more infos on the documentation website_

https://documenter.getpostman.com/view/7216674/SWLYAqRC?version=latest

#### _Link to the deployed Heroku Website_

https://api-github-repos.herokuapp.com/

# Introduction

This is a RESTful Api that provide a CRUD access to a Github Repos database.

# Overview

## There are 5 calls available:

### GET:

- GET all the repositories in the database
- GET one specific Repository in the database with params query id

### POST:

- create a new repository

### PUT:

- update a existing repository

### DELETE:

- delete a existing repository

# Error Codes

- **500** -> the body doesn't contain the expected fields
- **404** -> if the params requested doen't exist

Thanks
