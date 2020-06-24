import styled from 'styled-components';

export const SearchStyled = styled.form`
   background-color: var(--bg);
   width: 80%;
   padding: .5rem 1rem;
   position: absolute;
   top: 2rem;
   left: 50%;
   margin-left: -40%;
   border-radius: 27px;
   display: flex;

   input {
      width: 100%;
      padding: .5rem;
      border: none;
      outline: none;
      background-color: transparent;
   }

   button {
      &[disabled]{
         background-color: green;
      }
   }

`