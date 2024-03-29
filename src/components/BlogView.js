import React, { useContext, useEffect, useState } from 'react';
import CommentForm from './Comment';
import CommentList from './ViewComment';
import {handleFullview} from './home';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CommentContext  from '../context/CommentProvider';

const BlogInfoComponent = (props) => {

    const { setAllComments } = useContext(CommentContext);

    const Navigate = useNavigate();
    const {blogComment , SetBlog} = props;

    useEffect(()=>{
        const id = localStorage.getItem('blogId');
        const  immediate = async () => {
          try{

            const response = await axios.get(`/blog/view/${id}`);
    
            if (response.status === 200){
    
              console.log("At frontend ",response.data.msg);
    
              SetBlog(response.data.msg);
    
              // Set commments under context  // infinite loop 
              setAllComments(response.data.msg.comment);
    
              // console.log("Comments are ",comments);
    
              localStorage.setItem('blogId' , id);
    
    
            }
            else{
              alert('Error in home.js');
            }
          }
          catch(error){
            console.log(error);
          }
        }

        immediate();
    } ,[] ) ;





    if (!blogComment) {
        return null;
    }
    else{
        var bloginfo = blogComment.bloginfo;
        console.log(bloginfo);
    }


  return (
    <div className="container mt-4">
      <div className="form-floating">
        <h4>{bloginfo.title}</h4>
      </div>

      <img src={bloginfo.profileImageUrl} className="img-fluid" alt="../ProfileImage" />

      
      <textarea
        className="form-control"
        type="text"
        placeholder="HI"
        id="blog"
        name="blog"
        style={{ height: '250px' }}
        defaultValue={bloginfo.blog}

      />

      

      <div className="container mt-4">
        <img src="https://cdn.vectorstock.com/i/preview-1x/17/61/male-avatar-profile-picture-vector-10211761.jpg" width="100px" />
        <div>
          <b>Created By -</b> {bloginfo.createdBy.name}
        </div>
      </div>

        <CommentForm id={bloginfo._id}/>
    
        <CommentList></CommentList>


    </div>




  );
};

export default BlogInfoComponent;
