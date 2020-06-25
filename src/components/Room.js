import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";

const Room = memo(({ room }) => {
  const { title, images } = room;
  return (
    <article className="photo">
      <div className="img-container">
        <img src={images || defaultImg} alt="" />
        <Link to={`/rooms/${title}`} className="btn-primary photo-link">
          {title}
        </Link>
      </div>
    </article>
  );
});

Room.propTypes = {
  room: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
export default Room;
