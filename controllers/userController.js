const User = require('../models/user')

module.exports.users = (req,res)=>{
    return res.end(`<h1>User Page is Up and Running.</h1>`)
}

module.exports.signIn = (req,res)=>{
    return res.render('sign-in',{
        title: "SignIn Page"
    })
}

module.exports.signUp = (req,res)=>{
    return res.render('sign-up',{
        title: "SignUp Page"
    })
}

//Create a User

module.exports.createUser = async(req,res)=>{
    
    //Check if Password is mismatch with confirm Password
    if(req.body.password!=req.body.cpassword)
    {
        console.log("Password Mismatch Found.")
        return res.redirect('/')
    }

    //Check if email exists
    const existUser = await User.findOne({email: req.body.email})

    if(existUser){
       console.log("User exist.")
       return res.redirect("/"); 
    }
    else{
       const newUser =  await User.create(req.body);
       console.log(newUser)
       return res.redirect('/users/sign-in')
    }
}

//Create a User Session

module.exports.createSession = (req,res)=>{
    //ToDo
}