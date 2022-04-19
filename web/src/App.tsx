import React from 'react';
import logo from './logo.svg';
import './App.css';

import { AddBillRequest } from './proto/svc/bill_api_pb'
import { BillClient } from './proto/svc/Bill_apiServiceClientPb'

// for test

var billService = new BillClient('http://localhost:5000')
var request = new AddBillRequest();

request.setPayType(1);
request.setAmount(100);
request.setPayeeListList(['koneba', 'smgu']);

billService.add(request, {
  'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJrYW5rdGNoIiwiZXhwIjoxNjUwNDAzMzQ5LCJpYXQiOjE2NTA0MDI0NDl9.A_caLtBH9p3PbGnfb7Ph1gIlgRc-DJ7ppdOf9JHrX58'
}, function (err, response) {
  console.log(response, err)
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
