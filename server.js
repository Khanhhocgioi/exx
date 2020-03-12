var express=require('express');
var app=express();

app.set('view engine','jade');
var port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
    res.render('view');
})

var server=app.listen(port,function() {});
