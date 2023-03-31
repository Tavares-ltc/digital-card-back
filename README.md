# digital-card-app
Gone are the days of carrying around stacks of paper cards or relying on outdated designs. With Digital Business Card, you can easily create and share your digital cards with just a few taps on your phone or tablet.

- Poduction deploy avaliable on AWS: http://100.26.109.233/api

## Technologies
The following tools and frameworks were used in the construction of this application: <br>
  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
  ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
  ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
  ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
  ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
  ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)


## How to run

* You can start both projects with docker-compose, check the monorepo here: https://github.com/Tavares-ltc/digital-card-app
<br>

1. Clone this repository

```
git clone https://github.com/Tavares-ltc/digital-card-back.git
```

2. Create .env like the .env.example file

 - I chose to make a database using Altas. I recommend you do the same and get you connection string there.
 - Atlas: https://www.mongodb.com/atlas/database
    
3. To start the project you will have two options:
  * With Docker:  <br>  
  1.``docker build -t card-back:latest .``   <br>  
  2.``docker run -p 3000:3000 card-back:latest``   <br>
    <br>    
  * Withou Docker:  <br>  
  1.``npm run build``   <br>  
  2.``npm run start``   <br> 
    <br>  

5. Thats it, use http://localhost:4000 to make HTTP requests
* If you wants do start the front-end, look here: https://github.com/Tavares-ltc/digital-card-front

## HTTP Requests

### POST /card

* Required body data:
```json
{
"name": "name of person or company",
"email": "email of person or company",
"hystory": "description or history of services provided",
{
```
* Optional body data: <br>
```json
{
  "customURL": "customize your access link, but it needs to be unique and there can be no special characters or whitespace",
  "tel": "contact phone",
  "github": "github link",
  "linkedin": "linkedin link",
  "picture": "image or logo link"
{
```

<br>
- Returns status 201 and created data in addition to created_at with creation date and database id

### GET /card:customURL

- Returns status 200 and: <br>

```json
{
  "id": "",
  "name": "",
  "history": "",
  "customURL": "",
  "picture": "",
  "linkedin": "",
  "github": "",
  "email": "",
  "tel": "",
  "created_at": "",
}
```
