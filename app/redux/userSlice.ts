import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface UserState {
    email: string | null;
    password: string | null;
    isLoading: boolean;
    isAuth: boolean;
}

const initialState: UserState = {
    email: null,
    password: null,
    isLoading: false,
    isAuth: false,
}

export const login = createAsyncThunk(
    "user/login",
    async ({ email, password }: { email: string, password: string }) => {
        const response = await fetch("http://localhost:3000/test/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        })
        const data = await response.json();
        return data;
    }
)

export const register = createAsyncThunk(
    "user/register",
    async ({ email, password }: { email: string, password: string }) => {
        const response = await fetch("http://localhost:3000/test/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        return data;
    }
)


export const userSlice = createSlice({
    name: "user",
    initialState,
    // reducers: {
    //     setEmail: (state, action) => {
    //         state.email = action.payload
    //     },
    //     setPassword: (state, action) => {
    //         state.password = action.payload
    //     },
    //     setIsLoading: (state, action) => {
    //         state.isLoading = action.payload
    //     },
    // },
    reducers: {},
    extraReducers: (builder) => {
        // register start
        builder.addCase(register.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.email = action.payload.email;
            state.password = action.payload.password;
        })
        builder.addCase(register.rejected, (state) => {
            state.isLoading = false
        })
        // register end

        // login start
        builder.addCase(login.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.isAuth = action.payload.status === true ? true : false;
        })
        builder.addCase(login.rejected, (state) => {
            state.isLoading = false;
            state.isAuth = false;
        })
        // login end
    }

})
// export const { setEmail, setPassword, setIsLoading } = userSlice.actions
export default userSlice.reducer;
