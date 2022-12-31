import { FunctionComponent } from "react";
import "./search-component.scss";

type SearchComponentprops = {
  onChange: (value: string) => void;
};

const SearchComponent: FunctionComponent<SearchComponentprops> = ({
  onChange,
}) => {
  return (
    <div className="search-input-wrapper">
      <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
      <input
        className="search-input"
        type="text"
        placeholder="Search product"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchComponent;
