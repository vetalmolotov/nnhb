import { configureStore } from "@reduxjs/toolkit";
import signinReducer from "./components/signin/signinSlice";

export default configureStore({
    reducer: {
        signin: signinReducer,
    },
});
