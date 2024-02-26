import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../components/BooksList/BookListSlice"
export const store = configureStore({
    reducer: {
        books: booksReducer,
      },
})