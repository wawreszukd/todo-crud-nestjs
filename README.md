# Basic CRUD API with nest.js <img style="height:32px;" src="https://www.svgrepo.com/show/306460/nestjs.svg">
It's serve as a basic CRUD API with nest.js. It's a simple project to understand the basic concepts of nest.js.
## Endpoints:
### CREATE NEW USER
```
POST http://localhost:3000
Content-Type: application/json

{
"title": "test",
"description": "test"
}
```
### GET ALL USERS
```
GET http://localhost:3000
```
### GET USER BY ID
```
GET http://localhost:3000/1
```
### DELETE USER BY ID
```
DELETE http://localhost:3000/1
```
### UPDATE USER BY ID
```
PUT http://localhost:3000/3
Content-Type: application/json

{
"title": "test2",
"description": "test2"
}
```