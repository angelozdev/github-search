import React, { ChangeEvent, useState, FormEvent, useRef } from 'react';

/* styles */
import { SearchStyled } from './styles/Search';
import { FaSearch } from 'react-icons/fa'

interface IProps {
   setQuery: (search: string) => void,
   loading: boolean
}

const Search = ({ setQuery, loading }: IProps) => {
   const [search, setSearch] = useState('');
   const el = useRef(null)

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
   }

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      if(search !== ''){
         setQuery(search)
         setSearch('')
         el.current.focus()
      }
   }

   return (
      <SearchStyled onSubmit={handleSubmit}>
         <input onChange={handleChange} value={search} type="text" placeholder="Search..." ref={el} />
         <button disabled={loading} type="submit">
            <FaSearch color="#aaaaaa" />
         </button>
      </SearchStyled>
   )
}

export default Search;
