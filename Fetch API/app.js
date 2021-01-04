let response = fetch('http://localhost:3000/api');
console.log(response);

response.then(res => {
    console.log(res);
});

response.then(res => res.json()).then(data => console.log(data));