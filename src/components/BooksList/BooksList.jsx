import Book from "../Book/Book";
import styles from "../BooksList/BooksList.module.css";
// import data from "../../app/data.json";
import Input from "../Input/Input";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import route from "../../routes/routes.json";
import { useState } from "react";
import { useSelector } from "react-redux";

const BooksList = () => {

  const data = useSelector((state)=>state.books.data);

  const [book, setBook] = useState(data);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const deleteHandler = (value) => {
    const newData = [...book];
    newData.splice(value, 1);
    setBook(newData);
  };

  const list = book.map((item, index) => {
    return (
      <Book
        key={index}
        title={item.title}
        image={item.image}
        author={item.author}
        index={index}
        deleteHandler={deleteHandler}
        item={item}
      />
    );
  });

  const handleAddBook = () => {
    navigate(route.AddBOOK);
  };

  const handleOnChange = (value) => {
    setSearch(value);
  };

  const filteredBooks = book.filter((ele) =>
    ele.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredList = filteredBooks.map((item, index) => {
    return (
      <Book
        key={index}
        title={item.title}
        image={item.image}
        author={item.author}
        index={index}
        deleteHandler={deleteHandler}
        item={item}
      />
    );
  });

  return (
    <>
      <Input
        placeHolder="Search here"
        onchange={handleOnChange}
        value={search}
      />
      <Button variant="dark" className="ms-5" onClick={handleAddBook}>
        Add Book
      </Button>
      <div className={styles.container}>
        {search.length <= 0 ? list : filteredList}
      </div>
    </>
  );
};

export default BooksList;
