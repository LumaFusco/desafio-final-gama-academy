import styled from 'styled-components'

export const Container = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    text-align: center;
    justify-content: space-around;
    font-family: public sans, Arial, Helvetica, sans-serif;
    border-top: 1px solid #ccc;
   
    
    p {
        padding: 10px;
        color: #212121;
        font-weight: 400;
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
        }
`;