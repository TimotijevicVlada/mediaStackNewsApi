import React from "react";
import Categories from "./Categories";
import Languages from "./Languages";

const Header = ({ language, setLanguage, setCategories, setKeyword }) => {
  return (
    <div className="header">
      <div className="header_logo">
        <h1>
          Media<span>Stack</span>
        </h1>
      </div>
      <div className="header_languages">
        <Categories setCategories={setCategories} setKeyword={setKeyword}/>
        <Languages language={language} setLanguage={setLanguage}/>
      </div>
    </div>
  );
};

export default Header;
