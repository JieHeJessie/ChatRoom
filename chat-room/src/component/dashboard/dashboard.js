import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import {Switch, Route} from 'react-router-dom'

import NavLinkBar from '../navlink/navlink'
import Boss from '../boss/boss'
import Seeker from '../seeker/seeker'
import User from '../user/user'


function Msg(){
	return<h1>Msg page</h1>
}
@connect(
	state=>state
)
class Dashboard extends React.Component{
    
	render(){

       const {pathname} = this.props.location
        const user = this.props.user
		const navList = [
		    {
		    	path:'/boss',
		    	text:'Seeker',
		    	icon:'boss',
		    	title:'Seeker List',
		    	component:Boss,
		    	hide:user.type=='seeker'
		    },
		    {
		    	path:'/seeker',
		    	text:'Boss',
		    	icon:'job',
		    	title:'Boss List',
		    	component:Seeker,
		    	hide:user.type=='boss'
		    },
		    {
		    	path:'/msg',
		    	text:'Message',
		    	icon:'msg',
		    	title:'Message List',
		    	component:Msg
		    },
		    {
		    	path:'/me',
		    	text:'Me',
		    	icon:'user',
		    	title:'User Center',
		    	component:User,
		    }

		]
		return(
			<div>
				<NavBar className='fixd-header' mode='dard'>{navList.find(v=>v.path==pathname).title}</NavBar>
				<div>
					<Switch>
						{navList.map(v=>(
							<Route key={v.path} path={v.path} component={v.component}></Route>
						))}
					</Switch>
				</div>
				<NavLinkBar data={navList}></NavLinkBar>
			</div>
			)
	}
}

export default Dashboard