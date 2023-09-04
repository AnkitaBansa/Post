import React from 'react';
import './QuestionForm.css'; 
import {Button} from 'semantic-ui-react';
function QuestionForm() {
  return (
    <div className="QuestionForm">

    <div className= 'titleBar'>
        <label>
            Title:
            &nbsp;&nbsp;
            <textarea placeholder= "start your question with how, what, why, etc." name= "Title" cols= {80} rows={1} />
        </label>
        </div>
        <div className= 'Description'>
      <label>Describe your problem:</label>
      </div>
      <div>
      <textarea placeholder="Describe your problem..." name= 'des' cols={80} rows={10} />
    </div>
    <div className= 'Tags'> 
      <label>
         Tags:
         &nbsp;
      <textarea placeholder="please add up to three tags to describe what your question is about, e.g., Java" name= 'ton' cols={80} rows= {1}/>
    </label>
    </div>
      <Button class="mediun ui button">
        Post
      </Button>
    </div>
  );
}

export default QuestionForm;