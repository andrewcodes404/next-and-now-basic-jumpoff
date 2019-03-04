import GlobalStyle from "../style/globalStyle";
import theme from "../style/theme";

import styled, { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;

  .push-down {
    /* height: 50px; */
    background-color: pink;
    flex: 1;
  }
`;

class PageWrapper extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Normalize />
          <GlobalStyle />
          <Meta />
          <Header />
          <Body>
            {this.props.children}
            <div className="push-down" />
          </Body>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default PageWrapper;
