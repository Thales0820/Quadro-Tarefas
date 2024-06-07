import styled from "styled-components";
import fundo from "../../images/fundo.png";

export const Secao = styled.section`
  background-image: url(${fundo});
  background-size: cover;
  background-position: 100% 90%;
  overflow: hidden;
  max-height: 800px;
`

export const Div1 = styled.div`
  min-height: 1000px;
`

export const Div2 = styled.div`
  width: 660px;
  min-height: 500px;
  box-shadow: 5px 5px 20px 0 rgba(0,0,0,0.4);
  margin: 100px auto 60px;
  text-align: center;
  display: flex;
  background-color: #fff;
  border-radius: 50px;
`
export const Div3 = styled.div`
  padding: 0 30px 30px;
  flex: 1;

  h2 {
    font-size: 40px;
    margin: 26px auto 0;
    font-family: sans-serif;
  }

  .opcao {
    text-align: center;
    padding: 10px 30px;
    border-radius: 50px;
    color: var(--black);
    margin: 1px 0;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
  }

`

export const Icone = styled.span`
  width: 100px;
  height: 100px;
  box-shadow: 5px -10px 20px 0 rgba(0,0,0,0.4);
  margin: -54px auto 0;
  padding: 20px;
  background-color: var(--black);
  display: block;
  border-radius: 50%;

  img {
    object-fit: contain;
    width: 80%;
    height: 100%;
  }
`

export const DivForm = styled.div`
  width: 570px;
  margin: 35px auto 0;

  form {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    margin-left: -10px;
  }

  div {
    width: 90%;
    text-align: start;
    margin-bottom: 15px;
    margin-left: 30px;
    margin-right: 70px;
  }

  label {
    font-size: 1.125rem;
    margin-left: 5px;
    color: #b3b3b3;
    font-family: sans-serif;
  }

  input {
    font-size: 1.125rem;
    border-color: #e5e5e5;
    border-style: solid;
    background-color: #e5e5e5;
    width: 100%;
    padding: 10px 12px;
    border-radius: 50px;
    border-width: 10px;


  }

  input::placeholder {
    color: #b3b3b3;
    font-family: sans-serif;
  }
`

export const Botao = styled.button`
    border: 0;
    padding: 27px;
    border-radius: 50px;
    width: 90%;
    color: #eeeeee;
    background-color: var(--grey);
    font-family: sans-serif;
    font-weight: 700;
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: .2rem;
    margin-left: 30px;
    margin-bottom: 30px;

  &:hover {
    background-color: var(--black);
  }
`
