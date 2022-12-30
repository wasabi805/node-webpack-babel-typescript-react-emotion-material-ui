import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUsers = createAsyncThunk( 'usersSlice/getUsers', async( userId, thunkAPI)=>{
    const response = await axios.get('http://localhost:8082/api/users')

    return response.data

})