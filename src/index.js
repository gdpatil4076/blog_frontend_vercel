import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { UserProvider } from './context/userProvider';
import { BlogProvider } from './context/blogProvider';
import { CommentProvider } from './context/CommentProvider';

import {disableReactDevTools} from '@fvilers/disable-react-devtools'

if (process.env.NODE_ENV === 'Production') disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <UserProvider>
    <BlogProvider>
    <CommentProvider>
      <App /> 
    </CommentProvider>
    </BlogProvider>
  </UserProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
