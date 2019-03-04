import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.div`

  a{
    margin-right: 40px;
    text-decoration: none;
    color: teal;
    transition: 1s;
    &:hover{
      color: orange;
    }
  }
`

const RenderLink = props => (
      <Link as={`/dp/${props.titleToShow}`} href={`/dynamicPage?title=${props.title}&strapline=${props.strapline}`}>
        <a>{props.titleToShow}</a>
      </Link>
  );

const Nav = () => (
  <StyledNav>
    <RenderLink titleToShow="home" title="home"  strapline="Mauris blandit aliquet elit, eget tincidunt nibh."/>
    <RenderLink titleToShow="about" title="about" strapline="Cras ultricies ligula sed magna dictum porta."/>
    <RenderLink titleToShow="contact" title="contact" strapline="Vestibulum ante ipsum primis in faucibus orci luctus."/>
  </StyledNav>
);
export default Nav;