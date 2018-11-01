import React from 'react'
import Logo from '../../component/logo/logo'
import { login } from '../../redux/user.redux'
import imoocForm from '../../component/imooc-form/imooc-form.js'

import { List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

@connect(
    state=>state.user,
    {login}
)
@imoocForm
class Login extends React.Component{
    
    constructor(props){
        super(props)
        
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    
    register(){
        this.props.history.push('./register')
    }

    handleLogin(){
        this.props.login(this.props.state)
    }
    
    render(){
        return(
            <div>
                { (this.props.redirectTo && this.props.redirectTo != '/login')?<Redirect to={this.props.redirectTo}/>:null}
                <Logo></Logo>
                <WingBlank>
                    <List>
                        {this.props.msg?<p>{this.props.msg}</p>:null}
                        <InputItem 
                        onChange={v=>this.props.handleChange('user',v)}>
                            User Name
                        </InputItem>
                        <WhiteSpace/>
                        <InputItem
                        onChange={v=>this.props.handleChange('psw', v)}>
                            Password
                        </InputItem>         
                    </List>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.handleLogin}>Login</Button>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.register}>Register</Button>
                </WingBlank>                
            </div>
        )
    }
}

export default Login