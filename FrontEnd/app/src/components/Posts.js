import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { API_URL } from '../Global';
import Post from './Post'

function Posts() {

    const[posts, setPosts] = useState([]);
    const url = API_URL;

    const getPosts = () => {
        axios.get(url + 'articles')
        .then(res => {
            setPosts(res.data.articles);
        })
        
    }

    const alertFunction = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
          `<div class="alert alert-${type} alert-dismissible" role="alert">`,
          `   <div>${message}</div>`,
          '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>'
        ].join('')
        const alertPlaceholder = document.getElementById('alertMsg')
        alertPlaceholder.append(wrapper)
      }

    const deletePost = (id) => {
        const idPost = posts[id]._id; //obtenemos id 
        axios.delete(url + 'delete/' + idPost)
        .then(res => {
            getPosts();
            alertFunction(`Post has been deleted`, 'success')
        })
        .catch((err)=>{
            console.log(err)
            alertFunction('Error ocurred while deleting the post', 'warning')
        });
    }

    useEffect(() => {
        getPosts();
    }, []);

  return (
    <div>
        <h2 className="mt-3 mb-4 text-center">Posts</h2>
        <div className='container'>
        <div id="alertMsg"></div>
            <div className='row row-cols1 row-cols-md-2 row-cols-lg-3'>
                {
                    posts.length > 0 ? (
                        posts.map((post, i) => {
                            return(
                                <Post
                                    key={i}
                                    id={i}
                                    postData={post}
                                    delPost={deletePost}
                                />
                            )
                        })
                    ):(
                        <h3 className="mx-auto">No posts done</h3>
                    )
                }
            </div>

        </div>
    </div>
  )
}

export default Posts