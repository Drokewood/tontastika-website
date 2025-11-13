import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ErrorContainer = styled.div`
    padding-top: 150px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.pageBackground};
    color: ${({ theme }) => theme.colors.fontColor};
    min-height: 100vh;
    font-family: 'SageSans', Arial, Helvetica, sans-serif;
`;

export const ErrorTitle = styled.h1`
    font-family: 'PermanentMarker', cursive, sans-serif;
    color: ${({ theme }) => theme.colors.button}; 
    font-size: 48px;
    margin-bottom: 20px;
`;

export const ErrorSubtitle = styled.h2`
    color: ${({ theme }) => theme.colors.fontColor};
    font-size: 24px;
    margin-bottom: 15px;
`;

export const ErrorText = styled.p`
    color: ${({ theme }) => theme.colors.fontColor};
    font-size: 16px;
    margin-bottom: 30px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
`;

export const ErrorLink = styled(Link)`
    color: ${({ theme }) => theme.colors.button};
    font-size: 18px;
    text-decoration: none;
    border: 2px solid ${({ theme }) => theme.colors.button};
    padding: 10px 20px;
    border-radius: 5px;
    display: inline-block;
    margin-top: 20px;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.button};
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;