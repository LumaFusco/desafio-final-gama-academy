import styled from "styled-components";

export const Container = styled.div`

    .context{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        /* height: 72vh; */
        max-width: 1320px;
        padding: 10px; 
        margin: 0 auto;
        margin-top: 70px;
        
    }
    h1{
        color: #00796B;
        font-weight: 600;
        font-size: 36px;
    }
    h4{
        font-size: 18px;
        font-weight: 400;
        max-width: 45%;
        color: #979797;
    }
    .container{
        width: 100%;
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        background-color: #f1f1f1;
        border: none;
        margin: auto;
    }

    .card{
        background-color: #f1f1f1;
        margin: auto;
        margin-bottom: 40px;
        justify-content: center;
        

        & img{
            width: 80%;
            margin: auto;
        }
    }
    ul li{
        background-color: #f1f1f1;
    }
`;