import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { csrfFetchThunk } from "./../../../common/js/csrf";
import { signin, signon, getCsrfFromResponse } from "./../../../common/js/api";
import {
    API_CALL_STATUS_OK,
    API_CALL_STATUS_ERROR,
} from "./../../../common/js/const";

export const csrfThunk = csrfFetchThunk();
export const csrfStatusSelector = (state) => state.csrf.status;
export const csrfValSelector = (state) => state.csrf.val;

const apiCall = (endpoint) => async (formData, thunkAPI) => {
    const resp = await endpoint({
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    let body;
    try {
        body = await resp.json();
    } catch (e) {}
    const csrf = getCsrfFromResponse(resp);

    if (body && body.status === API_CALL_STATUS_OK) {
        return { body: body, csrf: csrf };
    }

    return thunkAPI.rejectWithValue({ body: body, csrf: csrf });
};

export const onSigninFetchThunk = createAsyncThunk(
    "onSignin/fetch",
    apiCall(signin)
);

export const onSignonFetchThunk = createAsyncThunk(
    "onSignin/fetch",
    apiCall(signon)
);

const signinSlice = createSlice({
    name: "signin",
    initialState: {
        signedin: false,
        csrf: {
            status: "idle",
            val: null,
            err: null,
        },
        submit: {
            button: {
                status: "idle",
            },
            err: null,
        },
    },
    reducers: {
        toggleSignin: (state) => {
            state.signedin = !state.signedin;
        },
    },
    extraReducers: {
        [csrfThunk.pending]: (state, action) => {
            state.csrf.status = "pending";
            state.submit.button.status = "pending";
        },
        [csrfThunk.fulfilled]: (state, action) => {
            state.submit.button.status = "fulfilled";
            state.csrf.status = "fulfilled";
            state.csrf.val = action.payload.csrf;
        },
        [csrfThunk.rejected]: (state, action) => {
            state.submit.button.status = "rejected";
            state.csrf.status = "rejected";

            if (action.payload) {
                state.csrf.err = action.payload.body;
            } else {
                state.csrf.err = action.error.message;
            }
        },
        [onSigninFetchThunk.pending]: (state, action) => {
            state.submit.button.status = "pending";
        },
        [onSigninFetchThunk.fulfilled]: (state, action) => {
            state.submit.button.status = "fulfilled";
            state.csrf.val = action.payload && action.payload.csrf;
        },
        [onSigninFetchThunk.rejected]: (state, action) => {
            state.submit.button.status = "rejected";
            state.csrf.val = action.payload.csrf;

            if (action.payload) {
                state.submit.err = action.payload.body;
            } else {
                state.submit.err = action.error.message;
            }
        },
        [onSignonFetchThunk.pending]: (state, action) => {
            state.submit.button.status = "pending";
        },
        [onSignonFetchThunk.fulfilled]: (state, action) => {
            state.submit.button.status = "fulfilled";
            state.csrf.val = action.payload.csrf;
        },
        [onSignonFetchThunk.rejected]: (state, action) => {
            state.submit.button.status = "rejected";
            state.csrf.val = action.payload && action.payload.csrf;

            if (action.payload) {
                state.submit.err = action.payload.body;
            } else {
                state.submit.err = action.error.message;
            }
        },
    },
});

export const { toggleSignin } = signinSlice.actions;
export default signinSlice.reducer;
