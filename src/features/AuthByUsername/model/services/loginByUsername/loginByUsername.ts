import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
    User,
    userActions,
} from 'entites/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async ({
        username,
        password,
    }: LoginByUsernameProps, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', {
                username,
                password,
            });
            if (!response?.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);