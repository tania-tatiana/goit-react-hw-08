import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filterSelector = useSelector(selectNameFilter);
  return (
    <>
      <p className={styles.text}>Find contacts by name</p>
      <input
        className={styles.input}
        type="text"
        value={filterSelector}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </>
  );
};
