import React, { useState } from 'react';

/* Styles */
import { UserStyled } from './styles/User';
import { FaTwitter, FaGithub }  from "react-icons/fa";
import ReactPlaceholder from 'react-placeholder';
import { UserPlaceholder } from './placeholders/User'

/* Components */
import Search from './Search';

/* Hooks */
import { useFetchData } from '../hooks/useFetchData'

const User = () => {
   const [query, setQuery] = useState('reactjs');
   const [user, { loading }] = useFetchData(query, {})
   console.log(user)

   return (
      <ReactPlaceholder
         ready={!loading}
         customPlaceholder={<UserPlaceholder />}
      >{
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
                  <a target="_blank" href={`https://twitter.com/${user.twitter_username}`}>
                     <FaTwitter color="#00aecc" size="1.5rem" />
                     <span>@{user.twitter_username}</span>
                  </a>
                  <a target="_blank" href={`https://github.com/${user.login}`}>
                     <FaGithub color="#2b3137" size="1.5rem" />
                     <span>{user.login}</span>
                  </a>
               </div>
            </div>
         </UserStyled>}
      </ReactPlaceholder>
   )
}

export default User;
