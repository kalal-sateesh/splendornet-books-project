import Input from "../Input/Input";
import styles from "../AddBook/AddBook.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import route from "../../routes/routes.json";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../BooksList/BookListSlice";
// import data from "../../app/data.json";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [titleError, setTitleError] = useState("");
  const [authorError, setAuthorError] = useState("");
  const [urlError, setUrlError] = useState("");

  const data = useSelector((state)=>state.books.data);
  const dispatch = useDispatch();

  const urlRegExpresion = /^(ftp|http|https):\/\/[^ "]+$/;

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(route.HOME);
  };

  const handleOnChangeTitle = (value) => {
    setTitle(value);
    setTitleError("");
  };

  const handleOnChangeAuthor = (value) => {
    setAuthor(value);
    setAuthorError("");
  };

  const handleOnChangeUrl = (value) => {
    setUrl(value);
    setUrlError("");
  };

  const handleAddBook = () => {
    let isValid = true;
    if (!title.trim()) {
      setTitleError("Title is required");
      isValid = true;
      return;
    }
    if (!author.trim()) {
      setAuthorError("Author name is required");
      isValid = false;
      return;
    }
    if (!urlRegExpresion.test(url)) {
      setUrlError("Please Enter a valid Image link");
      isValid = false;
      return;
    }
    if (isValid) {
      const userData = { id: data.length + 1, title:title, author:author, image: url };
      dispatch(addData(userData));
      setTitle("");
      setAuthor("");
      setUrl("");
      setTimeout(() => {
        alert("Book Added successfully");
        navigate(route.HOME);
      }, 2000);
    }
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
      {titleError && (
        <span style={{ color: "red" }} className="fs-5 fw-bold">
          {titleError}
        </span>
      )}
      <br></br>
      <label>Author Name : </label>
      <br></br>
      <Input
        placeHolder="Please Enter Author Name"
        onchange={handleOnChangeAuthor}
        value={author}
      />
      <br></br>
      {authorError && (
        <span style={{ color: "red" }} className="fs-5 fw-bold">
          {authorError}
        </span>
      )}
      <br></br>
      <label>Cover Image Link : </label>
      <br></br>
      <Input
        placeHolder="Please Enter Cover Image Link"
        onchange={handleOnChangeUrl}
        value={url}
      />
      <br></br>
      {urlError && (
        <span style={{ color: "red" }} className="fs-5 fw-bold">
          {urlError}
        </span>
      )}
      <br></br>
      <Button variant="secondary" className="mt-2" onClick={handleBack}>
        Back
      </Button>
      <Button variant="dark" className="mt-2 ms-3" onClick={handleAddBook}>
        Add Book
      </Button>
    </div>
  );
};

export default AddBook;
