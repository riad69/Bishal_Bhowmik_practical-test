import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TableSort from './components/TableComponet/TableSort';

function App() {
 
    const a =[1,3,5]

    // console.log(tableInfo);

    // console.log(tableInfo)
  return (
    <div className="App">

    <Table></Table>

    {/* <TableSort></TableSort> */}
      
    </div>
  );
}

export default App;
