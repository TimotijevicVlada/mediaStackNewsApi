import React from "react";

const News = ({ dataApi }) => {



  return(
      <div className="news_container">
          {dataApi.map(item => (
              <div className="news_item" key={item.url}>
                  <h2 className="news_title">{item.title}</h2>
                  <h4 className="news_author">{item.author}</h4>
                  <p className="news_desc">{item.description}</p>
                  <img src={item.image} alt={item.title} />
                  <div>
                    <a href={item.url} target="_blank">See original post</a>
                  </div>
                  <div className="news_date">{item.published_at}</div>
              </div>
          ))}
      </div>
  )
    
};

export default News;
