import React,{Component} from 'react';
import { connect } from 'react-redux';
import Rainbow from '../hoc/Rainbow';



class Post extends Component{
    
    render() {

        console.log(this.props.post);
        const post = this.props.post ? (
            <div className="container">
                <div className="post card">
                    <div className="card-content">
                        <strong><span className="card-title">{this.props.post.title}</span></strong>
                        <em><p className="card-body">{this.props.post.body}</p></em>
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
const mapStateToProps = (state,ownProps) => {

    let id = ownProps.match.params.post_id;
    console.log(state.posts);
    var p= {
        post : state.posts.find( post => post.id === id )
    }

    return p;
}

const mapDispatchToProps = (dispatch) => {

    
}

export default connect(mapStateToProps)(Rainbow((Post)));