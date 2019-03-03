import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { createPosts } from '../actions/postActions';

export class Postform extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        };
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        const payload = {
            title: this.state.title,
            body: this.state.body
        };

        this.props.createPosts(payload);
    };

    render() {
        return (
            <div>
                <h3>Add Post</h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label>
                        <br />
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.onChange}
                        />
                    </div>
                    <br />

                    <div>
                        <label>Body: </label>
                        <br />
                        <textarea
                            name="body"
                            value={this.state.body}
                            onChange={this.onChange}
                        />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

Postform.propTypes = {
    createPosts: PropTypes.func.isRequired
};

export default connect(
    null,
    { createPosts }
)(Postform);
