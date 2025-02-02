import React from "react";
import styled from "styled-components";

import { getImageUrl } from "../../utils";

const CardNew = ({ data: { title, imageSrc, description, link } }) => {
  return (
    <StyledWrapper>
      <div
  className="card"
  style={{
    width: "300px",
    boxShadow: "0px 15px 25px -5px rgba(173, 216, 230, 0.7)", // Light blue shadow
    borderRadius: "10px", // Optional: Smooth corners
    backgroundColor: "#fff", // Optional: Light background for better contrast
  }}
>
  <div className="img-container">
    <div
      className="img"
      style={{ backgroundImage: `url(${getImageUrl(imageSrc)})` }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="link">
        <button onClick={link}>View</button>
      </a>
    </div>
    <div className="description card">
      <span className="title">{title}</span>
      <p className="text">{description}</p>
    </div>
  </div>
</div>

    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 300px; /* Increased width */
    margin: 1.5rem; /* Adjusted margin for spacing */
    transition: all 0.3s ease;
    position: relative;
    border-radius: 0.5rem 2rem;
    box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.5);
  }

  .card:hover {
    transform: scale(1.05); /* Slightly larger scaling on hover */
  }

  .img {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 200px; /* Increased height */
    border-radius: 0.5rem 2rem 0 0;
  }

  .img-container {
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem 2rem;
    overflow: hidden;
  }

  .description {
    padding: 1.5rem; /* Increased padding for better spacing */
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    text-align: center;
    border-radius: 0 0 0.5rem 2rem;
  }

  .title {
    font-size: 1.5rem; /* Increased font size */
    font-weight: bold;
    margin-bottom: 0.8rem; /* Adjusted margin */
  }

  .text {
    font-size: 1rem; /* Adjusted font size */
    margin-bottom: 1.2rem;
  }

  .link {
    display: inline-block;
    padding: 0.7rem 1.5rem; /* Increased padding for button */
    background-color: #344cb7;
    color: white;
    border-radius: 0.5rem;
    text-decoration: none;
    transition: background-color 0.3s ease;
    font-size: 1rem; /* Increased button font size */
  }

  .link:hover {
    background-color: #577bc1;
  }
`;


export default CardNew;
