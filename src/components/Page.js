import React from "react";
import { Layout } from "antd";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const { Header, Content, Footer } = Layout;

/**
 * 참고 UI : https://ant.design/components/layout/
 * **/

const HeaderTitle = styled.h1`
  float: left;
  position: relative;
  width: 50px;
  margin: 16px 0 0 0;
  color: #fff;
  font-weight: bold;
  color: #000;
  overflow: hidden;
  font-size: 0;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 35px;
    height: 20px;
    border: 5px solid #fff;
    border-radius: 50px;
  }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 35px;
    border: 5px solid #fff;
    border-radius: 50px;
  }
`;
const NavWrapper = styled.nav`
  float: right;
  height: 100%;
`;
const NavList = styled.ul`
  overflow: hidden;
`;
const NavItem = styled.li`
  float: left;
  padding: 0 20px;
  list-style: none;
  a {
    position: relative;
    display: block;
    height: 100%;
    overflow: hidden;
    &:after {
      content: "";
      position: absolute;
      left: -120%;
      bottom: 0;
      width: 100%;
      height: 5px;
      background: rgba(255, 255, 255, 0.8);
      transition: 0.3s;
    }
    &:hover,
    &.active {
      color: #fff;
      &:after {
        left: 0;
      }
    }
  }
`;

function Page(props) {
  return (
    <Layout className="layout">
      <Header>
        <HeaderTitle>P</HeaderTitle>
        <NavWrapper>
          <NavList>
            <NavItem>
              <NavLink to={"/react-portfolio/movie/card/class"}>
                Movie Card List - Class 방식
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/react-portfolio/movie/card/function"}>
                Movie Card List - Function 방식
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/react-portfolio/movie/table"}>Movie Table 방식</NavLink>
            </NavItem>
          </NavList>
        </NavWrapper>
      </Header>
      <Content style={{ padding: "0 50px" }}>{props.children}</Content>
      <Footer style={{ textAlign: "center" }}>Lee Seungje ©2020 Created</Footer>
    </Layout>
  );
}

export default Page;
