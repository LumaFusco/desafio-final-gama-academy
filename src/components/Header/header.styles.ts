import  styled  from "styled-components";

export const Container = styled.div`
    margin-top: 15px;


    
.logo-loja a{
    text-decoration: none;
    color: #00796B;
    font-weight: 600;
}

.btn{
    background: #00796B;
    border: none;
}

.link2 a{
    text-decoration: none;
    color: #000;
}

.icon-cart {
    cursor: pointer;
}

@media (max-width: 768px) {
    .dropdown-menu[data-bs-popper]{
        left: -70px;
        top: 40px
    }
};
`;
