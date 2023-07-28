import { createSlice } from "@reduxjs/toolkit"
const user = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
        },
        removeUser(state, action) {

        },
        deleteUsers(state, action) { },
    }
})

export default user.reducer
export const { addUser } = user.actions