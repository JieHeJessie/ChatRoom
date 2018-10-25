import React from 'react'
import Logo from '../../component/logo/logo'
import {register} from '../../redux/user.redux'

import {List, InputItem,Radio, WhiteSpace, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

@connect(
    state=>state.user,
    {register}
)
class Register extends React.Component{
    
    constructor(props){
        super(props)
        
        this.state={
            user:'',
            psw:'',
            repeatpsw:'',
            type:'seeker'
        }
        this.handleRegister = this.handleRegister.bind(this)
    }

    handleChange(key, val){
        this.setState({
            [key]:val
        })
    }
    handleRegister(){
        this.props.register(this.state)
    }

    render(){
        const RadioItem = Radio.RadioItem
        return(
            <div>
                {this.props.redirectTo? <Redirect to={this.props.redirectTo} />: null}
                <Logo></Logo>
                <List>
                    {this.props.msg ? <p>{this.props.msg}</p> : null}
                    <InputItem 
                    onChange={v=>this.handleChange('user', v)}>
                        User Name
                    </InputItem>
                    <WhiteSpace />
                    <InputItem 
                    type='password'
                    onChange={v=>this.handleChange('psw', v)}>
                        Password
                    </InputItem>
                    <WhiteSpace />
                    <InputItem 
                    type='password'
                    onChange={v=>this.handleChange('repeatpsw', v)}>
                        Confirm Password
                    </InputItem>
                    <WhiteSpace />
                    <RadioItem 
                    onChange={v=>this.handleChange('type', 'seeker')}
                    checked={this.state.type==='seeker'}>
                        SEEKER
                    </RadioItem>
                    <RadioItem 
                    onChange={v=>this.handleChange('type', 'boss')}
                    checked={this.state.type==='boss'}>
                        BOSS
                    </RadioItem>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.handleRegister}>Register</Button>
                </List>
            </div>
        )
        
    }
}

export default Register