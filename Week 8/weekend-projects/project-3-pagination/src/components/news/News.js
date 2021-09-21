import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsUI from '../ui/news/NewsUI.js';
import Pagination from '../pagination/Pagination.js';
/* import SearchBar from '../searchBar/SearchBar.js'; */

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [newsPerPage, setNewsPerPage] = useState(10);
  /*   const [filteredNews, setFilteredNews] = useState([]); */

  //Load Data
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setNews(res.data);
      setLoading(false);
    };

    fetchNews();
  }, []);

  //Pagination Code
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  //Paginate Foo
  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <>
      {/*     <SearchBar news={news} setFilteredNews={setFilteredNews} /> */}

      {/*       {filteredNews.length ? (
        <NewsUI loading={loading} news={filteredNews} />
      ) : (
        <NewsUI loading={loading} news={currentNews} />
      )} */}

      <NewsUI loading={loading} news={currentNews} />
      <Pagination
        newsPerPage={newsPerPage}
        totalNews={news.length}
        paginate={paginate}
      />
    </>
  );
};

export default News;
