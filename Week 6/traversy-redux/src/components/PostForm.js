import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../redux/actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {},
      title: '',
      body: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    this.props.createPost(post);
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title</label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>Body</label>
            <br />
            <textarea
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button
            type="submit"
            style={{
              backgroundColor: 'black',
              color: 'white',
              padding: '6px 10px',
              borderRadius: '6px',
            }}
          >
            Add Form
          </button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPosts: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
