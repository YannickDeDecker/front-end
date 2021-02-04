import React, { setState, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Article() {

    let {id} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(json => {
                setState({
                    post:json
                });
            });
    })

    return (
        <div>
            <h1>Article Detail page!!!</h1>
            <h2>Article ID is {id}</h2>
            <h3 style={{'display':'block'}}>Article TITLE: {post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}

export default Article
