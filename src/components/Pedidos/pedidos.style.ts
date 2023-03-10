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
@media all and (max-width: 822px ){
   .tabelaPedido tbody tr td{
        display:block;
        text-align: right;
   }
   .tabelaPedido tbody tr td:before{
        content: attr(data-title);
        position: absolute;
        left: 70px;
        display: block;
        font-weight: 700;
        font-size: 1.1em;
   }
   .tabelaPedido thead{
    display:none;
   }
   .tabelaPedido tbody tr{
    margin-bottom: 30px;
    display: block;
    border: 1px solid #dad6eb;
   }
};
@media all and (max-width: 453px ){
    .tabelaPedido tbody tr td{
        
    }
};
  `;