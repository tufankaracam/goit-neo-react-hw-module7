import { useDispatch, useSelector } from "react-redux";
import styles from "./searchbox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const updateFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.container}>
      <span>Find contacts by name</span>
      <input type="text" value={filter} onChange={updateFilter} />
    </div>
  );
}
