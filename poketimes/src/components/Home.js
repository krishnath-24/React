import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Pokeball from './pokeball.png';
import { connect } from 'react-redux';



class Home extends Component{

    render() {  

        console.log(this.props);
        const {posts} = this.props;

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
            <p className="center">No posts yet!</p>
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

const mapStateToProps = (state) => {

    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps)(Home);