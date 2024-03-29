import React from 'react'
import {useContext,useState,useEffect } from 'react';
import BlogContext from '../context/blogProvider';
import UserContext from '../context/userProvider';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CommentContext  from '../context/CommentProvider';


const Home = (props) => {
  

  const Navigate = useNavigate();
  const { setAllComments } = useContext(CommentContext);
  const { updateLikes,blogs,setBlogsState } = useContext(BlogContext); // blog context

  const {user}  = useContext(UserContext);
  
  useEffect(()=>{ 
    const reqFun=async()=>{
      try {
        const response = await axios.get("/b");
        setBlogsState(response.data);
      } catch (error) {  
        console.log(error);
      }
    }
    reqFun();
  },[]);


  
  const handleFullView = async (BlogId) => {

      try{

        const response = await axios.get(`/blog/view/${BlogId}`);
        if (response.status === 200){

          console.log("At frontend ",response.data.msg);
          // Set commments under context 
          setAllComments(response.data.msg.comment);
          // console.log("Comments are ",comments);
          localStorage.setItem('blogId' , BlogId);
          Navigate('/blog/fullview');
          
        }
        else{
          alert('Error in home.js');
        }
      }
      catch(error){
        console.log(error);
      }
      
  }
  

  const handleLikeClick = (blogId)=>{
      updateLikes(blogId);
  }

  return (

    <div className="container mt-4">

    <div  className="row" >
      {blogs && blogs.map((blog) => (
        <div key={blog._id} className="col-md-4 col-sm-6 mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src={blog.profileImageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              {/* <p className="card-text">{blog.blog}</p> */}
              <p></p>
              <button onClick={() => handleFullView(blog._id)} className="btn btn-primary">View More</button>
              
              {user? ( user.likedBlog.includes(blog._id) ? (
                <button onClick={() => handleLikeClick(blog._id)} className="btn btn-danger"> Like {blog.likedBy.length}</button>
              ) : (
                <button onClick={() => handleLikeClick(blog._id)} className="btn btn-primary"> Like {blog.likedBy.length}</button>
              )): <p></p>}

              <p></p>

              {blog.likedBy.length > 0 && (
                <p>Last liked by {blog.likedBy[blog.likedBy.length - 1]}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>


  )
}



export default Home;  


