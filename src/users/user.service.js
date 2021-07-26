//credencias
const users = [{ id:1, username:'selia', password:'fullservice'}]



function authenticate({ username, password}) {
    const user = users.find(u => u.username === username && u.password === password)
    if(user) {
        const {password, ...userWithoutPassword} = user
        return userWithoutPassword
    }
}

module.exports  = {authenticate}