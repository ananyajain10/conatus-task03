const userModel = require('../../models/channel')



const signupUser = async(req, res) =>{

    const {email, userName} = req.body    //already saved whole data
    try{
        let checkUser = await userModel.findOne({"$or": [{email: email}, {userName: userName}]})
      //console.log("checkuser", !!checkUser); if null false else true

        if(!checkUser){
            // enter user if it does not exist
            let result = await userModel.create(req.body)
            res.send({
            data: result,
            message: "user created ",
            status: true
        })
        } else{
            res.status(403).json({status: false, error: "user already exist"})
        }
        

        
    } catch(error){
        res.status(403).json({status: false, error: error})
    }

    
}

const loginUser = async(req, res) =>{
    const {email, password} = req.body;
    try{
        const result = await userModel.findOne({email: email})
        if (!!result){
            res.send({
                data: result,
                status: true 
            })
        }else{
            res.status(403).json({status: false, error: "user not found"})
        }
       
    } catch(error){
        res.status(403).json({status: false, error:error})
    }

}

module.exports = {
    signupUser,
    loginUser
}