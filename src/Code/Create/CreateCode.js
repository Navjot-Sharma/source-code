import React, { Component } from "react";
import { connect } from "react-redux";

import "./CreateCode.css";
import AppChip from "../../miscellaneous/chip/chip";

import { addFile, deleteFile } from "../../actions/createCodeActions";

class CreateCode extends Component {
  // tag = "";
  state = {
    title: null,
    details: null,
    category: null,
    tags: ["angular", "nodejs"],
    files: [{ name: null, code: null }]
  };

  componentDidMount() {
    this.tag = "navi";
  }

  addFile = () => {
    const files = [...this.state.files, { name: null, code: null }];
    this.setState({ ...this.state, files });
  };

  removeFile = id => {
    console.log(id);
    const files = this.state.files;
    files.splice(id, 1);

    this.setState({ ...this.state, files });
  };

  addTag = tag => {
    console.log(this.tag);
    tag = this.tag;
    if (tag && tag !== "" && !this.state.tags.includes(tag)) {
      const tags = [...this.state.tags, tag];
      console.log(tags);
      this.setState({ ...this.state, tags });
      this.tag = "";
    }
  };
  handleChange = event => {
    this.tag = event.target.value;
  };
  render() {
    return (
      <section className="container category">
        <h3 className="text-center">Add new code</h3>
        <div className="row">
          <div className="col-sm-6">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter title of your code"
              className="form-control"
              // value={this.state.title}
            />
            <label htmlFor="details">Details</label>
            <textarea
              type="text"
              name="details"
              placeholder="Enter details of your code or instructions(if any)"
              className="form-control my-textarea1"
            />
            <label htmlFor="category">Category</label>
            <input
              type="text"
              name="category"
              placeholder="For eg. Angular or React or Ubuntu"
              className="form-control"
            />
            <div className="tags">
              <label htmlFor="tags">Tags</label>
              <div className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="For eg. React, React Router"
                  aria-label="Add tags"
                  ref={input => (this.tag = input)}
                />
                <button
                  className="btn btn-outline-primary my-2 my-sm-0"
                  type="submit"
                  onClick={() => this.addTag()}
                >
                  Add
                </button>
              </div>
              {this.state.tags.map(tag => (
                <AppChip key={tag}>{tag}</AppChip>
              ))}
            </div>
          </div>
          <div className="col-sm-6">
            {this.state.files.map((file, index) => {
              return (
                <div key={index}>
                  <label htmlFor="file">File name</label>
                  <input
                    type="text"
                    name="file"
                    placeholder="For eg. index.html"
                    className="form-control"
                  />
                  <label htmlFor="code">Type/Paste your code here</label>
                  <textarea
                    name="code"
                    placeholder="Enter your code or command here"
                    className="form-control my-textarea2"
                  />
                  {this.state.files.length > 1 && (
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => this.removeFile(index)}
                    >
                      Delete file
                    </button>
                  )}
                </div>
              );
            })}
            <button
              className="btn btn-outline-primary"
              onClick={() => this.addFile()}
            >
              Add file
            </button>
          </div>
          <div className="save">
            <button className="btn btn-outline-success">Save</button>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    title: state.createCode.title
  };
}
const mapDispatchToProps = dispatch => ({
  addFile: () => dispatch(addFile())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCode);
