import React, { setState, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'


function Article() {
    const [isLoading, setLoading] = useState(true);
    const [recipe, setPost] = useState();

    let {id} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(json => {
                setPost(json);
                setLoading(false);
            })
    }, [])

    if (isLoading) {
        return (
            <span>Loading</span>
        )
    } else {
        return (
            <div>
        <div class="container">
            <div id="main-recipe-container" class="row">
                <div id="col-left" class="col-md-3">
                  <div id="white-background">
                    <div id="default-list" class="d-flex">
                      <p><i class="far fa-clock"></i> {recipe.time}</p>
                      <p><i class="fas fa-award"></i> Beginner</p>
                  </div>
                  <h3>Ingrediënten</h3>
                  <ul id="ingredients-list">
                      <li><i class="fas fa-check-circle"></i> Spaghetti</li>
                      <li><i class="fas fa-check-circle"></i> 2 tomaten</li>
                      <li><i class="fas fa-check-circle"></i> Ansjovis</li>
                      <li><i class="fas fa-check-circle"></i> Parmezaanse kaas</li>
                      <li><i class="fas fa-check-circle"></i> Sjalot</li>
                      <li><i class="fas fa-check-circle"></i> Knoflook</li>
                      <li><i class="fas fa-check-circle"></i> Steelkappertjes</li>
                      <li><i class="fas fa-check-circle"></i> Bladpeterselie</li>
                  </ul>
                  </div>
                </div>
                <div id="col-right" class="col-md-9">
                  <img src="./images/pasta.png" alt="" srcset=""></img>
                    <h2>pasta | italiaans | vegetarisch | vis</h2>
                    <h1>{recipe.name}</h1>
                    <h3>Instructies</h3>
                    <p><span>1</span>Pel de sjalotten, snij ze middendoor en snipper ze vervolgens in dunne halve ringen.</p>
                    <p><span>2</span>Verwijder het steeltje van de grote kappers en hak ze grof. Deze steelkappers geven de pasta een frisse toets.</p>
                    <p><span>3</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, cupiditate!</p>
                    <p><span>4</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eos tempora explicabo, ratione aut quasi consectetur?</p>
                    <p><span>5</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, cupiditate!</p>
                    <p><span>6</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eos tempora explicabo, ratione aut quasi consectetur?</p>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default Article