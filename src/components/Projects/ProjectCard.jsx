import React from "react";
import styled from "styled-components";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <StyledCard>
      <div className="imageWrapper">
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of`}
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
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 300px;
  background: #07182E;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  padding: 20px;
  color: white;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .imageWrapper {
    overflow: hidden;
    border-radius: 15px;
    margin-bottom: 15px;
  }

  .image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .title {
    font-size: 1.5em;
    margin: 10px 0;
  }

  .description {
    font-size: 1em;
    margin: 10px 0;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 10px 0;
  }

  .skill {
    background: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 0.9em;
    font-weight: bold;
    color: white;
  }

  .links {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
  }

  .link {
    text-decoration: none;
    color: white;
    font-weight: bold;
    position: relative;
  }

  .link:hover {
    text-decoration: underline;
  }

  ::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 130%;
    background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
    top: 0;
    left: 0;
    z-index: 0;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  ::after {
    content: '';
    position: absolute;
    inset: 5px;
    background: #07182E;
    border-radius: 15px;
    z-index: 1;
  }
`;

export default ProjectCard;
