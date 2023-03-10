import  styled  from "styled-components";

export const Container = styled.div`
    margin-top: 15px;


    
.logo-loja a{
    text-decoration: none;
    color: #00796B;
    font-weight: 600;
}

.btn{
    font-size: 15px;
    font-weight: 600;
    background: #00796B;
    border: none;
}
.btn:hover{
    opacity: 0.8;
    font-size: 14px;
    border: 1px solid #0073;
}

.link2 a{
    text-decoration: none;
    color: #000;
}

.icon-cart {
    cursor: pointer;
}

button{
    background: transparent;
    margin-left 2rem;
    border:0;
    transition: transform 0.8s;

    &:hover{
        transform: scale(1.2);
    }
}

@media (max-width: 768px) {
    .dropdown-menu[data-bs-popper]{
        left: -70px;
        top: 40px
    }
};
`;
