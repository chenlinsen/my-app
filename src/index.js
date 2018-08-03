//将PostList挂在到DOM节点上
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Css/Index.css"
import registerServiceWorker from "./registerServiceWorker";
import PostList from "./Component/PostList";
import UserControl from "./Component/UserControl";
import App from "./App";
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
