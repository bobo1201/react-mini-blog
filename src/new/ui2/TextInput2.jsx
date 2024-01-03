import React from "react";
import styled from "styled-components";

const TextareaInput = styled.textarea`
    padding: 8px;
    border-radius: 8px;
    border-width: 1px;
    font-size: 16px;
    font-family: "맑은 고딕";
`

function TextInput2(props){
    const { value, onChangeText } = props;

    return (
        <TextareaInput value={value} onChange={onChangeText}>
        </TextareaInput>
    )
}

export default TextInput2;