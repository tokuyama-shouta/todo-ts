import React,{useState} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const App: React.FC = () => {
  const [inputText, setInputText] = useState("")

  const changeInputText = (e:  React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let name = e.target.value;
    console.log(name)
  }

  // const onClickSubmit = () => {
    
  // }

  return (
    <div className="App">
      <div className="todoContainer">
      <TextField
          required
          label="Todo Input"
          defaultValue=""
          className="textField"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => (changeInputText)}
        />
        <h2>{inputText}</h2>
      <Button 
        variant="contained" 
        color="primary"
        // onClick={onClickSubmit}
      >
          add
      </Button>
      </div>
    </div>

  );
}

export default App;
