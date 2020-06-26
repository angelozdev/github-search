import styled from 'styled-components';

export const SearchStyled = styled.form`
   background-color: var(--bg);
   width: 90%;
   padding: .3rem .7rem .3rem 1rem;
   position: absolute;
   top: 2rem;
   left: 50%;
   margin-left: -45%;
   border-radius: 27px;
   display: flex;
   z-index: 1;

   input {
      width: 100%;
      padding: .5rem;
      border: none;
      outline: none;
      color: var(--color-primary);
      background-color: transparent;
      &[disabled]{
         background-color: gray;
      }
   }

   button {
      border: none;
      outline: none;
      background-color: transparent;
      cursor: pointer;
      &[disabled]{
         background-color: gray;
      }

      svg {
         color: var(--color-primary);
      }
   }

`