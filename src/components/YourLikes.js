import React, { useContext } from 'react'
import BlogContext from '../context/blogProvider'


const YourLikes = () => {
    var {blogs} = useContext(BlogContext);
    const user = localStorage.getItem('user');

    const jsonUser = JSON.parse(user);
    const userId = jsonUser._id;

    
    var filteredBlogs = blogs && blogs.filter(blog => blog.likedBy && blog.likedBy.includes(jsonUser.name));


  return (
    <div className="container mt-4">

    <div className="row">
      {filteredBlogs && filteredBlogs.map((blog) => (
        <div key={blog._id} className="col-md-4 col-sm-6 mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src={blog.profileImageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>

                <button  className="btn btn-danger"> Like </button>

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

export default YourLikes
