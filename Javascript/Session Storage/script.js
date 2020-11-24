document.querySelector('#buttonInsert').addEventListener('click', function(){
    let inputKey = document.querySelector('#inputKey').value.trim();
    let inputValue = document.querySelector('#inputValue').value;
    window.sessionStorage.setItem(inputKey, inputValue);
    console.log(inputKey, inputValue);
})

document.querySelector('#getDataFromStorage').addEventListener('click', function(){
    for(i = 0; i < window.sessionStorage.length; i++){
        let getKey = window.sessionStorage.key(i);
        let getValue = window.sessionStorage.getItem(getKey);
        let result = document.createElement('p')
        result.innerText = getValue;
        document.querySelector('.output').appendChild(result);
    }
})

// document.querySelector('#getDataByKey').addEventListener('click', function(){
//     let input = document.querySelector('#getValueFromStorage').value.trim();
//     for(i = 0; i < window.sessionStorage.length; i++){
//         let getKey = window.sessionStorage.key(i);
//         let getValue = window.sessionStorage.getItem(getKey);
//         if(input === getKey){
//             let result = document.createElement('p')
//             result.innerText = getValue;
//             document.querySelector('.output').appendChild(result);
//         }
//     }
// })

document.querySelector('#getDataByKey').addEventListener('click', function(){
    let input = document.querySelector('#getValueFromStorage').value.trim();
    let getValue = window.sessionStorage.getItem(input);
    let result = document.createElement('p')
    result.innerText = getValue;
    document.querySelector('.output').appendChild(result);
    document.querySelector('#getValueFromStorage').value = '';
})



