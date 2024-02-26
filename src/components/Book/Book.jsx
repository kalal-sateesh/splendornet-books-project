/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import styles from "../Book/Book.module.css";
import { useNavigate } from "react-router-dom";
import route from "../../routes/routes.json";
// import { useDispatch } from "react-redux";
// import { addData } from "../BooksList/BookListSlice";

const Book = ({
  title = "",
  image = "",
  author = "",
  index = "",
  deleteHandler,
  item,
}) => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`${route.UPDATEBOOK}/${item.id}`);
  };

  const handleDelete = () => {
    deleteHandler(index);
  };

  const handleDetails = () => {
    navigate(`${route.BOOKDETAILS}/${item.id}`);
  };

  return (
    <div className={styles.book}>
      <div className={styles.image}>
        <img src={image} alt="IMG" width="100%" height="100%" />
      </div>
      <div className={styles.title}>Title : {title}</div>
      <div className={styles.author}>Author : {author}</div>
      <div className={styles.button}>
        <Button
          variant="secondary"
          className="me-2"
          onClick={() => handleDetails()}
        >
          Details
        </Button>
        <Button variant="warning" className="me-2" onClick={handleUpdate}>
          Edit
        </Button>
        <Button
          variant="danger"
          className="me-2"
          onClick={() => handleDelete()}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Book;
