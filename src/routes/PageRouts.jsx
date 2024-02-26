import { Route, Routes } from "react-router-dom";
import route from "./routes.json";
import Home from "../pages/Home";
import AddBookPage from "../pages/AddBookPage";
import UpdateBookPage from "../pages/UpdateBookPage";
import BookDetailsPage from "../pages/BookDetailsPage";

const PageRouts = () => {
  return (
    <Routes>
      <Route path={route.HOME} element={<Home />} />
      <Route path={route.AddBOOK} element={<AddBookPage />} />
      <Route path={route.UPDATEBOOK}>
        <Route index element={<UpdateBookPage />} />
        <Route path=":pid" element={<UpdateBookPage />} />
      </Route>
      <Route path={route.BOOKDETAILS}>
        <Route index element={<BookDetailsPage />} />
        <Route path=":pid" element={<BookDetailsPage />} />
      </Route>
    </Routes>
  );
};

export default PageRouts;
