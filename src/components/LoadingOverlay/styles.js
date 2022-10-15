import styled from 'styled-components';

export const Container = styled.div`
  
`;


export const Transition = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0;
  height: 100vh;
  z-index: 1;
  left: 0;
  top: 0;
  transition: .2s;
  background-color: var(--dark-background);
  animation: init-anim 0.2s linear;
  -webkit-animation-fill-mode: forwards; /* Chrome 16+, Safari 4+ */
  -moz-animation-fill-mode: forwards;    /* FF 5+ */
  -o-animation-fill-mode: forwards;      /* Not implemented yet */
  -ms-animation-fill-mode: forwards;     /* IE 10+ */
  animation-fill-mode: forwards;         /* When the spec is finished */
  gap: 100px;
  @keyframes init-anim {
    0% {
        width: 0;
    }
    100% {
        width: 100vw;
    }
  }
`;

export const Letter = styled.p`
  font-size: 6.5em;
  color: white;
`;

export const Moon = styled.div`
  background-color: #FFBCFD;
  position: relative;
  height: 8em;
  width: 8em;
  border-radius: 50%;
  box-shadow: 0 0 0 0.6em rgba(253, 153, 251, 0.05),
    0 0 0 1.2em rgba(253, 153, 251, 0.05), 0 0 0 1.8em rgba(253, 153, 251, 0.05);
  :after {
    content: "";
    background-color: #FD99FB;
    height: 0.9em;
    width: 0.9em;
    border-radius: 50%;
    position: absolute;
    top: 3.75em;
    left: 1.25em;
    box-shadow: 0.9em -2.1em 0 0.2em #FD99FB, 1.5em -0.3em 0 -0.06em #FD99FB;
  }
`;

export const Orbit = styled.div`
  height: 18.75em;
  width: 18.75em;
  border: 1px solid white;
  border-radius: 50%;
  position: absolute;
  left: -5.2em;
  bottom: -5.2em;
  animation: orbit-spin 2s infinite linear;
  @keyframes orbit-spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const OrbitObject = styled.div`
  position: absolute;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #FD99FB;
  color: white;
  font-size: 3.5em;
  left: 35px;
`;