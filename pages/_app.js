import App, { Container } from "next/app";
import PageWrapper from "../components/PageWrapper";

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <PageWrapper>
          <Component />
        </PageWrapper>
      </Container>
    );
  }
}

export default MyApp;
