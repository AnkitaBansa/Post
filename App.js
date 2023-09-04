import './App.css';
import { useState } from 'react';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';
function App() {
  const [selection, setSelection] = useState("");
  const onOptionChange = (e) =>{
    setSelection(e.target.value)
  }
  return(
    <div className = "Apper">
      <h2> New Post</h2>
      <span><strong>Select Post Type:  </strong></span>
      <input type='radio' name="selection" value="questionform" onChange={onOptionChange}></input>
      <label> QuestionForm </label>
      
      &nbsp;&nbsp;&nbsp;&nbsp;

      <input type='radio' name="selection" value="articleform" onChange={onOptionChange}></input>
      <label> ArticleForm </label>
      {/*{selection && <p> selected option is <strong>{selection}</strong></p>}*/}

      <h2> What do you want to ask or share </h2>
      {selection === "questionform" && <QuestionForm/>} 
      {selection === "articleform" && <ArticleForm/>}
    </div>
  );
}
export default App; 