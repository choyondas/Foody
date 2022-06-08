import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Veggie = () => {

 const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    },[])

    const getVeggie = async () => {
        const check = localStorage.getItem('veggie');

        if (check) {
            setVeggie(JSON.parse(check));
        } else {
               const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15&tags=vegetarian`);
            const data = await api.json();
            localStorage.setItem('veggie', JSON.stringify(data.recipes));
                setVeggie(data.recipes);
     
        }

    }


    return (
        <div>
            <Wrapper>
                        <h3>Veggie Products</h3>

                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    
                    
                        }}>
                        {veggie.map(recipe => {
                            return (
                                <SplideSlide>
                                    <Card>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt="" />
                                        <Gradient></Gradient>
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
    min-height:19rem;
    border-radius:1rem;
    overflow:hidden;
    position: relative;
    
    img{
       border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 90%;
    height: 65%;
    object-fit: cover;
    
    
        

    }
    img:hover{
        box-shadow: 1px 4px 3px 3px #d7d7d7;
    }
    p{
        position: absolute;
    z-index: 2;
    left: 5%;
    bottom: 35%;
    color: white;
    width: 80%;
    text-align: center;
   background: #0000003d;
    border-radius: 1rem;
    padding: 4px;
    font-size: 13px;
`;

const Gradient = styled.div`

z-index:3;
width:100%;
height:100%;
background:linear-gradient(rgba(0, 0,0,0), rgba(0, 0, 0, 0.5));

`
export default Veggie;