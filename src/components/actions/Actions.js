import axios from "axios";

export const fetchUserAsync = data => {
  return { type: "FETCH_USER", value: data };
};

export const fetchUserDataAsync = data => {
  return { type: "SET_USER", value: data };
};

// initial api call for first ten newsfeeds using search
export const fetchUser = () => {
  return dispatch => {
    axios
      .get("https://api.github.com/users/supreetsingh247/repos")
      .then(response => {
        var resultData = response.data;
        dispatch(fetchUserAsync(resultData));
      })
      .catch(error => console.log(error.response));
  };
};
export const getUserData = () => {
  return dispatch => {
    axios
      .get("https://api.github.com/users/supreetsingh247")
      .then(response => {
        var resultData = response.data;
        dispatch(fetchUserDataAsync(resultData));
      })
      .catch(error => console.log(error.response));
  };
};
