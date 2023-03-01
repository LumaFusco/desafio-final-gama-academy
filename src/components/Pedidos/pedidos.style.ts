import  styled, {css}  from "styled-components";

export const Container = styled.div`

margin-top:20px;
padding-left:50px;
.titulo{
    margin-bottom: 20px;
}
.tabelaPedido{
    max-width: 95%;
    margin-bottom: 250px;
}
.tabelaPedido thead{
    align-items: center;
    text-align: center;
}
.tabelaPedido tbody{
    vertical-align: middle;
    text-align: center;
}
.tabelaPedido tbody input{
    width: 60px;
    height: 30px;
    padding: 5px;
}
input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;

}
.imageBook{
    max-width: 90px;
}
  `;