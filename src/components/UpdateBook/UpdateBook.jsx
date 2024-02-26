/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import route from "../../routes/routes.json";
import Input from "../Input/Input";
import { Button } from "react-bootstrap";
import styles from "../BooksList/BooksList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../BooksList/BookListSlice";

const UpdateBook = () => {
  const data = useSelector((state) => state.books.data);
  const { pid } = useParams();

  const [title, setTitle] = useState(data[pid-1].title);
  const [author, setAuthor] = useState(data[pid-1].author);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnChangeTitle = (value) => {
    setTitle(value);
  };

  const handleOnChangeAuthor = (value) => {
    setAuthor(value);
  };

  const handleUpdate = () => {
    dispatch(
      updateData({
        title: title,
        author: author,
        index: pid,
      })
    );
    navigate(route.HOME);
  };

  return (
    <div className={styles.inputContainer}>
      <label>Title : </label>
      <br></br>
      <Input
        placeHolder="Please Enter Title"
        onchange={handleOnChangeTitle}
        value={title}
      />
      <br></br>
      <label>Author Name : </label>
      <br></br>
      <Input
        placeHolder="Please Enter Author Name"
        onchange={handleOnChangeAuthor}
        value={author}
      />
      <br></br>
      <Button
        variant="dark"
        className="mt-2 ms-3"
        onClick={() => handleUpdate()}
      >
        Save
      </Button>
    </div>
  );
};

export default UpdateBook;
