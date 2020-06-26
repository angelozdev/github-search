import styled from 'styled-components';

export const UserStyled = styled.div`
   width: 100%;
   min-height: 100vh;
   margin: 0 auto;
   background-color: var(--bg);

   .header {
      width : 100%;
      height: 200px;
      margin : 0;
      position: relative;
      background-color: var(--color-primary-light);
      background-image: radial-gradient(white 15%, transparent 16%),
      radial-gradient(white 15%, transparent 16%);
      background-size: 60px 60px;
      background-position: 0 0, 30px 30px;

      & .btn-darkmode {
         cursor: pointer;
         position: absolute;
         bottom: 20px;
         margin-right: -5rem;
         right: 25%;
         z-index: 2;
         border: 3px solid var(--color-green);
         outline: none;
         border-radius: 50%;
         padding: .5rem;
         background-color: var(--bg);
      }
   }

   .body {
      width: 100%;
      position: relative;
      padding: 0 1rem;

      & figure {
         margin: 0 auto;
         width : 200px;
         height: 200px;
         position: relative;
         top : 0;
         left: 50%;
         margin-top: -100px;
         margin-left: -100px;

         & img {
            width : 100%;
            height: 100%;
            border-radius: 50%;
            box-shadow: 0 10px 10px 2px rgba(0, 0, 0, 0.2);
            object-fit: cover;
            background-color: #eee;
            padding: .5rem;
         }
      }
   }

   .title {
      text-align: center;

      & .name {
         color: var(--color-primary);
         font-size: 2rem;
         text-transform: uppercase;
         margin-bottom: .7rem;
      }

      & .profession {
         color: var(--color-green);
         font-size: .9rem;
         margin: .7rem;
      }

      & a {
         color: var(--color-green);
         font-weight: lighter;
         opacity: .7;
      }
   }

   .details {
      display: flex;
      justify-content: space-around;
      margin: 1rem 0;

      & p {
         display: flex;
         flex-direction: column;
         align-items: center;
         font-weight: bold;

         & span:first-of-type {
            color: var(--color-primary);
            font-size: 2rem;
         }

         & span:last-of-type {
            color: var(--color-green);
            font-size: .9rem;
         }
      }
   }

   .social {
      display: flex;
      justify-content: space-around;
      a {
         display: flex;
         align-items: center;
         color: var(--color-primary);
         text-decoration: none;
      }
      svg {
         margin: 1rem .2rem 1rem 0;
      }
   }
`