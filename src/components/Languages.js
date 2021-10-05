import React from "react";

const Languages = ({ language, setLanguage }) => {
  return (
    <div className="languages">
      {language === 'en,-de' ? (
        <button onClick={() => setLanguage('de,-en')}>DE</button>
      ) : (
        <button onClick={() => setLanguage('en,-de')}>EN</button>
      )}
    </div>
  );
};

export default Languages;
