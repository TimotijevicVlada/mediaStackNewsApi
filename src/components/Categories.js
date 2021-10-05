import React from "react";

const Categories = ({ setCategories, setKeyword }) => {


  return (
    <div className="categories">
      <span onClick={() => setCategories('technology,-sports')}>Technology</span>
      <span onClick={() => setCategories('sports,-technology')}>Sport</span>
      <input onChange={(e) => setKeyword(e.target.value)} type="text" placeholder="Search by keyword" />
    </div>
  );
};

export default Categories;
