import React, { useState } from "react"
import { TextField, IconButton, InputAdornment } from "@mui/material"
import { Search } from "@mui/icons-material"

import { SearchForm } from "./styles"

const SearchBar = ({ label = 'Search', onChange, onSubmit, ...props }) => {
  const [searchValue, setSearchValue] = useState(props.value || '')

  const handleChange = (event) => {
    setSearchValue(event.target.value)
    onChange(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    onSubmit(searchValue)
  }

  return (
    <SearchForm onSubmit={handleSearch} {...props}>
      <TextField
        sx={{ width: "100%", position: 'relative' }}
        label={label}
        variant="outlined"
        value={searchValue}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <Search />
              </IconButton>
            </InputAdornment>
          )
        }}
      />

    </SearchForm>
  )
}

export default SearchBar;
