import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      image:
        "https://s26162.pcdn.co/wp-content/uploads/2021/10/3b47d124002685f2a3c67e47383232c7.jpg",
    },
    {
      id: 2,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image:
        "https://s26162.pcdn.co/wp-content/uploads/2018/02/gatsby-original2.jpg",
    },
    {
      id: 3,
      title: "Brave New World",
      author: "Aldous Huxley",
      image:
        "https://s26162.pcdn.co/wp-content/uploads/2021/10/bravenewworld.jpg",
    },
    {
      id: 4,
      title: " A Streetcar Named Desire",
      author: "Tennessee Williams",
      image:
        "https://s26162.pcdn.co/wp-content/uploads/2021/10/39739_0d64668dff792ed1_b.jpg",
    },
    {
      id: 5,
      title: " The Catcher in the Rye",
      author: "J.D. Salinger,",
      image:
        "https://s26162.pcdn.co/wp-content/uploads/2021/10/The-Catcher-in-the-Rye-First-Edition-cover-E.-Michael-Mitchell.jpg",
    },
    {
      id: 6,
      title: "Invisible Man",
      author: "Ralph Ellison",
      image:
        "https://s26162.pcdn.co/wp-content/uploads/2018/10/invisibleman-1509049531-640x996.jpg",
    },
    {
      id: 7,
      title: " Fahrenheit 451",
      author: "Ray Bradbury",
      image: "https://s26162.pcdn.co/wp-content/uploads/2021/10/lf-1-1.jpg",
    },
    {
      id: 8,
      title: "Psycho",
      author: "Robert Bloch",
      image: "https://s26162.pcdn.co/wp-content/uploads/2021/10/lf-1.jpg",
    },
  ],
};

const BookListSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push({ ...action.payload });
    },
    updateData: (state, action) => {
      const index = action.payload.index - 1;
      const title = action.payload.title;
      const author = action.payload.author;
      state.data[index].title = title;
      state.data[index].author = author;
    },
  },
});

export const { addData, updateData } = BookListSlice.actions;

export default BookListSlice.reducer;
