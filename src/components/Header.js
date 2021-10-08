import React from "react";
import Categories from "./Categories";
import Languages from "./Languages";

const Header = ({ language, setLanguage, setCategories, setKeyword, sortNews, setSortOrder }) => {
  return (
    <div className="header">
      <div className="header_logo">
        <h1>
          Media<span>Stack</span>
        </h1>
      </div>
      <div className="header_languages">
        <Categories setCategories={setCategories} setKeyword={setKeyword} sortNews={sortNews} setSortOrder={setSortOrder}/>
        <Languages language={language} setLanguage={setLanguage}/>
      </div>
    </div>
  );
};

export default Header;
