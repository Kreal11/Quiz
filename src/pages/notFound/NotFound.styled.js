import styled from "styled-components";
import notFoundImg from "../../assets/images/404/404.png";

export const NotFoundWrapper = styled.div`
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("${notFoundImg}");
  position: relative;

  h2 {
    position: absolute;
    top: 60px;
    text-align: left;
    max-width: 100px;
  }

  button {
    position: absolute;
    top: 200px;
    left: 150px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: var(--accent-color);
    border-radius: 100px;
  }
`;
