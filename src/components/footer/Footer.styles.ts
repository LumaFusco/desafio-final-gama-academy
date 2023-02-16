import styled from 'styled-components'

export const Container = styled.footer`
    margin-top: 50px;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    text-align: center;
    justify-content: space-around;
    height: 60px;
    border-top: 1px solid #ccc;
    align-items: center;
    
    p {
        padding: 10px;
        /* color: #212121; */
        color: #00796B;
        font-weight: 400;
        margin: auto;
    }
    span {
        padding: 10px;
        font-size: 10px;
        color: #212121;
        font-weight: 600;
    }
    a {
            padding: 5px;
            font-size: 10px;
            text-decoration: none;
            color: #212121;
            font-weight: 400;
            margin: auto;
        }

        @media (max-width: 768px){
            a {
                font-size: 9px;
            }
        }
`;