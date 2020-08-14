const express= require("express");
const app= express();
const path= require('path');


//SETTINGS
app.set('port' , 4000);
app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , 'ejs');
app.engine('html' , require('ejs').renderFile);

//MIDDLEWARE

//ROUTES
app.use(require('./routs/index'));

//STATIC FILES
app.use(express.static(path.join(__dirname , 'public')));

//Liseninig the server
app.listen(app.get('port') , () => {
    console.log("Server on port" , app.get('port'));
});


