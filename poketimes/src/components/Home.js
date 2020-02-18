import React,{Component} from 'react';
import Rainbow from '../hoc/Rainbow';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pokeball from './pokeball.png'
class Home extends Component{

    state = {

        posts : []
    }

    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(posts => {

            console.log(posts);
            this.setState({
                posts : posts.data
            });

        }).catch( err => {
            console.log(err);
        });
    }


    render() {

        const {posts} = this.state;

        const postList = posts.length ? (

            posts.map((post)=>{

                return (
                    <div className="post card " key={post.id} >
                        <img src={Pokeball} alt="Pokeball" />
                        <div className="card-content">
                            <h2 className="card-title"><Link to={'/posts/' + post.id}><strong className="red-text">{post.title}</strong></Link></h2>
                            <p><em>{post.body}</em></p>
                        </div>
                    </div>
                )
            })
        ) : (
            <p>No posts yet!</p>
        )

        return (
            <div className="container home" >
                <div className=" center">
                <h2>Welcome Home</h2>
                <h4>Eat Posts</h4>
                </div>
                {postList}
            </div>
            
        )
    }
}

export default Rainbow(Home);