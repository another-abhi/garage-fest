const initialState = {
  users: [
    { name: "abc@abc.com", password: "hello", amount: 1000, returns: 56 },
    { name: "Abhi", password: "hello", amount: 5000, returns: 20 }
  ],
  session: { user: "" },
  userFlag: false
};

const reducer = (state = initialState, action) => {
  let userFlag = state.userFlag;
  console.log("reducer");
  console.log(action);
  switch (action.type) {
    case "login":
      console.log("reducer2");
      state.users.forEach(element => {
        console.log(element);
        if (
          element.name === action.args.email &&
          element.password === action.args.password
        ) {
          state.session.user = element.name;
          console.log("reducer3");
          userFlag = true;
        }
      });
      return { ...state, userFlag: userFlag };
    default:
      return state;
  }
};
export default reducer;
