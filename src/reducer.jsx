export const initialState = {
   user: null,
};

// Define all actions for app
// Ex: Everytime user logs in, a user will be set
export const actionTypes = {
   SET_USER: "SET_USER",
};

// Takes state (what the data layer currently looks like)
// Takes action(what we're trying to do to the data layer. Pull/push info)
const reducer = (state, action) => {
   console.log(action);

   // Listen to action type & run code for that action
   switch (action.type) {
      case actionTypes.SET_USER:
         return {
            ...state,
            user: action.user,
         };
      default:
         return state;
   }
};

export default reducer;
