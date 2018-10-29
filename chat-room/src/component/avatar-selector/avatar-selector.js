import React from 'react'
import {Grid, List} from 'antd-mobile'
class AvatarSelector extends React.Component{

    constructor(props) {
		super(props)
		this.state={
            icon:''
        }
	}
    render(){

        const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
                               .split(',')
                               .map(v=>({
                                   icon:require(`../img/${v}.png`),
                                   text:v
                               }))
        const gridHeader = this.state.icon
                           ?(<div>
                               <span>Your avatar</span>
                               <img style={{width:20}}  src={this.state.icon}/>
                           </div>)
                           :(<div>Please choose your avatar</div>)
        console.log(this.state)
        return(
            <div>
                {gridHeader}
                <Grid
                    data={avatarList}
                    columnNum={5}
                    onClick={elm=>{
                        this.setState(elm)
                    }}
                />
            </div>
        )
    }
}

export default AvatarSelector