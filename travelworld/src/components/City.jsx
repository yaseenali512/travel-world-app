import { useParams, useSearchParams } from "react-router-dom";
import styles from "./City.module.css";

function City() {
  const { id } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <>
      <h2>City {id}</h2>
      <h3>
        Position: {lat}, {lng}
      </h3>
    </>
  );
}

export default City;
