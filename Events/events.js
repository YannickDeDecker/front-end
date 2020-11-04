// EVENTS

function whenPageLoadEvent(){
    alert('test');
}

function clickHandler(){
    console.log('on click event');
}

function whenMouseOverFunction(){
    console.log('Event type is whenMouseOverFunctio')
}

function whenMouseOutFunction(){
    console.log('Event type is whenMouseOutFunctio')
}


mouseUpHandler
mouseDownHandler
oncopy
ondblclick
onkeydown


// selector

let google = document.getElementById('Google');
google.addEventListener('click', clickHandler);