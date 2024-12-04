import React from "react";
import "../styles/list.css";

const List = ({ data, title }) => {
  return (
    <div className="list">
      <h2>{title}</h2>
      <ul className="items-list">
        {data.map((item, index) => (
          <li key={index}>
            <p className="rank">{index + 1}</p>
            <div className="image-container">
              <img src={item.img} alt="" />
            </div>
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>{item.artist}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
