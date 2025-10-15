import styled from "styled-components"



export const ContactFormStyled = styled.form`
    width: 100%;
    height: auto;
    background-color: #363a42;
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 10px;
    border: solid;
    border-color: black;
    border-width: 2px;
    color: red;
    
    p {
        margin-top: 5px;
        margin-left: 30px;
        text-align: left;
    }

    button {
        color: ${({ theme }) => theme.colors.button};
        background-color: ${({ theme }) => theme.colors.buttonBackground};
        width: 150px;
        height: 45px;
        border-radius: 5px;
        border-color: ${({ theme }) => theme.colors.button};
        font-size: x-large;
        font-weight: bold;
        margin: 30px;
    }
    `

export const EmailInput = styled.input`
    width: 90%;
    height: 30px;
    margin: 30px;
    margin-bottom: 0px;
    border: solid;
    border-radius: 5px;
    border-color: ${({ theme }) => theme.colors.button};
    border-width: 3px;
    
`

export const MessageInput = styled.textarea`
    width: 90%;
    height: 500px;
    margin: 30px;
    margin-bottom: 0px;
    border: solid;
    border-radius: 5px;
    border-color: ${({ theme }) => theme.colors.button};
    border-width: 3px;
`