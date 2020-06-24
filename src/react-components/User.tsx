import React, { useState } from 'react';

/* Styles */
import { UserStyled } from './styles/User';
import { FaTwitter, FaGithub, FaTruckLoading }  from "react-icons/fa";

/* Components */
import Search from './Search';

/* Hooks */
import { useFetchData } from '../hooks/useFetchData'

const User = () => {
   const [query, setQuery] = useState('angelozam17');
   const [user, { loading }] = useFetchData(query, {})
   console.log(user)
   return !user ? <h1>Loading</h1> :(
      <UserStyled>
         <div className="header">
            <Search setQuery={setQuery} loading={loading} />
            <span></span>
         </div>

         <div className="body">
            <figure>
               <img src={user.avatar_url} alt={`avatar ${user.name}`}/>
            </figure>
            <div className="title">
               <h2 className="name">{user.name}</h2>
               <p className="profession">{user.bio}</p>
               <a target="_blank" href={user.blog}>{user.blog}</a>
            </div>
            <div className="details">
               <p>
                  <span>{user.public_repos}</span>
                  <span>Repos</span>
               </p>
               <p>
                  <span>{user.followers}</span>
                  <span>Followers</span>
               </p>
               <p>
                  <span>{user.following}</span>
                  <span>Following</span>
               </p>
            </div>
            <div className="social">
               <FaTwitter color="#00aecc" size="2rem" />
               <FaGithub color="#2b3137" size="2rem" />
            </div>
         </div>
      </UserStyled>
   )
}

export default User;
