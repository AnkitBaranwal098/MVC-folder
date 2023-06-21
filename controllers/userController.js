const User = require('../models/user')

module.exports.users = (req,res)=>{
    return res.end(`<h1>User Page is Up and Running.</h1>`)
}

module.exports.profile = async(req,res)=>{
    
    console.log("Inside User profile")
    console.log(req.cookies.user_id)

    const existUser = await User.findById(req.cookies.user_id)

    if(existUser){
        console.log(existUser)
        return res.render("user_profile",{
            title: `${existUser.name} Profile Page`,
            name: existUser.name,
            email: existUser.email
        })
    }
    else{
        console.log("User is not signed in ...Redirecting to the sign in page.")
        res.redirect("/users/sign-in")
    }

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

module.exports.createSession = async(req,res)=>{
    
    console.log("Inside create Session")
    // Find the User
        const existingUser = await User.findOne({email: req.body.email})
        console.log(existingUser)
    // Handle User not Found
        if(!existingUser){
            console.log("User not found");
            return res.redirect("/users/sign-up")
        }

    // Handle User found & password which don't match
        if(existingUser.password != req.body.password){
            console.log("Password Typed is incorrect.");
            return res.redirect("/users/sign-in")
        }
        //4. Handle User Found & session creation
        else{
            console.log("User signed in")
            res.cookie('user_id',existingUser.id)
            return res.redirect("/users/profile");
        }
        

    //5.
}