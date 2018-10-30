import React from 'react'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/chatuser.redux'
import UserCard from '../usercard/usercard'

@connect(
	state=>state.chatuser,
	{getUserList}
)
class Seeker extends React.Component{
	
	componentDidMount(){
		this.props.getUserList('boss')
	}
	
	render(){
		console.log(this.props)
		return(
			<UserCard userlist={this.props.userlist}></UserCard>
		)
	}
}

export default Seeker