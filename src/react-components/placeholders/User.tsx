import React from 'react'
import { RoundShape, RectShape, text } from 'react-placeholder/lib/placeholders';
import 'react-placeholder/lib/reactPlaceholder.css';

export const UserPlaceholder = (): JSX.Element => {
   return (
      <div
         style={{
            width: '100%',
            maxWidth: '425px',
            margin: '0 auto',
            height: '100vh',
            position: 'relative'
         }}
      >
         <RectShape className="show-loading-animation" color="#E0E0E0" style={{width: '100%', height: "200px"}} />
         <RoundShape color="#d8d8d8"
            style={{
               width: '200px',
               height: "200px",
               position: 'absolute',
               top: '0',
               left: '50%',
               marginTop: '100px',
               marginLeft: '-100px',
            }}
         />
         <RectShape
            className="show-loading-animation"
            color="#E0E0E0"
            style={{
               width: '70%',
               height: '40px',
               marginTop: '110px',
               marginRight: 'auto',
               marginLeft: 'auto'
            }}
         />
         <RectShape
            className="show-loading-animation"
            color="#E0E0E0"
            style={{
               width: '90%',
               height: '80px',
               marginTop: '10px',
               marginRight: 'auto',
               marginLeft: 'auto'
            }}
         />
      </div>
   )
}