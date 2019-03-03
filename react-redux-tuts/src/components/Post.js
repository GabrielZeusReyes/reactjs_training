import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

// connects component to redux store provided by 'Provider;
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

export class Post extends Component {
    componentDidMount() {
        // call action 'fetchPosts'
        this.props.fetchPosts();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Post</h1>
                {postItems}
            </div>
        );
    }
}

Post.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

const mapStateToProps = state => ({
    // posts keyword is used because thats the keyword used on the rootreducer
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(
    mapStateToProps,
    { fetchPosts }
)(Post);