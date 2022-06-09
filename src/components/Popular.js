import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { Link } from 'react-router-dom';
const Popular = () => {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    },[])

    const getPopular = async () => {
        const check = localStorage.getItem('popular');

        if (check) {
            setPopular(JSON.parse(check));
        } else {
               const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15`);
            const data = await api.json();
            localStorage.setItem('popular', JSON.stringify(data.recipes));
                setPopular(data.recipes);
     
        }
        





     

    }




    return (
        <div>
            
               
                    <Wrapper>
                        <h3>Trending Products</h3>

                <Splide options={{
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    
                    
                        }}>
                        {popular.map(recipe => {
                            return (
                                <SplideSlide>
                                    <Card>
                                        <Link to={'/recipe/'+ recipe.id}>
                                        <p>{recipe.title.slice(0, 30)}</p>
                                        <img src={recipe.image} alt="" />
                                            <Gradient></Gradient>
                                            </Link>
                                    </Card>
                                    </SplideSlide>
                            );
                        })}
                            </Splide>
                    </Wrapper>   
        </div>
    );
};




const Wrapper = styled.div`
    margin:4rem ;

`
const Card = styled.div`
    min-height:25rem;
    border-radius:2rem;
    overflow:hidden;
    position: relative;
    
    img{
            border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 90%;
    height: 68%;
    object-fit: cover;
        
        

    }
    p{
  position: absolute;
    z-index: 2;
    left: 50%;
    bottom: 14%;
    transform: translate(-57%,0%);
    width: 72%;
    text-align: center;
    border-radius: 2rem;
    padding: 17px;
`;

const Gradient = styled.div`

z-index:3;
width:100%;
height:100%;
background:linear-gradient(rgba(0, 0,0,0), rgba(0, 0, 0, 0.5));

`
export default Popular;