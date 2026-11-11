function getUsers(req,res){
    res.send('All user')
}
function createUser(req,res){
    res.send('user created')
}

export default {getUsers,createUser}