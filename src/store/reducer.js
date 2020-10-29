const initialState = {
    menuItems : [{id:1,name:'Home',path:'/home', icon:'home'},
        {id:2,name:'Login',path:'/login',icon:'person'}]
}
const reducer = (state = initialState, action) => {
    if(action.type === 'SET_MENUS'){
        console.log(state);
        return {
           ...state,
           menuItems:action.payload  
        }
    }
    return state;
}

export default reducer;