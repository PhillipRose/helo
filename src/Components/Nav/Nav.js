import React from 'react'
import {withRouter, Link} from 'react-router-dom';


const Nav = props =>  {

console.log(props);

    
        return(
            // <p>Nav Component</p>
            <div className='nav-bar'>
                
                 {/* {props.location.pathname !== '/'
            ? ( */}
                <nav>
                <Link to='/Dashboard' className='nav-links'>Home</Link>
                <Link to='/new' className='nav-links'>New Post</Link>
                <Link to='/' className='nav-links'>Logout</Link>
               </nav>
               {/* )
            : null}  */}

            </div>
        )
    }
export default Nav