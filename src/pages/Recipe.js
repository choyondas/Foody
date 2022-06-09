import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useParams } from 'react-router-dom';
const Recipe = () => {
    let params = useParams();
    const [details, setDetails] = useState({});
const [activeTab, setActiveTab] = useState('instructions');
    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailsData = await data.json();
        setDetails(detailsData);
}

    
    
    useEffect(() => {
        fetchDetails();
    },[params.name])
    // console.log(details)
    return (
        <DeatilsWrapper>

            <div>
                <h2>{ details.title}</h2>
                <img src={details.image} alt="" />
            </div>
            <Info>
                <Button className ={activeTab === 'instructions'? 'active' : ''} onClick={()=>setActiveTab('instructions')}>Instructions</Button>
                <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
                {activeTab === 'instructions' ?
                <div><h3>Summary</h3>
                        <h4 dangerouslySetInnerHTML={{ __html: details.summary }}></h4><br />
                        <h3>Instructions</h3>
                    <h4 dangerouslySetInnerHTML={{__html: details.instructions}}></h4>
                </div> :
                <ul>
                    {details.extendedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>{ ingredient.original }</li>
                   ))} 
                </ul>
                    }
            </Info>
        </DeatilsWrapper>
    );
};

const DeatilsWrapper = styled.div`
margin-top:10rem;
margin-bottom:5rem;
display:flex;
h2{
    margin-bottom:2rem;
}
li{
    font-size:1.2rem;
    line-height:1.2rem;
}
.active{
background: linear-gradient(21deg,#647fdc,#13137d );
color:white;
};
h4{
    font-size:1rem;
    font-weight:400;
    text-decoration:none;
    color:black;
}

    
`
const Button = styled.button`
padding: 1rem 2rem;
color:#313131;
background:white;
border:2px solid black;
margin-right:2rem;
margin-bottom:3rem;
font-weight:600;

`
const Info = styled.div`

margin-left: 10rem;
`


export default Recipe;