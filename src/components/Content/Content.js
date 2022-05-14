import { img_300, unavailable } from "../../config/config";
import "./Content.css";

const Content = ({ id, poster, title, date, media_type, vote_average }) => {
  return (
    <div className="media">
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b>{title}</b>
      <span className="name">
        {media_type === "tv" ? "TV Series" : "Movie"}
      </span>
      <b>
        <span className="date">{date && date.substr(0, 4)}</span>
      </b>
    </div>
  );
};

export default Content;
