import React from 'react';
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";
import PropTypes from "prop-types";

function Dashboard() {
  return (<div>dashboard</div>)
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({auth: state.auth});
export default connect(mapStateToProps, {logoutUser})(Dashboard);
