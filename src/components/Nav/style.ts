import styled from 'styled-components'
 export const List = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  background-color: var(--dark-300);
  width:100%;
  height: 60px;
  justify-content: center;
  a{
    display: flex;
    flex-direction: row;
    padding: 20px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: background-color 0.6s;
    &:active,&:hover{
      background-color: var( --dark-900);
  }
  }
 `;



