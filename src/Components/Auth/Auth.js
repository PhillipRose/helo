import React, {Component} from 'react'


export default class Auth extends Component {
constructor(props){
    super()
    this.state ={
        username: '',
        password: '',
        profileImg: ''
    }


}

handleInput = (val) => {
    this.setState({username: val})
}
handlePassword =(val) => {
    this.setState({password: val})
}




    render(){
        return(
            // Auth Component
        <div>
            <div className='Auth-inputs'>
                <input value = {this.state.username} placeholder='Username' onChange ={(e) => this.handleInput(e.target.value)}/>

                <input value = {this.state.password} placeholder ='Password' onChange ={(e) => this.handlePassword(e.target.value)}/>
            </div>
            <div className ='Auth-buttons'>
                <button  className ='Auth-login'>Login</button>
                <button className ='Auth-register'>Register</button>
            </div>
        </div>
        )
    }
}