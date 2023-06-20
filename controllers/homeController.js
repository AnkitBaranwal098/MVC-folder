module.exports.home = (req,res)=>{

    //Getting the cookie from the browser
    console.log(req.cookies)
    //Altering the cookie value from server
    res.cookie('user_id',21)
    return res.render('home',{
        title: "Home Page"
    })
}