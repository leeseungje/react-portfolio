import React from "react";
import styled from "styled-components";
import Page from "../../../../components/Page";
import { FiArrowLeft } from "react-icons/fi";

const DetailBlock = styled.div`
  position: relative;
  width: 760px;
  margin: 20px auto;
  min-height: 500px;
`;
const Contents = styled.div`
  padding-left: 280px;
`;
const Title = styled.h1`
  font-size: 26px;
`;
const MovieSummary = styled.p``;
const Poster = styled.h1`
  position: absolute;
  left: 0;
  top: 0;
  width: 250px;
  border: 1px solid #000;
  box-sizing: border-box;
  img {
    width: 100%;
  }
`;
const GenreList = styled.ul`
  overflow: hidden;
  padding: 0;
`;
const GenreItem = styled.li`
  list-style: none;
  float: left;
  margin: 0 10px 10px 0;
  padding: 5px 20px;
  border: 1px solid #202121;
  border-radius: 30px;
  transition: 0.3s;
  &:hover {
    color: #f00;
    border-color: #f00;
  }
`;
const ButtonBack = styled.button`
  position: absolute;
  right: 20px;
  top: 80px;
  padding: 0;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #001529;
  color: #001529;
`;

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    console.log(location.state);
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    const handleClick = () => {
      const { history } = this.props;
      history.go(-1);
    };
    if (location.state) {
      return (
        <Page>
          <ButtonBack onClick={handleClick}>
            <FiArrowLeft />
          </ButtonBack>
          <DetailBlock>
            <Poster>
              <img
                src={location.state.poster}
                alt={location.state.title}
                title={location.state.title}
              />
            </Poster>
            <Contents>
              <Title>
                {location.state.title} {location.state.year}
              </Title>
              <MovieSummary>{location.state.summary}</MovieSummary>
              <GenreList>
                {location.state.genres.map((genre, i) => (
                  <GenreItem key={i}>{genre}</GenreItem>
                ))}
              </GenreList>
            </Contents>
          </DetailBlock>
        </Page>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
