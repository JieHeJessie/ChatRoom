import React from 'react'
import Logo from '../../component/logo/logo'
import {register} from '../../redux/user.redux'
import imoocForm from '../../component/imooc-form/imooc-form'

import {List, InputItem,Radio, WhiteSpace, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

@connect(
    state=>state.user,
    {register}
)
@imoocForm
class Register extends React.Component{
    
    constructor(props){
        super(props)
        
        this.handleRegister = this.handleRegister.bind(this)
    }

    
    componentDidMount(){
        this.props.handleChange('type', 'seeker')
    }
    handleRegister(){
        this.props.register(this.props.state)
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
                    onChange={v=>this.props.handleChange('user', v)}>
                        User Name
                    </InputItem>
                    <WhiteSpace />
                    <InputItem 
                    type='password'
                    onChange={v=>this.props.handleChange('psw', v)}>
                        Password
                    </InputItem>
                    <WhiteSpace />
                    <InputItem 
                    type='password'
                    onChange={v=>this.props.handleChange('repeatpsw', v)}>
                        Confirm Password
                    </InputItem>
                    <WhiteSpace />
                    <RadioItem 
                    onChange={v=>this.props.handleChange('type', 'seeker')}
                    checked={this.props.state.type === 'seeker'}>
                        SEEKER
                    </RadioItem>
                    <RadioItem 
                    onChange={v=>this.props.handleChange('type', 'boss')}
                    checked={this.props.state.type==='boss'}>
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