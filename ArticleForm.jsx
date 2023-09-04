import React from 'react';
import './ArticleForm.css'; 
import {Button} from 'semantic-ui-react';

function ArticleForm() {
  return (
    <div className="ArticleForm">

      <div className = 'titleBar'> 
      <label>
        Title:
        &nbsp;&nbsp;
        <textarea placeholder="Enter a descriptive title" name= "Title" rows={1}/>
      </label>
      </div>
      <div className='Abstract'>
      <span> Abstract: </span>
      </div>
      <div>
      <textarea placeholder="Enter a Abstract" cols= {80} rows={4}/>
      </div>
      <div className='Text'>
        <label>
            Article Text:
        </label>
        </div>
        <div>
            <textarea placeholder="Enter a 1- paragraph Abstract" cols= {60} rows={6}/>
        </div>
        <div className= 'Tags'>
            <label>
                Tags:
                &nbsp;
                <textarea placeholder="please add up to three tags to describe what your question is about, e.g., Java" name= "Title" rows={1} cols={80}/>
            </label>
        </div>
        <Button> Post </Button>
        </div>
  );
}
export default ArticleForm;