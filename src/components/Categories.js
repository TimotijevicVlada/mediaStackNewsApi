import React from "react";

const Categories = ({ setCategories, setKeyword, sortNews, setSortOrder }) => {


  return (
    <div className="categories">
      <span onClick={() => setCategories('technology,-sports')}>Technology</span>
      <span onClick={() => setCategories('sports,-technology')}>Sport</span>
      <input onChange={(e) => setKeyword(e.target.value)} type="text" placeholder="Search by keyword" />
      <select onChange={(e) => setSortOrder(e.target.value)} className="sortByDate">
        <option value="DESC">Desc</option>
        <option value="ASC">Asc</option>
      </select>
    </div>
  );
};

export default Categories;
