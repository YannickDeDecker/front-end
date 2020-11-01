function getUser(username, password){
    let userBoolean = (username === 'admin') ? true:false;
    let passBoolean = (password === '123456') ? true:false;
    console.log(userBoolean);
    console.log(passBoolean);
    
    let user = {
        isUserAdmin:userBoolean, 
        isPasswordValid:passBoolean
    }

    return user;
}

let result = getUser('admin', '354532');

if(result.isUserAdmin === false || result.isPasswordValid === false){
    console.log('Username or password incorrent')
} else{
    console.log('Welcome Admin! Username and password are correct.')
}

console.log(result);