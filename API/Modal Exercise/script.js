const apiUrl = 'http://localhost:3000/posts';

async function getPosts(){
    let response = await fetch(apiUrl); //get data from server
    let data = await response.json(); //translate data to json
    makeModals(data);
}

function makeModals(data){
    let index = 0;
    data.forEach(element => {
        let modal = document.querySelector('#modalTemplate').content.cloneNode(true);
        modal.querySelector('.modal-title').textContent = element.title;
        modal.querySelector('.btn-warning').textContent = element.title;
        modal.querySelector('.modal-body').textContent = element.body;
        modal.querySelector('#exampleModal').setAttribute("id", 'modal' + index);
        modal.querySelector('.btn-warning').addEventListener('click', function(event){
            event.preventDefault();
            let myModal = new bootstrap.Modal(event.target.nextSibling, {
                keyboard: false
              })
              myModal.show()
        })
        document.querySelector('.container').appendChild(modal);
        index++;
    });
}

getPosts();