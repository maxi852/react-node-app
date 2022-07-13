import React from 'react'

export default function Post({id, postData, delPost}) {

    const {title, date, content, author} = postData;

    const formatDate = (date) => {
        return date.substring(8,10) + date.substring(4,8) + date.substring(0,4);
    }


    const del = () => {
        delPost(id);
    }

  return (
    <div className='col'>
        <div className='card mx-auto mb-5 text-center'>
            <div className='card-header'>
                <h3 className='card-title'>{title}</h3>
            </div>
            <div className='card-body'>
                <h4 className='card-text'>{content}</h4>
            </div>
            <ul className='list-group list-group-flush'>   
                <li className='list-pub list-group-item'>Published: {formatDate(date)}</li>
                <li className='list-pub list-group-item'>Author: {author}</li>
            </ul>  
            <div className='dard-footer'>
                <button className='btn btn-danger btn-sm' type='button' onClick={del}>
                    <i className="fa-solid fa-trash mx-2"></i>
                    Delete
                </button>

            </div>
        </div>


    </div>
  )
}
