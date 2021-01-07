const apiUrl= "http://localhost:3000/users";

fetch(apiUrl)
.then(response => response.json())
.then(data => data.filter(function(user){
    return user.address.city === 'McKenziehaven'
}))
.then(data => console.log(data))


