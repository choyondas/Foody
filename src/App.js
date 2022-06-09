
import Category from "./components/Category";
import Pages from "./pages/Pages";

import { BrowserRouter, Link } from 'react-router-dom';
import Search from "./components/Search";
import styled from 'styled-components';
import {MdRestaurantMenu} from 'react-icons/md'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Nav>
          <MdRestaurantMenu/>
          <Logo to={'/'}>
            Foody-Mama

          </Logo>
        </Nav>
        <Search/>
      <Category/>
    
        <Pages />

        <Footer>
          <p><span>&#169;
</span> copyright 2022 By Choyon Das</p>
        </Footer>
        </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
text-decoration: none;
font-size:1.5rem;

font-weight:400;
font-family:'Lobster Two', cursive;


`
const Nav = styled.div`
padding:4rem 0rem;
display:flex;
justify-content:center;
align-items:center;
svg{
  font-size:2rem;
}
`

const Footer = styled.div`
display:flex;
justify-content:center;
background: linear-gradient(21deg,#647fdc,#13137d );
color:white;
padding:1rem 0;

`

export default App;
