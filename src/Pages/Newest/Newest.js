import axios from "axios";
import React, { useState, useEffect } from "react";
import Content from "../../components/Content/Content";
import "./Newest.css";

const Newest = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetchNewest();
  }, []);

  const fetchNewest = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setContent(data.results);
  };
  return (
    <div>
      <span className="Newest">Newest</span>
      <div className="newest">
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

export default Newest;
