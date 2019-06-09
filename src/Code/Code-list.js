import React from "react";
import { connect } from "react-redux";
import { fetchCodeList } from "../actions/codeListActions";

class CodeList extends React.Component {
  render() {
    const { error, isLoaded, data } = this.props;

    if (error) return <div>Error: {error.message}</div>;

    if (!isLoaded) return <div>Loading...</div>;

    if (data)
      return (
        <ul>
          {data.map(item => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
      );
    return null;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCodeList: () => dispatch(fetchCodeList())
  };
}

function mapStateToProps(state) {
  return {
    error: state.codeList.error,
    isLoaded: state.codeList.isLoaded,
    data: state.codeList.data
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CodeList);
