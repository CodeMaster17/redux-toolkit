import { configureStore } from "@reduxjs/toolkit"

import user from "./slices/userSlice"

const store = configureStore({
    reducer: {
        users: user,
    }
})
export default store;