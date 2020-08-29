import React from "react";
import axios from "axios";
import Page from "../../../../components/Page";
import Loading from "../../../../components/Loading";
import CardItem from "./CardItem";
import styled from "styled-components";
import { Button } from "antd";

const CardBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 0;
`;

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      page: 1,
      movies: [],
    };
  }

  componentDidMount() {
    this.getMovies(this.state.page);
    return;
  }
  getMovies = async (page) => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      `https://yts.mx/api/v2/list_movies.json?sort_by=seeds&page=${page}`
    );
    this.setState({
      movies: [...this.state.movies, ...movies],
      isLoading: false,
    });
  };
  render() {
    const { isLoading, movies } = this.state;
    const onMore = () => {
      const page = this.state.page + 1;
      this.setState({
        isLoading: true,
        page: page
      });
      this.getMovies(page);
    };
    return (
      <Page>
        {isLoading && <Loading />}
        <CardBlock>
          {movies.map((movie, i) => {
            return (
              <CardItem
                key={i}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                rating={movie.rating}
              />
            )
          })}
        </CardBlock>
        <Button type="primary" onClick={onMore} block>
          MORE
        </Button>
      </Page>
    );
  }
}

export default Index;
