import React from 'react';
import { FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import {AiOutlineHome} from 'react-icons/ai'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const Category = () => {
    return (
        <List>
            <SLink to ={'/'}>
                <AiOutlineHome />
                <h4>Home</h4>
            </SLink >
            <SLink to ={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink >
            <SLink  to ={'/cuisine/American'}>
                <FaHamburger />
                <h4>American</h4>
            </SLink >
            <SLink  to ={'/cuisine/Thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink >
            <SLink  to ={'/cuisine/Chinese'}>
                <GiChopsticks />
                <h4>Chinese</h4>
            </SLink >
        </List>
    );
};


const List = styled.div`

display:flex;
justify-content:center;
margin:2rem 0rem;

`
const SLink = styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right:2rem;
text-decoration:none;
background: linear-gradient(21deg,#647fdc,#13137d );
width:6rem;
height:6rem;
cursor:pointer;
transform:scale(0.8);

h4{
    color:white;
    font-size:0.8rem;
}
svg{
    color:white;
    font-size:2rem;
}

&.active{
    background:linear-gradient(to right, #f27121, #e94050);

    svg{
        color:white;
    }
}
`

export default Category;