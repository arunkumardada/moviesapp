import axios from "axios";
import React, { useState, useEffect } from "react";
import Content from "../../components/Content/Content";
import "./Popular.css";

const Popular = (props) => {
  const [content, setContent] = useState([]);
  const { searchText } = props;

  useEffect(() => {
    if (searchText) fetchSearch();
    else fetchPopular();
  }, [searchText]);

  const fetchPopular = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setContent(data.results);
  };

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchText}`
    );
    console.log(data.results);
    setContent(data.results);
  };

  return (
    <div>
      <span className="Popular">Popular</span>
      <div className="Popular">
        {content &&
          content.map((c) => (
            <Content
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              tite={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
    </div>
  );
};

export default Popular;
