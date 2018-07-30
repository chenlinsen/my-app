//将PostList挂在到DOM节点上
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import PostList from './Component/PostList';
ReactDOM.render(<PostList/>,document.getElementById('root'));
registerServiceWorker();