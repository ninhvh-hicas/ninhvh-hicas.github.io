const initialState = {
    visible: false,
    navbarActive: "home",
  };
  
  const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ON_VISIBLE":
        return {
          ...state,
          visible: action.payload,
        };
      case "CHANGE_NAVBAR_ACTIVE":
        return {
          ...state,
          navbarActive: action.payload,
        };
  
      default:
        return state;
    }
  };
  export default navbarReducer;
  