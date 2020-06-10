import React from 'react';

// Material UI
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
// Icons
import SearchIcon from '@material-ui/icons/Search';

const SearchBarBasic = (props) =>{
    return(<div className='searchbar_basic_holder'>
       <form>
           <TextField label={props.label}
            className='searchbar_basic'
            InputProps={{
                startAdornment:(
                    <InputAdornment position='start'>
                        <SearchIcon/>
                    </InputAdornment>
                )
            }}
            disabled
           />

           
       </form>
    </div>);
}

export default SearchBarBasic;