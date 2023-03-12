import { useState } from "react";
import styled from "styled-components";
import { LivroID } from "../../Services/MainApi/livroPorID";




type ButtonProps = {
    livroId: string;
    className?: string;
    disabled?: boolean;
  };

  const StyledButton = styled.button<{ loading: boolean }>`
  background-color: ${props => props.loading ? "#00796b" : "#00796b"};
  color: white;
  margin: 0;
  font-size: 13px;
  padding: 3px 3px;
  margin-right: 5px;

  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;



  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
  
  export const LivroButton: React.FC<ButtonProps> = ({
    livroId,
  className = "",
  disabled = false,
  })=>{
    const [loading, setLoading] = useState(false);
  
    const handleClick = async () => {
      setLoading(true);
  
      try {
        const response = await LivroID(
          `${livroId}`
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
  
      setLoading(false);
    };
  
    return (
        <StyledButton
        className={className}
        onClick={handleClick}
        disabled={disabled || loading}
        loading={loading}
      >
        {loading ? "Buscando..." : "Ver Livro"}
      </StyledButton>
    );
  };
  