import React from 'react'
import Logo from '../../component/logo/logo'

import {List, InputItem,Radio, WhiteSpace, Button} from 'antd-mobile'

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
        console.log(this.state)
    }

    render(){
        const RadioItem = Radio.RadioItem
        return(
            <div>
                <Logo></Logo>
                <List>
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