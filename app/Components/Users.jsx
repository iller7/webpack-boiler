import React from 'react';
import PropTypes from 'prop-types';
import HelloUser from './HelloUser';

export default class Users extends React.Component {
  render() {
    const friend = this.props.list.filter(n => n.friend).sort((a, b) => b.name < a.name);
    const notFriend = this.props.list.filter(n => !n.friend).sort((a, b) => b.name < a.name);
    const FriendList = () => (
      <ul>
        {
          friend.map(p => <li key={p.name}>{p.name}</li>)
        }
      </ul>
    );
    const NotFriendList = () => (
      <ul>
        {
          notFriend.map(p => <li key={p.name}>{p.name}</li>)
        }
      </ul>
    );

    return (
      <div>
        <HelloUser somethingHere={notFriend[0].name} />
        <h2>Friends</h2>
        <FriendList />
        <hr />
        <h2> Non Friends </h2>
        <NotFriendList />
      </div>
    );
  }
}

Users.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired,
  })).isRequired,
};
