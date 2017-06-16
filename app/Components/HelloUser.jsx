import React from 'react';
import PropTypes from 'prop-types';

export default class HelloUser extends React.Component {
  render() {
    return (
      <h1>
        Hello {this.props.somethingHere}!!!
      </h1>
    );
  }
}

HelloUser.propTypes = {
  somethingHere: PropTypes.string.isRequired,
};

HelloUser.defaultProps = {
  somethingHere: 'Faizal',
};
