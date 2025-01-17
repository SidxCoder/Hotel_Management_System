import {configureStore,createSlice} from "@reduxjs/toolkit"


const hotelSlice = createSlice({
    name: "searchDetails",
    initialState: {
        location: null,
        fromDate: null,
        toDate: null,
        guests: null,
        Rooms: null,
        RoomType: null
    },
    reducers: {
        additem: (state,action) =>{
            state.location = action.payload.location
            state.fromDate = action.payload.fromDate
            state.toDate = action.payload.toDate
            state.guests = action.payload.guests
            state.Rooms = action.payload.rooms
            state.RoomType = action.payload.RoomType
        }
    }
})
export const {additem}  = hotelSlice.actions
export const store = configureStore({
    reducer: {
        searchDetails: hotelSlice.reducer
    }
})