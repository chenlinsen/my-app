import React, { Component } from "react";
class UserControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            react: false,
            redux: false,
            mobx: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //监听复选框的变化，设置复选框的选中状态
    handleChange(e) {
        debugger
        this.setState({ [e.target.name]: e.target.checked });
    }
    //表单提交响应函数
    handleSubmit(e) {
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    React
          <input type="checkbox" name="react" value='react' checked={this.state.react} onChange={this.handleChange} />
                </label>
                <label>Redux
        <input type="checkbox" name="redux" value='redux' checked={this.state.redux} onChange={this.handleChange} />
                </label>
                <label>Mobx
        <input type="checkbox" name="mobx" value='mobx' checked={this.state.mobx} onChange={this.handleChange} />
                </label>
            </form>
        );
    }
}
export default UserControl;