import React, { Component } from "react";
import PostItem from "./PostItem";
import "../Css/PostList.css"
class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.timer = null; //定时器
    this.handleVote = this.handleVote.bind(this); //手动绑定this指向
  }
  componentDidMount() {
    //用setTimeout模拟异步从服务器获取数据
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          {
            id: 1,
            title: "主题1",
            author: "张三",
            date: new Date().toLocaleDateString(),
            vote: 0
          },
          {
            id: 2,
            title: "主题2",
            author: "李四",
            date: new Date().toLocaleDateString(),
            vote: 0
          },
          {
            id: 3,
            title: "主题3",
            author: "王五",
            date: new Date().toLocaleDateString(),
            vote: 0
          }
        ]
      });
    }, 1000);
  }
  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer); //清除定时器
    }
  }
  handleVote(id) {
    //根据id进行过滤,找到待修改vote属性的帖子，返回新的posts对象
    debugger
    const posts = this.state.posts.map(item => {
      const newItem = item.id === id ? { ...item, vote: ++item.vote } : item;
      return newItem;
    });
    //使用新的posts对象设置state
    this.setState({
      posts
    });
  }
  //以下是页面渲染
  render() {
    return (
      <div className='container'>
         <span style={{marginLeft:"50%"}}>BBS话题列表</span>
        <ul>
          {this.state.posts.map(item => (
            <PostItem key={item.id} post={item} onVote={this.handleVote} />
          ))}
        </ul>
      </div>
    );
  }
}
export default PostList; //作为默认接口导出,供其他JS文件导入使用
