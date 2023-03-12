import styled from "styled-components";

export const Container = styled.div`
  .card {
    background-color: #f1f1f1;
    margin: 10px;
    margin-bottom: 40px;
    border: 1px solid #ccc;

    & img {
      width: 90%;
      margin: auto;
      border-radius: 8px;
    }

    & h5 {
      text-align: center;
      color: #00796b;
      font-weight: 600;
    }
  }
  ul li {
    background-color: #f1f1f1;
    margin: auto;
    text-align: center;
    border: none;
  }
  .container {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    background-color: #f1f1f1;
    border: none;
    margin: 100px auto;
  }

  .links {
    text-align: center;

    &  .link{
      text-decoration: none;
      font-size: 13px;
      color: #FFF;
      padding: 5px 3px;
      border: 1px solid #ccc;
      border-radius: 6px;
      background-color: #00796b;
    }
  }
  .index{
    font-weight: 600;
  }
  @media (max-width: 768px) {
    .container {
      display: grid;
      grid-template-columns: 90%;
      flex-direction: column;
      background-color: #f1f1f1;
      border: none;
      margin: 100px auto;
      justify-content: center;
    }
  }
`;
