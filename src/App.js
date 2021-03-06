import { useState, useEffect, useCallback } from "react";
import "./styles/App.css";
import News from "./components/News";
import ReactPaginate from "react-paginate";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  //Api key for fetching
  const API_KEY = "3abdddbc82fec8cae46f950a4757b120";

  //States
  const [dataApi, setDataApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState('en,-de');
  const [categories, setCategories] = useState('technology,-sports');
  const [keyword, setKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState("DESC");

  

  //Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 5;
  const pagesVisited = pageNumber * itemsPerPage;
  const displayItems = dataApi.slice(pagesVisited, pagesVisited + itemsPerPage);
  const pageCount = Math.ceil(dataApi.length / itemsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  //Fetching Api data
  const fetchData = useCallback( async () => {
    try {
      const response = await fetch(
        `http://api.mediastack.com/v1/news?access_key=${API_KEY}&categories=${categories}&languages=${language}&keywords=${keyword}`
      );
      const data = await response.json();

      setIsLoading(false);

      if(sortOrder === "DESC") {
        setDataApi(data.data.sort((a, b) => new Date(b.published_at) - new Date(a.published_at)));
      } else {
        setDataApi(data.data.sort((a, b) => new Date(a.published_at) - new Date(b.published_at)));
      }
      
      
    } catch (err) {
      console.log(err);
    }
  }, [language, categories, keyword, sortOrder]);

  

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  return (

    <div className="App">
      <Header
        setLanguage={setLanguage}
        language={language}
        setCategories={setCategories}
        setKeyword={setKeyword}
        setSortOrder={setSortOrder}
      />
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <News displayItems={displayItems} />
      )}
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationContainer"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      <Footer />
    </div>
  );
}

export default App;
