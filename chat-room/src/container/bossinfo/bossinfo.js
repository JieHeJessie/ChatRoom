import React from 'react'

import { NavBar, Icon, InputItem, TextareaItem, Button} from 'antd-mobile';

import AvatarSelector from '../../component/avatar-selector/avatar-selector'

class BossInfo extends React.Component{

    constructor(props){
        super(props)

        this.state={
            title:'',
            company:'',
            money:'',
            desc:'',
        }
    }

    onChange(key,val){
        this.setState({
            [key]:val
        })
    }
    render(){
        return(
            <div>
                <NavBar
                    mode="dark"
                >Boss Information</NavBar>
                <AvatarSelector></AvatarSelector>

                <InputItem onChange={(v)=>this.onChange('title', v)}>
                    Title
                </InputItem>
                <InputItem onChange={(v)=>this.onChange('company', v)}>
                    Company
                </InputItem>
                <InputItem onChange={(v)=>this.onChange('money', v)}>
                    Salary
                </InputItem>
                <TextareaItem
                    onChange={(v)=>this.onChange('desc', v)}
                    row={3}
                    autoHeight
                    title='Description'
                >

                </TextareaItem>
                <Button type='primary'>Save</Button>

            </div>
        )
    }
}

export default BossInfo