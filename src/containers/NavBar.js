import React, {Component} from 'react';
import NavbarElements from '../components/NavbarElements';

class NavBar extends Component {
    render() {
        return(
                <NavbarElements isAuth={false}/>
            )
        
    }
}

export default NavBar;

