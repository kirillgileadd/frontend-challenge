import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {ICat} from "../../models/ICat";

export const fetchCats = createAsyncThunk(
    'cat/fetchAll',
    async (page: number, thunkAPI) => {
        try {
            const response = await axios.get<ICat[]>('https://api.thecatapi.com/v1/breeds', {
                headers: {
                    "x-api-key": "421af83c-9bed-4fd6-bf0c-3bcb256a9546"
                }, params: {
                    limit: 10,
                    page: page
                }
            })
            return {data: response.data, totalCount: response.headers["pagination-count"]  }
        } catch (e) {
            return thunkAPI.rejectWithValue('Fetching Cats error')
        }
    }
)