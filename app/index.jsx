import React from 'react';
import ReactDOM from 'react-dom';
// import Users from './Components/Users';
import App from './Components/App';
import './index.scss';

// state
// lifecycle event
// ui

// ReactDOM.render(<HelloUser />, document.getElementById('app'));
ReactDOM.render(
  <App />,
  // <Users list={[
  //   { name: 'Tyler', friend: true },
  //   { name: 'Faizal', friend: false },
  //   { name: 'Bob', friend: false },
  //   { name: 'Ryan', friend: true },
  //   { name: 'Michael', friend: false },
  //   { name: 'Abraham', friend: true },
  //   { name: 'Mikenzi', friend: false },
  //   { name: 'Jessica', friend: true },
  //   { name: 'Dan', friend: false }]}
  // />,
  document.getElementById('app'),
);
