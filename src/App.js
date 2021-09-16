import React, { Component } from 'react';
import Customer from './componets/Customer'
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'http://placeimg.com/64/64/1',
    'project': 'DPR',
    'loca': 'tree',
    'serverName': 'Tree_server',
    'ip': '192.168.0.13'
  },
  {
    'id': 2,
    'image': 'http://placeimg.com/64/64/2',
    'project': 'DPR',
    'loca': 'Enter',
    'serverName': 'Enter_server',
    'ip': '192.168.0.13'
  },
  {
    'id': 3,
    'image': 'http://placeimg.com/64/64/any',
    'project': 'DDR',
    'loca': 'WALL',
    'serverName': 'SERVER1',
    'ip': '192.168.0.13'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        { customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} loca={c.loca}  project={c.project} serverName={c.serverName} ip={c.ip} /> ); } ) }
      </div>
    );
  }
}

export default App;
