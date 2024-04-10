import { ChangeEvent } from "react";

const SearchBox = ({
  handleChange
}: {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className='d-flex algin-items-center justify-content-center box-search'>
      <h3 className='mr-2'>Search:</h3>{" "}
      <input
        style={{ width: "80%" }}
        className='search-product'
        placeholder='Search ...'
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
