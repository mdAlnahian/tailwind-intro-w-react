import React from "react";

const Link = (props) => {
  const { name, link } = props.route;
  return (
    <li>
      <a className="text-xl ml-16" href={link}>{name}</a>
    </li>
  );
};

export default Link;
