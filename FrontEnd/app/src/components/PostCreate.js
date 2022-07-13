import React, {useState} from 'react';
import { API_URL } from '../Global';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PostsCreate() {

  const url = API_URL;
  const navigate = useNavigate();

  const [post, setPost] = useState("")

  let titleRef = React.createRef();
  let contentRef = React.createRef();
  let authorRef = React.createRef();

  const changeState = () => {
    setPost({
      title: titleRef.current.value,
      content: contentRef.current.value,
      author: authorRef.current.value,
    });
    console.log(post);
  };

  const createPost = (e) => {
      e.preventDefault();
      changeState();
      //petición http para guardar el articulo
      axios.post(url + 'save', post)
      .then(res => {
        console.log(res.data)
        navigate('/articles');
      })
  }

  return (
    <div className='card mx-auto mb-3 mt-5' style={{width:"25rem"}}>
          <div className='card-header'>
            <h3 className='text-center text-uppercase pt-4'>Create Post</h3>
          </div>
          <div className='card-body text-center'>
            <form onSubmit={createPost}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input ref={titleRef} onChange={changeState} type="text" className="form-control" id="title" required/>
                </div>
                <div className='mb-3'>
                  <label htmlFor="content" className="form-label">Description</label>
                  <textarea ref={contentRef} onChange={changeState} className="form-control" id="content" required/>
                </div>
                <div className='mb-3'>
                  <label htmlFor="author" className="form-label">author</label>
                  <input ref={authorRef} onChange={changeState} type="text" className="form-control" id="author" required/>
                </div>
                <div className='d-grid'>
                  <button type="submit" className="btn btn-primary">Create</button>
                </div>
              </form>
            </div>
      
    </div>
  )
}

export default PostsCreate