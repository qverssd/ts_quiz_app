import styled, { createGlobalStyle } from "styled-components";
import BGImage from "import your image here";

export const GlobalStyle = createGlobalStyle`
 * {
    font: 'Georgia', sans-serif;
    box-sizing: border-box;
 }

 html {
    height: 100%;
 }

 body {
    background-image: url($(BGImage));
    background-size: cover;
    padding: 0 20px;
    margin: 0;
    justify-content: center;
    display: flex;
 }
`;

export const Wrapper = styled.div`
 align-items: center;
 display: flex;
 flex-direction: column;

 > p {
    color: #fff;
 }

 .score {
    font-size: 2rem;
    margin: 0;
    color: #fff;
 }

 h1 {
    font-family: Arial, Helvetica, sans-serif;
    background-size:100%;
    background-clip: text;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 500;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    text-align: center;
    font-size: 70px;
    margin: 20px;
 }

 .start {
    max-width: 250px
 }

 .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d39558;
    border-radius: 15px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    padding: 0 40px;
    margin: 20px 0;
    height: 40px
 }
`;