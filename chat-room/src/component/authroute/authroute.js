import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

@withRouter
@connect(
	null
)
class AuthRoute extends React.Component{
	componentDidMount(){
        const publicList = ['/login', '/register']
        const pathname = this.props.location.pathname

        console.log("pathname"+pathname)
        //if the page locate in login and register, return null
        if(publicList.indexOf(pathname)>-1){
            return null
        }
        
        axios.get('/user/info').
            then(res=>{
                if(res.status===200){
                    if(res.data.code===0){
                        return null
                    }else{
                        this.props.history.push('/login')
                    }
                }
            })
    }
	render(){
		return null
	}

}
export default AuthRoute