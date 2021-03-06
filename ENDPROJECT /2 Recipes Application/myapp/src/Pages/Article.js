import React, { setState, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faClock,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import "./Article.css";

function Article() {
  const [isLoading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState();
  const element = <FontAwesomeIcon className="icon" icon={faCheckCircle} />;
  const elementTwo = <FontAwesomeIcon className="icon" icon={faClock} />;
  const elementThree = <FontAwesomeIcon className="icon" icon={faAward} />;

  let { name } = useParams();

  useEffect(() => {
    fetch("../recipes.json")
      .then((res) => res.json())
      .then((json) => {
        console.log(name);
        let r = json.recipes.filter((item) => item.name == name);
        console.log(r);
        setRecipe(r[0]);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <span>Loading</span>;
  } else {
    return (
      <div>
        <div
          id="showcase-recipe-article"
          style={
            {backgroundImage: `url(../${recipe.imgmain})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"}
          }
        >
          <div className="content">
          <h1>{recipe.name}</h1>
          <ul id="tag-list">
            {recipe.tags.map((item, index) => (
              <li key={index}> {item}</li>
            ))}
          </ul>
          </div>
        </div>
        <div className="container">
          <div id="main-recipe-container" className="row">
            <div id="col-left" className="col-md-3">
              <div id="white-background">
                <div id="default-list" className="d-flex">
                  <p>
                    {elementTwo} {recipe.time}
                  </p>
                  <p>
                    {elementThree} {recipe.difficulty}
                  </p>
                </div>
                <h3>Ingrediënten</h3>
                <ul id="ingredients-list">
                  {recipe.ingredients.map((item, index) => (
                    <li key={index}>
                      {" "}
                      {element} {item}{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div id="col-right" className="col-md-9">
              <h3>Instructies</h3>
              <ul id="instructions-list">
                {recipe.instructions.map((item, index) => (
                  <li key={index}>
                    {" "}
                    <span>{index + 1}</span> {item}{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
