import { createSlice } from "@reduxjs/toolkit";
let latestId=0;
const Slice = createSlice({
    name: "projects",
    initialState: [],
    reducers: {
        ProjectAdded: (projects, action) => {
            projects.push({
                ID:++latestId,
                name:action.payload.name
            });
        }
    }
});
export const {ProjectAdded} = Slice.actions; 
export default Slice.reducer;
