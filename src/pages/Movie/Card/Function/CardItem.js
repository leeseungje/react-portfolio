import React, { useState } from "react";
import styled from "styled-components";
import { Card, Modal } from "antd";

const CardList = styled.div`
  .ant-card-meta-description  {
    word-wrap: break-word; 
    display: -webkit-box; 
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
  }
`;
const Title = styled.h1`
  font-size: 26px;
  line-height: 28px;
`;
const MovieSummary = styled.p`
  position: relative;
  padding-left: 50px;
`;
const Poster = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Rating = styled.p`
  padding-top: 30px;
  text-align:right;
  margin: 0;
  font-size: 12px;
  strong  {
    color: #4d516d;
    font-size: 20px;
    font-style: italic;
  }
`;

const { Meta } = Card;

function CardItem({poster, summary, title, rating, year, url}) {
  console.log(year)
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => {
    setModalVisible(true);
  };
  const handleOk = (e) => {
    setModalVisible(false);
  };

  const handleCancel = (e) => {
    setModalVisible(false);
  };
  return (
    <CardList>
      <Card
        style={{ width: 230, margin: 10 }}
        hoverable
        cover={
          <img
            alt={title}
            src={poster}
          />
        }
        onClick={showModal}
      >
        <Meta
          title={title}
          description={summary}
        />
      </Card>
      <Modal
        title={`${title} ${year}`}
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <MovieSummary>
          <Poster>
            <img
              alt={title}
              src={poster}
            />
          </Poster>
          {summary}
        </MovieSummary>
        <Rating>
          rating: <strong>{rating}</strong> / 10
        </Rating>
      </Modal>
    </CardList>
  );
}

export default CardItem;
