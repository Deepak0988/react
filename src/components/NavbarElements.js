import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const NavbarElements = (props) => {

    let menuJsx = null;
    if(props.menuItems){
        menuJsx =  props.menuItems.map(item => {
            return (<li key={item.id}><Link to={item.path}><i className="small left material-icons">{item.icon}</i>{item.name}</Link></li>);
        });

    } 
    return (
        <React.Fragment>
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">Logo</Link>
                        <ul className="right hide-on-med-and-down">
                            {menuJsx}
                        </ul>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
      menuItems: state.menuItems
    }
  }
  

export default connect(mapStateToProps) (NavbarElements);