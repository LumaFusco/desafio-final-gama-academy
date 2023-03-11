import style from 'styled-components'

export const Container = style.div`
button{
    display: flex;
    text-align: center
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px;
    width: 84.5vmin;
    height: 45px;
    border: none;
    background: #00796B;    
    border-radius: 12px;
    font-size: 22px;

    &[disabled]{
        cursor: not-allowed;
        svg{
            animation: animate 2s infinite;
        }
    }
}

button:hover{
    opacity: 0.8;
    font-size: 21px;
    border: 2px solid #0073;
}
.buttonText{
    color: #fff;
    font-weight: 600;
}
@keyframes animate{
    from{
        transform: rotate(0deg)
    }
    to{
        transform: rotate(360deg)
    }

    @media (max-width: 768px){
        margin: auto
       max-width: 80%;
       input, form, buttonLogin, .inputContainer{
        max-width: 90%;
       }
       .footerForm{
        text-align: center
        margin: auto;
        
}
`;
