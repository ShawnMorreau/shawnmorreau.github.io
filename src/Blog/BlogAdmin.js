import React from "react";
import "./Blog.css";
export default class extends React.Component{
    state={
        postDetails:{
            title:"",
            content:"",
        }
    }
    updateValue = (evt) =>{
        const name = evt.target.name;
        const value = evt.target.value;
        this.setState(state=>({
            postDetails:{
                ...state.postDetails,
                [name]:value
            }
        }));
    }
    handleChange=(e)=>{
        e.preventDefault();
        this.props.createNewPost(
            {
                title:this.state.postDetails.title,
                content:this.state.postDetails.content
            }
        );
        this.setState({postDetails:{
            title:"",
            content:""
        }})
        
        
    }
    render(){
        return(
            <div className="BlogInput">
                <form>
                    <label>Title:<input type="text" name = "title" value={this.state.postDetails.title} onChange={this.updateValue}/></label>
                    <br/>
                    <label>Content:<input type="text" name="content" value = {this.state.postDetails.content} onChange={this.updateValue}/></label>
                    <br/>
                    <input type="submit" value="Submit" onClick={this.handleChange}/>
                </form>
            </div>
        );
    }
}