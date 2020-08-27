import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "./CardItem";
import Page from "../../../../components/Page";
import Loading from "../../../../components/Loading";
import { Button } from "antd";
import styled from "styled-components";

const CardBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 0;
`;
function MovieFunction() {
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // 최초 1회 무조건 실행
    setLoading(true);
    async function getMovies(page) {
      try {
        const response = await axios.get(
          `https://yts.mx/api/v2/list_movies.json?sort_by=seeds&page=${page}`
        );
        return response;
      } catch (error) {
        throw error;
      }
    }
    getMovies(page)
      .then((result) => {
        // 성공시 구현
        setMovies([...movies, ...result.data.data.movies]); // 이전 movies데이터 + 새로운 데이터
        setLoading(false);
      })
      .catch((error) => {
        // 에러시 구현
        setLoading(false);
      });
  }, [page]); // 페이지가 변하는 경우 해당 함수 실행.
  const handleMore = () => {
    setPage(page + 1);
  };
  return (
    <Page>
      {isLoading && <Loading />}
      <div>
        <CardBlock>
          {movies.map((v) => {
            return <CardItem key={v.id} poster={v.medium_cover_image} summary={v.summary} title={v.title} rating={v.rating} year={v.year} url={v.url} />;
          })}
        </CardBlock>
      </div>
      <Button type="primary" onClick={handleMore} block>MORE</Button>
    </Page>
  );
}

export default MovieFunction;
