import React from 'react'
import Logo from '../../component/logo/logo'

import {List, InputItem,Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile'

class Register extends React.Component{
    
    constructor(props){
        super(props)
        
        this.state={
            type:'seeker'
        }
    }
    render(){
        const RadioItem = Radio.RadioItem
        return(
            <div>
                <Logo></Logo>
                <List>
                    <InputItem>
                        User Name
                    </InputItem>
                    <WhiteSpace />
                    <InputItem>
                        Password
                    </InputItem>
                    <WhiteSpace />
                    <InputItem>
                        Confirm Password
                    </InputItem>
                    <WhiteSpace />
                    <RadioItem checked={this.state.type=='seeker'}>
                        SEEKER
                    </RadioItem>
                    <RadioItem checked={this.state.type=='boss'}>
                        BOSS
                    </RadioItem>
                    <WhiteSpace />
                    <Button type='primary'>Register</Button>
                </List>
            </div>
        )
        
    }
}

export default Register