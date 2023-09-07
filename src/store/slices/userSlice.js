import { createSlice } from "@reduxjs/toolkit"
const user = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
        },
        removeUser(state, action) {
            state.pop(action.payload)

        },
        deleteUsers(state, action) {
        },
    }
})

export default user.reducer
export const { addUser, deleteUsers, removeUser } = user.actions