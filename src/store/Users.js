import { createSlice } from "@reduxjs/toolkit";
let latestId=0;
const Slice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        UserAdded: (users, action) => {
            users.push({
                ID:++latestId,
                name:action.payload.name
            });
        }
    }
});
export const {UserAdded} = Slice.actions; 
export default Slice.reducer;
