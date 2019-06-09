import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Home.css";
import { fetchCategories } from "../../actions/categoriesActions";
import { fetchCodeList } from "../../actions/codeListActions";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { error, isLoaded, categories } = this.props;

    if (error) return <div>Error: {error.message}</div>;

    if (!isLoaded) return <div>Loading...</div>;

    if (categories) {
      return (
        <div className="home">
          <h3 className="text-center">Categories</h3>
          <ul>
            {categories.map(item => (
              <li key={item._id}>
                <Link
                  to={"category/" + item.name.toLowerCase()}
                  onClick={() => this.props.fetchCodeList(item._id)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return <p>Failed</p>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchCodeList: id => dispatch(fetchCodeList(id))
  };
}
function mapStateToProps(state) {
  return {
    error: state.categories.error,
    isLoaded: state.categories.isLoaded,
    categories: state.categories.categories
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
