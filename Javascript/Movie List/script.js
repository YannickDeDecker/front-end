//ENTER A NEW LIST ITEM TO THE PAGE AND LOCAL STORAGE

let movieName = $('#title');
let director = $('#director');
let coverLink = $('#url');
let movieArray = JSON.parse(window.localStorage.getItem('MovieList') || '[]');

class Movie {
    constructor(name,director,cover){
        this.name = name;
        this.director = director;
        this.cover = cover;
    }
    appendMovie(){
        let template = document.querySelector('#filmTemplate').content.cloneNode(true);
        template.querySelector('.movie_title').textContent = this.name;
        template.querySelector('.movie_director').textContent = this.director;
        template.querySelector('img').setAttribute('src', this.cover);
        document.querySelector('#films').appendChild(template);
    };
}

function newMovie(event){
    event.preventDefault();
    let movie = new Movie(movieName.val(), director.val(), coverLink.val())
    movieArray.push(movie);
    window.localStorage.setItem('MovieList', JSON.stringify(movieArray));
    movieName.val('');
    director.val('');
    coverLink.val('');
    movie.appendMovie();
}

$('#add-movie').click(newMovie);

//REMOVE INDIVIDIUAL ELEMENTS



$('#delete-film').click(removeItem);

//REMOVE ALL ELEMENTS

function removeAllItems(event){
    event.preventDefault();
    movieArray = [];
    window.localStorage.removeItem('MovieList');
    const myNode = document.getElementById("films");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
}

$('#clear-films').click(removeAllItems);
