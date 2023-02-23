import  styled, {css}  from "styled-components";




export const Container = styled.div`
    text-align: center;

    h1 {
        padding: 20px;
        font-weight: 600;
        font-size: 56px;
        width: 755px;
        margin: auto;
        letter-spacing: -2.4px;
        color: #00796B;
        margin-top: 50px;
    }

    h4 {
        color: #979797;
        font-weight: 400;
        font-size: 20px;
        width: 610px;
        margin: auto;
        letter-spacing: -0.4px;
    }

    @media (max-width: 768px){
        h1{
            width: 100%;
            font-size: 30px;
        }
        h4{
            font-size: 15px;
            width: 100%;
        }
    }
    
`;

