import React from 'react';
import styled from 'styled-components';
import { getImageUrl } from "../../utils";

const Card = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <StyledWrapper>
      <div className="card"
      >
        <div className="imageWrapper"
        >
          <img
            src={getImageUrl(imageSrc)}
            alt={`Image of ${title}`}
            className="image"
            
          />
        </div>
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <ul className="skills">
          {skills.map((skill, id) => (
            <li key={id} className="skill">
              {skill}
            </li>
          ))}
        </ul>
        <div className="links">
          <a href={demo} className="link">
            Demo
          </a>
          <a href={source} className="link">
            Source
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 250px;
    height: auto;
    background: #07182e;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease; /* Smooth transition for hover effect */
  }

  .imageWrapper {
    width: 100%;
    height: 15px;
    overflow: hidden;
    margin-bottom: 15px;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title {
    color: white;
    font-size: 1.4em;
    text-align: center;
    margin-bottom: 10px;
    z-index: 2;
  }

  .description {
    color: #ccc;
    font-size: 1em;
    text-align: center;
    margin-bottom: 10px;
    z-index: 2;
  }

  .skills {
    list-style: none;
    padding: 0;
    margin-bottom: 10px;
    text-align: center;
    z-index: 2;
  }

  .skill {
    color: #fff;
    font-size: 0.9em;
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 10px;
    z-index: 2;
  }

  .link {
    color: #00b7ff;
    text-decoration: none;
    font-size: 1.1em;
    z-index: 2;
  }

  .card::before {
    content: '';
    position: absolute;
    width: 100%;
    background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
    height: 130%;
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
    z-index: 1;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .card::after {
    content: '';
    position: absolute;
    background: #07182e;
    inset: 5px;
    border-radius: 15px;
    z-index: 1;
  }

  /* Hover effect for the card */
  .card:hover {
    opacity: 0.1; /* Reduce opacity on hover */
  }
`;

export default Card;
