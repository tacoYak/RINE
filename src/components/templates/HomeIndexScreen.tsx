import React from "react";
import styled from "styled-components";
import CommonHeader from "../organisms/CommonHeader";
import CommonFooter from "../organisms/CommonFooter";
import HomeMain from "../organisms/HomeMain";

type Props = {};

export default (props: Props) => {
  return (
    <Root>
      <Header>
        <CommonHeader type="top" title="ホーム" />
      </Header>
      <Main>
        <HomeMain />
      </Main>
      <Footer>
        <CommonFooter activeIndex={0} />
      </Footer>
    </Root>
  );
};

const Root = styled.div`
  /* Layout */
  display: grid;
  grid-template-rows: 50px 1fr 50px;
  /* Size */
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const Header = styled.header`
  /* Layout */
  grid-row: 1;
  /* Size */
  margin: 0;
  padding: 0;
`;

const Main = styled.main`
  /* Layout */
  grid-row: 2;
  /* Size */
  margin: 0;
  padding: 0;
  overflow-y: scroll;
`;

const Footer = styled.footer`
  /* Layout */
  grid-row: 3;
  /* Size */
  margin: 0;
  padding: 0;
`;
