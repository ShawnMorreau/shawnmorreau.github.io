import React from "react";
import Blog from "./Blog.js";
import BlogAdmin from "./BlogAdmin.js";
import "../Syling/Styling.css";

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
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postObject)
        };
        fetch('api/blog/add', requestOptions)
            .then(response => response.json())
            .then(data=>this.setState({posts:data}))
                // this.setState({posts:allPosts}));
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
        const posts = this.state.posts.map((post,i) =>
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
            </>
        );
    }
}