import React from "react";
import Blog from "./Blog.js";
import BlogAdmin from "./BlogAdmin.js";
import "../Syling/Styling.css";
import CardV1 from "../Card/CardV1/CardV1.js"


export default class extends React.Component {
    state = {
        posts: []
    }
    componentDidMount() {
        fetch('/api/blog/')
            .then(res=>{return res.json()})
            .then(data=>this.setState({posts:data}));

    }
    getLastIndexOfPosts=()=>{
        return this.state.posts[this.state.posts.length-1]
    }
    createNewPost=(postObject)=>{
        // const posts = {
        //     ...this.state.posts,
        //     postObject
        // }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postObject)
        };
        fetch('api/blog/add', requestOptions)
            .then(response=>{
                 if(response.status !==200){
                     console.log("there is a problem yukka");
                     return;
                 }
                 console.log(response);
         })
            
            .then(response => response)
            // .then(data=>this.setState({posts:data}))
    }
    deletePost=(post_id)=>{
        const newState = this.state.posts.filter(x=>x.id !== post_id);
        const requestOptions={
            method:'DELETE',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({id:post_id})
        }
        fetch('api/blog',requestOptions)
            .then(this.setState({posts:newState}))
    }
    render() {
        let posts = this.state.posts.map((post,i) =>
                <Blog
                    key={i}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    deletePost={this.deletePost}
                />
            );
        return (
            <>
                {posts}
                <BlogAdmin
                    createNewPost={this.createNewPost}
                />
                <CardV1/>
            </>
        );
    }
}