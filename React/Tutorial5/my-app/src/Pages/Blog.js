import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch'
import {Link, Route} from "react-router-dom";
import Article from './Article'

function Blog({ data }) {
    // init state
    const [state,setState] = useState({
        post:{}
    })

    const fetchSingle = async (id)=>{
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        let data = await res.json();
       // console.log(data)
        setState({
            post:data
        })
    }

    return (
        <div>
            <h1>Blog page</h1>
            {
                data.map((item, i) => {
                    return (
                        <Link onClick={()=>fetchSingle(item.id)} key={i} to={`/blog/${item.id}`} style={{ 'display': 'block' }}>{item.title}</Link>
                    )
                })
            }
            <Route path='/blog/:id' render={() => <Article single={state.post}/>} />
        </div>
    )
}

export default Blog
