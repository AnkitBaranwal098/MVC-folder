module.exports.profile = (req,res)=>{
    return res.render('user_profile',{
        title: "User Profile Page"
    })
}