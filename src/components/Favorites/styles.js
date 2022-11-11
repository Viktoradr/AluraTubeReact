import styled from "styled-components";

export const StyledFavorites = styled.div`
    padding: 32px;
    
    h2 {
        font-size: 16px;
        margin-bottom: 16px;
        text-transform: capitalize;
    }
    section {
        overflow: hidden;
        display: flex;
        flex-direction: row;
        
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 8px;

            img {
                width: 100px;
                height: 100px;
                border-radius: 50%;
            }

            span {
                margin-top: 8px;
                height: 16px;
                font-family: 'Helvetica';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 16px;
            }
        }
    }
`;