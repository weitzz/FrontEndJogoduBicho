import styled from 'styled-components';
export const HeaderContainer = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: var(--dark-500);


img{
    width: 300px;
    height: 90px;

}

input[type="search"]{
  //background-color: transparent;
  border: none;
  width: 200px;
  height: 30px;
}
`;
export const WrapperImage = styled.div`
  margin-left: 8%;
  cursor: pointer;

`;


