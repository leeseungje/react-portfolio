import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Tooltip } from "antd";

const Bg = keyframes`
  0% {
    background-position top;
  }
  50% {
    background-position bottom;
  }
  100% {
    background-position top;
  }
`;
const move_gradation = keyframes`
  0% {
    background-position: 50% 0%
  }
  50% {
    background-position: 50% 100%
  }
  100% {
    background-position: 50% 0%
  }
`;
const HomeWrapper = styled.div`
  position: relative;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 100vh;
  position: relative;
  background: linear-gradient(
    45deg,
    #00fcbb,
    #ee03f4,
    #def403,
    #eee,
    #e6aaaa,
    #f46003
  );
  text-align: center;
  padding: 0 2em 5em;
  animation: ${move_gradation} 50s ease infinite;
  background-size: 1200% 1200%;
`;
const HelloTxt = styled.h1`
  position: relative;
  margin: 0;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  font-size: 120px;
  line-height: 120px;
  font-variant: small-caps;
  font-family: "HelveticaNeue-CondensedBold";
  background-image: url("https://unsplash.imgix.net/photo-1422513391413-ddd4f2ce3340?q=75&fm=jpg&s=282e5978de17d6cd2280888d16f06f04");
  background-size: 150%;
  background-attachment: fixed;
  -webkit-animation: ${Bg} 10s ease infinite;
  background-size: cover;
  background-position: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  vertical-align: middle;
  text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.49);
`;
const NavList = styled.nav`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;
const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 0;
  padding: 0;
  display: inline-block;
  a {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    &:hover {
      color: white;
      background: #001529;
      transition: all 0.5s ease;
    }
  }
`;
function Home() {
  return (
    <HomeWrapper>
      <HelloTxt>hello.</HelloTxt>
      <NavList>
        <NavItem>
          <Tooltip
            placement="top"
            title="Class 방식으로 페이지 전환을 만들어 보았습니다."
            arrowPointAtCenter
          >
            <NavLink to={"/react-portfolio/movie/card/class"}>
              Movie Card List - Class 방식
            </NavLink>
          </Tooltip>
        </NavItem>
        <NavItem>
          <Tooltip
            placement="top"
            title="모달창으로 영화 소개를 만들어 보았습니다."
            arrowPointAtCenter
          >
            <NavLink to={"/react-portfolio/movie/card/function"}>
              Movie Card List - Function 방식
            </NavLink>
          </Tooltip>
        </NavItem>
        <NavItem>
          <Tooltip
            placement="top"
            title="테이블 리스트와 페이징 방식으로 영화 소개를 만들어 보았습니다."
            arrowPointAtCenter
          >
            <NavLink to={"/react-portfolio/movie/table"}>Movie Table 방식</NavLink>
          </Tooltip>
        </NavItem>
      </NavList>
    </HomeWrapper>
  );
}

export default Home;
