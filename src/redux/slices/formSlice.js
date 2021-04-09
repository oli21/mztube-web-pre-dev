import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../firebase/firebase";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    fullName: "",
    email: "",
    password: "",
  },
  reducers: {
    addName: (state, action) => {
      return {
        ...state,
        fullName: action.payload,
      };
    },
    addEmail: (state, action) => {
      return {
        ...state,
        email: action.payload,
      };
    },
    addPassword: (state, action) => {
      return {
        ...state,
        password: action.payload,
      };
    },

    signUp: (state) => {
      auth
        .createUserWithEmailAndPassword(state.email, state.password)
        .then(() => {
          window.alert("sign in successfull");
        });
    },
  },
});

export const { addName, addEmail, addPassword, signUp } = formSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.entities.counter.value;

export default formSlice.reducer;
