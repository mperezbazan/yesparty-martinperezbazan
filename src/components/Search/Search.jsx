import React, {useState} from 'react'
import { styled } from '@mui/material/styles';
import {Button,  InputBase, Box} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import './Search.css'
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: '1em',
      transition: theme.transitions.create('width'),
      width: '100%',
      },
  }));
  
const Search = () => {
    const [searched, setSearched] = useState('');
    const navigate=useNavigate();

    const handleSearch = () => {
    searched ?
        navigate(`.?search=${searched}`)
    :
        navigate(`.`)
            
    }
    const handleChangeSearch = (e) => {
        setSearched(e.target.value);
    }
    const handleKeyDown=(e)=>{
        e.keyCode === 13 && handleSearch()
    }
    return (
        <>
           
            
        <Box className='search-container'>
                <StyledInputBase
                    placeholder="Buscar..."
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={handleChangeSearch}
                    onKeyDown={handleKeyDown}
                />
               
                <Button onClick={()=>{handleSearch()}} sx={{ color:'#839AA8',  }}>
                    <SearchIcon />
                </Button>
        </Box>
   
               
        </>
    )
}

export default Search