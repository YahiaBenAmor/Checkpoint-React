import React from 'react';
import './App.css'; 

function App() {
  return (
    <div className="App">  
    <h1>Enter your details</h1>
<form>
<div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"></input>
    </div> 
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"></input>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1"> Choose an Option </label>
      <select class="form-control" id="exampleFormControlSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1"> Write a Message </label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div> 
    <button type="submit" class="btn btn-primary">Submit</button>
      
  </form>
    </div>
  );
}

export default App;
