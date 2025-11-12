import styled from "styled-components"

export const StyledSocialIcons = styled.div`
    align-items: center;
    justify-content: center;

    a {
        border: 1px solid ${({ theme }) => theme.colors.fontColor};
        border-radius: 50%;
        color: ${({ theme }) => theme.colors.fontColor};
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        height: 40px;
        width: 40px;
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`