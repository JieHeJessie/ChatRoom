import React from 'react'

import { NavBar, Icon, InputItem, TextareaItem, Button} from 'antd-mobile';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {update} from '../../redux/user.redux'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'

@connect(
    state=>state.user,
    {update}
)

class SeekerInfo extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            title:'',
            desc:''
        }
    }
    
    onChange(key, val){
        this.setState({
            [key]:val
        })
    }
    render(){
        
        const path = this.props.location.pathname
        const redirect = this.props.redirectTo
        return(
            <div>
                {redirect&&redirect!==path? <Redirect to={this.props.redirectTo}></Redirect> :null}
                <NavBar mode="dark">Seeker Information</NavBar>
                
                <AvatarSelector
                    selectAvatar={(imgname)=>{
                        this.setState({
                            avatar:imgname
                        })
                    }}
                    ></AvatarSelector>
                <InputItem onChange={(v)=>this.onChange('title', v)}>
                    Seeking Title              
                </InputItem>
                <TextareaItem 
                    onChange={(v)=>this.onChange('desc', v)}
                    row={3}
                    autoHeight
                    title='Description'>
                    
                </TextareaItem>
                <Button type='primary' onClick={()=>{this.props.update(this.state)}}>Save</Button>
            
            </div>
        )
    }
}

export default SeekerInfo