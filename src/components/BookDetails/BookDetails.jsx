import { Button } from "react-bootstrap";
import styles from "../BookDetails/BookDetails.module.css";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import route from "../../routes/routes.json";

const BookDetails = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.books.data);

  const {pid} = useParams();

  const handleBack = () => {
    navigate(route.HOME);
  };

  return (
    <div className={styles.book}>
      <div className={styles.image}>
        <img src={data[pid-1].image} alt="IMG" width="100%" height="100%" />
      </div>
      <div className={styles.title}>Title : {data[pid-1].title} </div>
      <div className={styles.author}>Author : {data[pid-1].author}</div>
      <div className={styles.button}>
        <Button variant="secondary" className="me-2" onClick={handleBack}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default BookDetails;
