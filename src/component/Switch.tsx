import React from "react";
import styled from 'styled-components';

const SwitchButton = styled.button`
  position: fixed;
  right: var(--margin);
  top: var(--margin);
  cursor: pointer;

  > span {
    filter: invert(var(--invert-dark))
  }
  > span:last-child {
    filter: invert(var(--invert-light))
  }
`

const toggleClass = () => {
  const d = document.querySelector('html')
  d?.classList.toggle('light')
}
export const Switch: React.FC = () => {
  return (
    <SwitchButton onClick={toggleClass}>
      <span>🌙</span> &lt;=&gt; <span>🌻</span>
    </SwitchButton>
  );
};
