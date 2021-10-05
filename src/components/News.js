import React from "react";

const News = ({ displayItems }) => {
  //2021-07-15T11:59:36+00:00

  const updateTime = (string) => {
    const myTime = string.split("+")[0].replace("T", " ");
    return myTime;
  };

  return (
    <div className="news_container">
      {displayItems.map((item) => (
        <div className="news_item" key={item.url}>
          <div className="news_title">
            <h2 >{item.title}</h2>
          </div>
          <div className="news_info">
            <div className="news_image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="news_text_info">
              <div className="news_desc">{item.description}</div>
              <div className="original_info_link">
                <a href={item.url} target="_blank" rel="noreferrer">
                  See original post
                </a>
              </div>
              <div className="author_and_time">
                <h4 className="news_author">By: {item.author}</h4>
                <span className="news_date">
                    {updateTime(item.published_at)}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
