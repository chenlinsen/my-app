import React , { Component }from "react";
import { createPortal } from "react-dom";
import "../Css/Index.css"
class Modal extends Component {
  constructor(props) {
    super(props);
    //根节点下创建div节点
    this.container = document.createElement("div");
    document.body.appendChild(this.container);
  }
  //卸载
  componentWillUnmount() {
    document.body.removeChild(this.container);
  }
  render() {
    return createPortal(
      <div className="modal">
        <span className="close" onClick={this.props.onClose} >
        &times;
        </span>
        <div className='content'>{this.props.children}</div>
      </div>,
      this.container
    );
  }
}
export default Modal;
