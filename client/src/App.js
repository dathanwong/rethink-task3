import React,{useState} from 'react';
import Axios from 'axios';
import './App.css';


function App() {

  const [redirectUrl, setRedirectUrl] = useState("");
  const [value, setValue] = useState("");

  function createUrl(){
    if(value.match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/)){
      Axios.post("http://localhost:8000/api/url", {url: value})
      .then(res =>{
        console.log(res.data);
        setRedirectUrl(res.data);
      })
    }else{
      alert("Invalid URL");
    }
    
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row my-3">
          <input value={value} onChange={e => setValue(e.target.value)} type="text" className="col-6"/>
          <button onClick={createUrl} className="btn btn-primary col-3">Create Short URL</button>
        </div>
        <div className="row">
          <div>{redirectUrl.redirect}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
