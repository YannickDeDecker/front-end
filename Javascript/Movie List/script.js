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