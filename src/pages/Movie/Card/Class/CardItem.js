import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import styled from "styled-components";

const Contents = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
  color: #fff;
  box-sizing: border-box;
  z-index: 10;
  background: #fff;
  overflow: hidden;
  transition: 0.3s;
  &:after {
    opacity: 0;
    content: "";
    position: absolute;
    left: 10px;
    top: 18px;
    width: 0;
    height: 0;
    background: #000;
    border-radius: 50px;
    transition: 0.3s;
  }
`;
const Title = styled.h1`
  position: relative;
  max-height: 40px;
  margin-bottom: 5px;
  font: 18px "Arial";
  line-height: 20px;
  overflow: hidden;
  font-weight: bold;
  transition: 0.3s;
  z-index: 1;
`;
const CardList = styled.div`
  a {
    display: block;
  }
  position: relative;
  width: 250px;
  overflow: hidden;
  padding: 10px;
  &:hover {
    a {
      box-shadow: 0 10px 20px -6px #bac2d1;
      -webkit-transition: box-shadow 0.2s;
      transition: box-shadow 0.2s;
    }
    img {
      transform: scale(1.05);
    }
    ${Contents} {
      &:after {
        opacity: 1;
        width: 5px;
        height: 5px;
      }
    }
    ${Title} {
      padding-left: 10px;
    }
  }
`;
const Poster = styled.p`
  position: relative;
  width: 100%;
  height: 250px;
  margin: 0;
  overflow: hidden;
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    transition: 0.3s;
  }
`;
const MovieYear = styled.h5`
  margin-bottom: 5px;
  color: #59bec9;
  font-size: 16px;
  font-weight: bold;
`;
const GenreBlock = styled.div`
  position: relative;
  padding-left: 50px;
`;
const GenreTitle = styled.strong`
  position: absolute;
  left: 0;
  top: 0;
  color: #f0b51d;
  font-weight: normal;
`;
const GenreList = styled.ul`
  margin: 0 0 0 10px;
  overflow: hidden;
  padding: 0;
`;
const GenreItem = styled.li`
  list-style: none;
  float: left;
  margin-right: 10px;
  color: #202121;
  &:first-child {
    margin-left: 0;
  }
`;
const Rating = styled.em`
  display: block;
  padding-top: 5px;
  color: #202121;
  strong {
    color: #59bec9;
    font-weight: bold;
  }
`;

function CardItem({ id, year, title, summary, poster, genres, rating }) {
  console.log(genres)
  if (!genres) {
    return null;
  }
  if (!genres.length) {
    return <p>Sorry, the list is empty.</p>;
  }
  return (
    <CardList>
      <Link
        to={{
          pathname: `/react-portfolio/movie/card/class/${id}`,
          state: {
            year,
            title,
            summary,
            poster,
            genres,
          },
        }}
      >
        <Poster>
          <img 
            src={poster} 
            alt={title} 
            title={title} 
          />
        </Poster>
        <Contents>
          <Title>{title}</Title>
          <MovieYear>{year}</MovieYear>
          <GenreBlock>
            <GenreTitle>genre</GenreTitle>
            <GenreList>
              {genres.map((genre, i) => (
                <GenreItem key={i}>{genre}</GenreItem>
              ))}
            </GenreList>
          </GenreBlock>
          <Rating>
            rating: <strong>{rating}</strong>
          </Rating>
        </Contents>
      </Link>
    </CardList>
  );
}
CardItem.propTypes = {
  id: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  rating: propTypes.number.isRequired,
};
export default CardItem;