import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    movies: []
}

const moviesSlice = createSlice({
    name: "movie",
    initialState,
})