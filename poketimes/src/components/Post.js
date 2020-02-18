import React,{Component} from 'react';
import axios from 'axios';



class Post extends Component{

    state = {
        post : null
    }
    

    componentDidMount() {

        var id = this.props.match.params.post_id;
        var path = 'https://jsonplaceholder.typicode.com/posts/' + id;

        axios.get(path)
        .then((post) => {
            
            this.setState({
                post : post.data
            });
            setTimeout((data) => {
                console.log(data);
            }, 500);
        
        }).catch(err => {
            console.log(err);
        });
        
        
    }

    
    render() {

        const post = this.state.post ? (
            <div className="container">
                <div className="post card">
                    <div className="card-content">
                        <strong><span className="card-title">{this.state.post.title}</span></strong>
                        <em><p className="card-body">{this.state.post.body}</p></em>
                    </div>
                </div>
            </div>
        ) : (
            <h4 className="container center">Loading...</h4>
        )
        

        return (
            <div className="container">
                {post}
            </div>
            
        )
    }
}

export default (Post);