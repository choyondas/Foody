import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Styled from 'styled-components';
const Searched = () => {

    const [search, setSearch] = useState([]);
    let params = useParams();


    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json();
        setSearch(recipes.results)
    };

    useEffect(() => {
        getSearched(params.search)
    },[params.search])

    return (
         <Grid>
            {
                search.map((item) => {
                    return (
                        <Card key={item.id}>
                            <img src={item.image} alt="" />
                            <h4>{item.title.slice(0, 30)}</h4>
                            
                    </Card>
                )
            })}
        </Grid>
    );
};


const Grid = Styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
`
const Card = Styled.div`
img{
    width:100%;
    border-radius:2rem;
}
a{
    text-decoration:none;
}
h4  {
    text-align:center;
    padding:1rem;
}

`
export default Searched;