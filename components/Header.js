import Nav from "./Nav";
import styled from "styled-components"

const StyledHeader = styled.div`
    background-color: white;

    .header-content{
        width: 90%;
        margin: 0 auto;
        max-width: 1200px;
        padding: 2rem 0;
   
     
    }
`

const Header = () => (
    <StyledHeader>

        <div className="header-content">
        <h1>andrewcodes404</h1>
        <Nav />
        </div>

    </StyledHeader>
);

export default Header;