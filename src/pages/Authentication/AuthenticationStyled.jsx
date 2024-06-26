import styled from "styled-components";

export const AuthContainer = styled.div`
  height: 100vh;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    align-items: center;
  }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;

    justify-content: center;
    width: 100%;
    height: 400px;
    padding: 2rem;
    gap: 1rem;

    h2{
        font-size: 2rem;
        text-align: center;
        font-weight: 700;
    }
`
export const ErrorSpan = styled.span`
  background-color: #ffcdcd;
  color: #9e0000;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  border-radius: 7px;
`;