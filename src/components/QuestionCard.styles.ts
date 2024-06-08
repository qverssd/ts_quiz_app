import styled from 'styled-components';

export const Wrapper = styled.div`
 text-align: center; 
 max-width: 1150px;
 background: #ebfeff;
 border-radius: 10px;
 border: 2px solid #0085a3;
 padding: 15px;
 box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);

 p {
    font-size: 1rem;
 }
`;

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
 transition: all 0.3s ease;
 :hover {
    opacity: 0.7;
 }

 button {
    cursor: pointer;
    user-select: none;
    font-size: 0.7rem;
    margin: 5px 0;
    height: 40px;
    width: 100%;
    background: ${({ correct, userClicked }) =>
      correct
      ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #FF5656, #C16868)'
        : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
    border: 3px solid #ffffff;
    border-radius: 10px;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.3);
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.5);
    color: #fff;
 };
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
};