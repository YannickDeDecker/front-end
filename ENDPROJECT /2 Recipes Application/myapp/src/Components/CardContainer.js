import React, { useState } from 'react'

const CardContainer =() => {
    const [recipes, setRecipes] = useState([
       { name: "Pasta Puttanesca", id: 1},
       { name: "Pasta Vongole", id: 2},
       { name: "Spaghetti Bolognaise", id: 3},
       { name: "Pasta Pesto", id: 4},
       { name: "Pasta Vongole", id: 5},
       { name: "Spaghetti Bolognaise", id: 6}
    ])

    return (
        <div>
            <div className="container">
                <div className="row">
                    {recipes.map(recipe => (
                    <div className="grid col-md-auto mr-3 mb-3" key={recipe.id}>
                        <div className="card-container">
                            <h2>{recipe.name}</h2>
                            <button>Klik voor recept</button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
 }

export default CardContainer
