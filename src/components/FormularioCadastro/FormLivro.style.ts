import styled from "styled-components";

export const Container = styled.div`
   max-width: 1320px;
   height: 100%;
   margin: 100px auto;
`;

export const Form = styled.div`
    form{
        max-height: 100%;
    }
    input{
        margin-bottom: 20px;
        border: none;
        background-color: #F1F1F1;
        border-bottom: 1px solid #CCC;
    }
    label{
        margin-left: 40px;
        margin-top: 10px;
    }

    .areaFormRadio{
        display: flex;
        flex-direction: column;
        margin-left: 0;
    }

    .radio{
        margin-left: 0;
        display: flex;

        p{
            margin-left: 15px;
        }
    }

    button{
        border: 1px solid #CCC;
        border-radius: 4px;
        margin-top: 10px;
    }

    @media (max-width: 768px){
        font-size: 15px;
        max-height: 20vh;
    }

`;