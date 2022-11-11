import styled from "styled-components";

export const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1};
    
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px;
        gap: 16px;
    }
`;
export const Banner = styled.div`
    height: 230px;
    background-image: url(${({ bg }) => bg});
                /* backgroundRepeat: "no-repeat",
                backgroundSize: "cover", */
`;
export const Avatar = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`;
