import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

function App() {
  const [getMessage, setGetMessage] = useState({})

  const [myValue, setValue] = useState(' ')

  // var input_value="default_string";

  useEffect(()=>{
    axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])

  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>请在这里输入文本</p>
        <form noValidate autoComplete = "off">
          <Input placeholder="本日は晴天なり" inputProps = {{'aria-label':'description'}} onChange={(e) => setValue(e.target.value)}/>
          <b>&nbsp;</b>
          <Button variant="contained" onClick={()=>{alert(myValue)}}>转换</Button>
        </form>

        <div>{getMessage.status === 200 ?
          <h3>{getMessage.data.message}</h3>
          :
          <h3>等待后端数据</h3>}</div>
      </header>
    </div>
  );
}

export default App;
