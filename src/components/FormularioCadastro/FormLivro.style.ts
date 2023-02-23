import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    text-align: start;
    form {
    min-width: 100%;
    min-height: 69vh;
    padding: 50px;
    }
    .areaForm{
        padding: 20px;
        margin: 10px;
    }
    input{
        margin-left: 90px;
        background-color: #f1f1f1;
        border: none;
        border-bottom: 1px solid #CCC;
        margin-right: 20px;
    }

    .areaFormRadio span{
        margin-left: 120px;
        font-weight: 600;
    }

    .areaFormRadio label{
        margin-top: 40px;
        padding: 40px;
        
        text-align: start;
    }

 

    button{
        margin-top: 50px;
        border: 1px solid #CCC;
        border-radius: 4px;
        margin-left: 200px;
    }
`;