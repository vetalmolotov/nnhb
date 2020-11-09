import { createAsyncThunk } from "@reduxjs/toolkit";
import { csrf, getCsrfFromResponse } from "./api.js";
import { API_CALL_STATUS_OK, API_CALL_STATUS_ERROR } from "./const";

export const csrfFetchThunk = () =>
    createAsyncThunk("csrf/fetch", async (_, thunkAPI) => {
        const resp = await csrf();
        const payload = await resp.json();
        const token = getCsrfFromResponse(resp);

        if (payload.status === API_CALL_STATUS_OK && token) {
            return { csrf: token };
        }

        return thunkAPI.rejectWithValue(payload);
    });
