import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const App: React.FC = () => {
  return (
    <div className="App">
      <div className="todoContainer">
      <TextField
          required
          id="outlined-required"
          label="Todo Input"
          defaultValue=""
          className="textField"
        />
      <Button variant="contained" color="primary">
        追加
      </Button>
      </div>
    </div>

  );
}

export default App;
