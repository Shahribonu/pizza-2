import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./FullPizza.module.scss";

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    name: string;
    price: number;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          " https://630f407537925634188b0362.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Error in getting pizza");
        navigate("/");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Loading...</>;
  }

  return (
    <div className={styles.flex}>
      <img src={pizza.imageUrl} className={styles.fullPizza} />
      <div>
        <h2>{pizza.name}</h2>
        <h4>{pizza.price} $</h4>
      </div>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Back</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
