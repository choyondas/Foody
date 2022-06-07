import React, { useEffect, useState } from 'react';

const Popular = () => {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    },[])

    const getPopular = () => {
        // const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        // const data = await api.json();
        // setPopular(data.recipes);
        fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5`)
            .then(res => res.json())
        .then(data=>setPopular(data.recipes));

    }




    return (
        <div>
            {popular.map(recipe => {
                return (
                    <div key ={recipe.id}>
                        <p>{ recipe.title }</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Popular;