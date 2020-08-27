import React from "react";
import styled, { keyframes } from "styled-components";

const loader = keyframes`
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(180deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
const loaderInner = keyframes`
  0% {
    height: 0%;
  }

  25% {
    height: 0%;
  }

  50% {
    height: 100%;
  }

  75% {
    height: 100%;
  }

  100% {
    height: 0%;
  }
`;

const LoadBox = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(36,47,63,.7);
  z-index: 1000;
`;
const Loder = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 30px;
  height: 30px;
  margin: -15px 0 0 -15px;
  border: 4px solid #fff;
  animation: ${loader} 2s infinite ease;
`;
const LoderInner = styled.span`
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: #fff;
  animation: ${loaderInner} 2s infinite ease-in;
`;

function Loading() {
  return (
    <LoadBox>
      <Loder>
        <LoderInner />
      </Loder>
    </LoadBox>
  );
}

export default Loading;
