import React, { setState, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Image from 'react-random-image'
import {Link} from 'react-router-dom'


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
            <div className="article-page">
                <button className="return"><Link className="nav-link" to="/blog">Return to blog page</Link></button>
                <h2>Article nr {id}</h2>
                <h3>Auteur: Yannick De Decker</h3>
                <h1>{post.title}</h1>
                <Image width={500} height={300}/>
                {/* <h3 style={{'display':'block'}}>Article TITLE: {post.title}</h3> */}
                <p>{post.body}</p>
            </div>
        )
    }
}

export default Article
