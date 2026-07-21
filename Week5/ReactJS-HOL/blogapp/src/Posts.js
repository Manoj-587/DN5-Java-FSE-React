import React from "react";
import Post from "./Post";

class Posts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    loadPosts() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                const posts = data.map(
                    p => new Post(p.id, p.title, p.body)
                );

                this.setState({
                    posts: posts
                });
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert("Error occurred: " + error);
        console.log(info);
    }

    render() {

        return (
            <div>

                <h1>Blog Posts</h1>

                {
                    this.state.posts.map(post => (

                        <div key={post.id}>

                            <h2>{post.title}</h2>

                            <p>{post.body}</p>

                            <hr />

                        </div>

                    ))
                }

            </div>
        );
    }

}

export default Posts;