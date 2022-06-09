import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Search = () => {


    const [input, setInput] = useState('');

    const Navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        Navigate('/searched/' + input);
        e.target.value = '';
}

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch/>
                <input onChange={(e) => 
                    setInput(e.target.value)
                } type="text"  value={input} />
            </div>
        </FormStyle>
    );
};

const FormStyle = styled.form`
margin:0rem 20rem;
position:relative;


div{
width:100%;
position:relative;
}
input{
    border:none;
    background: linear-gradient(21deg,#647fdc,#13137d );
    font-size:1.5rem;
    color:white;
        padding: 0.8rem 12rem;

    border:none;
    border-radius:1rem;
    outline:none;
    width:100%;
    font-size:1rem;
}
svg{
    position:absolute;
    top:50%;
    left:0%;
    transform:translate(100%, -50%);
    color:white;
}

`

export default Search;