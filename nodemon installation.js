
https://drive.google.com/drive/folders/1JkO8gw7GwlAT25tDdqVbwVWv--8PLZ2j?usp=share_link

(video to 2 t0 6 if not understand this step down mentioned)

intallation package nodeman for development and production





1)Make a package.json file



PS C:\Users\Dell\backend devlopement> npm init

ask couple of question (click on enter )if u get author :kiran

again enter,enter

package json.file will be create at left

if u open  package json.file

{

  "name": "backend-devlopement",

  "version": "1.0.0",

  "description": "complete node.js guide",

  "main": "Writingandreadingfrom a file.js",

  "scripts": {

    "test": "echo \"Error: no test specified\" && exit 1",

    "start": "node server.js"

    

  },

  "author": "kiran",

  "license": "ISC"

}



look like this

here app,js  assignged to start



2)PS C:\Users\Dell\backend devlopement> npm  start

or

PS C:\Users\Dell\backend devlopement> npm run start



3)Install the nodemon package. What problem does nodemon solve?

sol:make development easy



4)When would you use --save-dev and --save?

sol: use first one

PS C:\Users\Dell\backend devlopement> npm install nodemon --save-dev  (this production and development)


or
[PS C:\Users\Dell\backend devlopement> npm install nodemon --save    (this for production)
or

PS C:\Users\Dell\backend devlopement> npm install nodemon -g     ( this for gobally)  ]



after using any one 

package-lock-json files appered on left and another one (node-modules)

and again type down mentioned

PS C:\Users\Dell\backend devlopement> npm install (this u can type   if missed or deleted (node-modules) )
again it will downloaded






some package is addded t0 package.json ie last 2 line ie(   "devDependencies":{
      
    "nodemon": "^2.0.22")

----------------------------------------------------------------------------------


    {
        "name": "backend-devlopement",
        "version": "1.0.0",
        "description": "complete node.js guide",
        "main": "Writingandreadingfrom a file.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "start": "nodemon server.js"
          
        },
        "author": "kiran",
        "license": "ISC",

        "devDependencies":{
      
          "nodemon": "^2.0.22"
      }
      }
      


      again Now
      
      PS C:\Users\Dell\backend devlopement> npm start
      //