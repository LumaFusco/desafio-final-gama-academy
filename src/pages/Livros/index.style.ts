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


    .card{
        background-color: #f1f1f1;
       
        margin: 10px;
        margin-bottom: 40px;
        border: 1px solid #ccc;

        & img{
            width: 90%;
            margin: auto;
            border-radius: 8px;
        }

        & h5 {
            text-align: center;
            color: #00796B;
            font-weight: 600;
        }
    }
    ul li{
        background-color: #f1f1f1;
        margin: auto;
        text-align: center;
        border: none;
    }
    .container{
        
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        background-color: #f1f1f1;
        border: none;
        margin: 100px auto; 
    }

    .links{
        text-align: center;

        & a {
            text-decoration: none;
            font-size: 13px;
            color: #000;
            padding: 3px;
            border: 1px solid #ccc;
            border-radius: 6px;
        }
 
    }
`;