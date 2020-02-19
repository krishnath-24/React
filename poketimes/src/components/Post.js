import React,{Component} from 'react';
import { connect } from 'react-redux';
import Rainbow from '../hoc/Rainbow';
import { deletePost } from '../actions/deletePost'


class Post extends Component{

    handleClick = () => {

        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    
    render() {

        console.log(this.props);
        const post = this.props.post ? (
            <div className="container">
                <div className="post card">
                    <div className="card-content">
                        <strong><span className="card-title">{this.props.post.title}</span></strong>
                        <em><p className="card-body">{this.props.post.body}</p></em>
                    </div>
                </div>
                <div className="center">
                    <button className="btn gray" onClick={this.handleClick}>
                        Delete Post
                    </button>
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
    
    return {
        post : state.posts.find( post => post.id === id )
    }

    
}

const mapDispatchToProps = (dispatch) => {

    return {

        deletePost : (id) => {dispatch(deletePost(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rainbow((Post)));