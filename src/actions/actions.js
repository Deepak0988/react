import axios from 'axios';

export const SET_MENUS = 'SET_MENUS';

export const saveMenus = (menus) => {
    return {
        type : SET_MENUS,
        payload : menus
    }
}

export const setMenus = () => {
    return dispatch => {
        axios.get('http://localhost:8080/user/roles/1').then(
            response => {
                console.log(response);
                let menus = [{id:1,name:'Home',path:'/home', icon:'home'},
                             {id:2,name:'Logout',path:'/logout',icon:'person'}]
                dispatch(saveMenus(menus))
        }
        )
    }
}