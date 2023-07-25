const express= require("express")
const bodyparser=require("body-parser");
const {check,validationResult}=require("express-validator");
const app= express();
const port=4000;
app.set("view engine",'ejs')

const url=bodyparser.urlencoded({extended:false})
app.get('/',(req,res)=>{
res.render("index");

})
app.get('/reg',url,(req,res)=>{
    res.render("reg");
    
    })
    app.post('/reg',url,[check('name','this name must be uniqe')
.exists().isLength({min:3})


],(req,res)=>{
      const err=validationResult(req)
      if(!err.isEmpty()){
        //return res.status(422).jsonp(err.array())
        const alert=err.array()
        res.render("reg",)
      }
        
        })
app.listen(port,()=>{
console.log("done");
});
