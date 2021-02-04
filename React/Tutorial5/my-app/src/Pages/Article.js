import React, { setState, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Article() {
    const [isLoading, setLoading] = useState(true);
    const [post, setPost] = useState();

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
                <h1>Article Detail page!!!</h1>
                <h2>Article ID is {id}</h2>
                <h3 style={{'display':'block'}}>Article TITLE: {post.title}</h3>
                <p>{post.body}</p>
            </div>
        )
    }
}

export default Article
