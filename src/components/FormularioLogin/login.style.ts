import style from "styled-components"

export const Container = style.div`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    .formLogin {
        width: 0 auto;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    
    .headerLogin{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;
    }

    .headerLogin img{
        border-radius: 5px;
        margin-top: 45px;
        width: 350px;
        height: 60px;
    }

    .headerLogin span{
        padding-top: 20px;
        font-weight: 700;
        font-size: 20px;
    }

    .formLogin form{
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .formLogin form .inputContainer{
        margin-top: 0;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }

    .formLogin form .inputContainer label{
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
    }
    
    .formLogin form .inputContainer input{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 16px;
        width: 520px;
        height: 35px;
        border: none;
        border-radius: 12px;
        margin-bottom: 12px;
    }
    .formLogin .reset p{
        font-weight: 600;
        font-size: 16px;
        line-height:19px;
        color: #000000;
    }
    .formLogin .reset{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3px;
    }

    .formLogin form .inputContainer input:hover{
        border: 1px solid #00896b;
    }

    .formLogin form a{
        color: #000;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        padding: 16px 16px;
    }

    .formLogin form a:hover{
        display: flex;
        color:  #00796B;
        text-decoration: underline;
    }

    .formLogin form .button{
        display: flex;
        text-align: center
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 18px;
        width: 520px;
        height: 45px;
        border: none;
        background: #00796B;
        color: #fff;
        font-weight: 600;
        border-radius: 12px;
        font-size: 22px;
    }

    .formLogin form .button:hover{
        opacity: 0.8;
        font-size: 21px;
        border: 2px solid #0073;
    }

    .formLogin form .footerForm{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3px;
    }

    .formLogin form .footerForm p{
        font-weight: 600;
        font-size: 16px;
        line-height:19px;
        color: #000000;
    }

`;