import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    email: string | null;
    password: string | null;
    isLoading: boolean;
    // isAuth: boolean;
}

const initialState: UserState = {
    email: null,
    password: null,
    isLoading: false,
    // isAuth: false
}

// export const login = createAsyncThunk("auth/login", async ({ email, password }: { email: string, password: string }, { rejectWithValue }) => {

//     try {
//         const response = await fetch("http://localhost:3000/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ email, password }),
//         })
//         console.log("response", response)

//         if (!response.ok) {
//             const errorData = await response.json();
//             return rejectWithValue(errorData);
//         }

//         return await response.json();
//     } catch (error) {
//         console.log("Fetch error", error);
//         return rejectWithValue({ message: "Network error or server unreachable" });
//     }

// })

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // buradaki state tamamen initial state'i temsil ediyor.
        // action aslında veridir. action.payload ise action içerisinde gelen veri anlamına gelir.
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
    },

    // state -> buradaki state tamamen initial state'i temsil ediyor. Initial veriyi değiştirmeye olanak sağlar.
    // extraReducers: (builder) => {
    //     builder.addCase(login.pending, (state) => {
    //         state.isLoading = true;
    //         // state.isAuth = false
    //     })
    //     builder.addCase(login.fulfilled, (state) => {
    //         state.isLoading = false;
    //         // state.isAuth = true
    //     })
    //     builder.addCase(login.rejected, (state) => {
    //         state.isLoading = false;
    //         // state.isAuth = false
    //     })
    // }

})
export const { setEmail, setPassword, setIsLoading } = userSlice.actions
export default userSlice.reducer;
