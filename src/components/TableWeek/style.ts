import styled from 'styled-components';
export const Wrapper = styled.div`
  margin: 40px auto;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


p{
  padding: 20px;
  font-weight: 600;
  font-size: 1.1rem;
}
`;
export const Table = styled.table`
  margin: 0 auto;
  width: 100%;
  border-collapse: collapse;

  td, th {
  text-align: left;
  padding: 20px;
  font-size: 1rem;
  border-bottom: 1px solid var(--dark-300);
}
th{
  background-color: var(--dark-500);
}
/*
tr:nth-child(even){
  //background-color:var(--dark-300);
  border-bottom: 1px solid var(--dark-300);
}
tr:hover{
 // background-color: var(--green);

}*/

`
