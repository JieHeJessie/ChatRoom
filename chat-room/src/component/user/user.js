import React from 'react'
import { connect } from 'react-redux'
import { Result, List,Brief,WhiteSpace,Modal } from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import browserCookie from 'browser-cookies'

import {logoutSubmit} from '../../redux/user.redux'

@connect(
    state => state.user,
    {logoutSubmit}
)
class User extends React.Component{
    
    constructor(props){
		super(props)
		this.logout = this.logout.bind(this)
	}
    
    logout(){
        const alert = Modal.alert
        console.log('logout')
        alert(
            'Log Out', 'Are you want to log out?',
            [
                { text: 'Cancel', onPress: () => console.log('cancel') },
                { text: 'Yes', onPress: () => {
                    browserCookie.erase('userid')
                    this.props.logoutSubmit()
                }}
            ]
        )
    }
    render(){
        console.log(this.state)
        const props = this.props
        const Item = List.Item 
        const Brief = Item.Brief
        
        return props.user?(
            <div>
                <Result
                    img = {<img
                             src={require(`../img/${props.avatar}.png`)}
                             style={{width:50}}
                             alt=""
                        />}
                    title = {props.user}
                    message = {props.type == 'boss' ? props.company : null}
                />
                
                <List>
                    <Item multipleLine>
                        { props.title }
                        { props.desc.split('\n').map( v => <Brief key = {v}>{ v }</Brief>)}
                        { props.money ? <Brief> Salary: { props.money }</Brief> : null}
                    </Item>
                </List>
                <WhiteSpace></WhiteSpace>
                <List>
                    <Item onClick = { this.logout}>Log Out</Item>
                </List>
            </div>
        ): <Redirect to={props.redirectTo} />
    }
}

export default User