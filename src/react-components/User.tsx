import React, { useState, FC, useContext } from 'react';

/* Styles */
import { UserStyled } from './styles/User';
import { FaTwitter, FaGithub, FaMoon, FaRegMoon }  from "react-icons/fa";
import ReactPlaceholder from 'react-placeholder';
import { UserPlaceholder } from './placeholders/User'

/* Components */
import Search from './Search';

/* Hooks */
import { useFetchData } from '../hooks/useFetchData';

/* Context */
import { themeContext } from '../context/themeContext';

/* Redux */
import { useSelector } from 'react-redux';

const User: FC = () => {
   const { toggleTheme, isLight } = useContext<any>(themeContext)
   const { user, query } = useSelector((state: any) => state)
   const { loading } = useFetchData(query);

   return (
      <ReactPlaceholder
         ready={!loading}
         customPlaceholder={<UserPlaceholder />}
      >{
         <UserStyled>
            <div className="header">
               <Search loading={loading} />
               <button className="btn-darkmode" onClick={toggleTheme}>
                  {isLight
                     ? <FaRegMoon size="2rem" color="#2dba4e" />
                     : <FaMoon size="2rem" color="#2dba4e" />
                  }
               </button>
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
                     <FaGithub color={isLight ? '#2b3137' : "white"} size="1.5rem" />
                     <span>{user.login}</span>
                  </a>
               </div>
            </div>
         </UserStyled>}
      </ReactPlaceholder>
   )
}

export default User;
