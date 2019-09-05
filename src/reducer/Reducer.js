const initialState = {
  newList: [],
  userData: {}
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_USER":
      newState.newList = [...action.value];
      break;
    case "SET_USER":
      newState.userData = { ...action.value };
      break;
    default:
      newState.newList = [];
      newState.userData = {};
      break;
  }
  return newState;
};

export default reducer;
