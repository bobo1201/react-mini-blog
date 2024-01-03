import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
    padding: 8px;
    border-radius: 8px;
    border-width: 1px;
    cursor: pointer;
    background-color: #f08c00;
    color: white;
    font-size: 16px;
`

function Button2(props){
    const { name, onClick } = props

    return (
        <MyButton onClick={onClick}>
            {name || "button"}
        </MyButton>
    )
}

export default Button2;