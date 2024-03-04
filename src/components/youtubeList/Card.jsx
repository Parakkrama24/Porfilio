import React from "react";

import Style from "./Card.module.css";
import { getImageUrl } from "../../utils";

export const Card = ({ data: { title, imageSrc, description ,Link } }) => {
  return (
    <div className={Style.container}>
      <img src={getImageUrl(imageSrc)} alt={`image of ${title}`} 
      className={Style.image}/>
    <h2>
    {title}
    </h2>
      <p className={Style.description}> {description}</p>
   <br/>
   <br/>
   <br/>
      <a href={Link} className={Style.link}>View</a>
      
    </div>
  )
};
