import React, { ChangeEvent, useState, FormEvent, useRef } from 'react';

/* styles */
import { SearchStyled } from './styles/Search';
import { FaSearch } from 'react-icons/fa'

/* Redux */
import { useDispatch } from 'react-redux';
import { SET_QUERY } from '../redux/actions'

interface IProps {
   loading: boolean
}

const Search = ({ loading }: IProps) => {
   const [search, setSearch] = useState('');
   const dispatch = useDispatch()
   const el = useRef(null)

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
   }

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      if(search !== ''){
         dispatch({ type: SET_QUERY, payload: search })
         setSearch('')
         el.current.focus()
      }
   }

   return (
      <SearchStyled onSubmit={handleSubmit}>
         <input disabled={loading} onChange={handleChange} value={search} type="text" placeholder="Search..." ref={el} />
         <button disabled={loading} type="submit">
            <FaSearch />
         </button>
      </SearchStyled>
   )
}

export default Search;
