import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import Signup from './components/signup';
import Signin from './components/signin';
import BlogForm from './components/AddBlog';
import BlogInfoComponent from './components/BlogView';
import YourBlogs from './components/YourBlogs';
import EditBlogForm from './components/EditBlog';
import NotificationList from './components/Notification';
import YourLikes from './components/YourLikes';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SearchResults from './components/SearchResults';

function App() {

  const [Blog , SetBlog] = useState(null); 

  return (
 
    <Router>
      <Navbar/>    
      <Routes>
        {/* User Routes */}
        <Route path="/" element={< Home />}/>   
        <Route path="/user/signup" element={<Signup/>}/>
        <Route path="/user/signin" element={<Signin/>} /> 
        <Route path="/user/notify" element={<NotificationList/>} /> 
        <Route path='/blog/addblog' element={<BlogForm/>} />
        <Route path='/blog/fullview' element={ <BlogInfoComponent blogComment={Blog} SetBlog={SetBlog}/>} />
        <Route path='/blog/edit/:id' element={<EditBlogForm/>} />
        <Route path='/blog/yourblog' element={<YourBlogs/>} />
        <Route path='/blog/yourlikes' element={<YourLikes/>} />
        <Route path='/search' element={<SearchResults/>} />

      </Routes>
    </Router>
  );   
}


export default App;
