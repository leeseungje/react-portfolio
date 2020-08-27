import React, { useEffect, useState } from "react";
import axios from "axios";
import Page from "../../../components/Page";
import Loading from "../../../components/Loading";
import styled from "styled-components";
import { Table, Tag } from "antd";

const Image = styled.p`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;
const PAGE_SIZE = 10; // 기본 테이블 페이지 사이즈
const columns = [
  {
    title: "title",
    dataIndex: "title", // 데이터의 object값이랑 같아야함...
  },
  {
    title: "year",
    dataIndex: "year",
  },
  {
    title: "genres",
    dataIndex: "genres",
    render: (genres) => (
      <span>
        {genres &&
          genres.map((genre) => {
            let color = genre.length > 5 ? "orange" : "green";
            if (genre === "Comedy") {
              color = "geekblue";
            } else if (genre === "Documentary") {
              color = "lime";
            } else if (genre === "Action") {
              color = "magenta";
            }
            return (
              <Tag color={color} key={genre} className="my-tag">
                {genre.toUpperCase()}
              </Tag>
            );
          })}
      </span>
    ),
  },
  {
    title: "rating",
    dataIndex: "rating",
  },
  {
    title: "poster",
    dataIndex: "small_cover_image",
    render: (small_cover_image) => (
      <Image>
        <img src={small_cover_image} alt="" /> // alt 값 title은 어떻게 전달
        하나요..ㅠ
      </Image>
    ),
  },
];

function MovieTable() {
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // 최초 1회 무조건 실행
    setLoading(true);
    async function getMovies(page) {
      try {
        const response = await axios.get(
          `https://yts.mx/api/v2/list_movies.json?sort_by=seeds&page=${page}&limit=${PAGE_SIZE}`
        );
        return response;
      } catch (error) {
        throw error;
      }
    }
    getMovies(page)
      .then((result) => {
        // 성공시 구현
        setTotal(Math.ceil(result.data.data.movie_count / PAGE_SIZE)); // 전체 페이지 구현 : 전체카운트에서 페이지 사이즈 나눈값의 올림 값 계산
        setMovies(result.data.data.movies); // 이전 movies데이터 + 새로운 데이터
        setLoading(false);
      })
      .catch((error) => {
        // 에러시 구현
        setLoading(false);
      });
  }, [page]); // 페이지가 변하는 경우 해당 함수 실행.

  const pagination = {
    total: total,
    current: page,
    onChange: (page, pageSize) => {
      console.log("page", page);
      setPage(page);
    },
  };
  return (
    <Page>
      {isLoading && <Loading />}
      <Table columns={columns} dataSource={movies} pagination={pagination} />
    </Page>
  );
}

export default MovieTable;
