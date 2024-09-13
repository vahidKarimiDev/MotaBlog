import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const BASE_API = import.meta.env.VITE_BASE_API;
import axios from "axios";
import swal from "sweetalert";

const getBlogFromServer = createAsyncThunk("blog/getBlogFromServer", async () => {
    const res = await fetch(`${BASE_API}/blog`);

    if (res.status !== 200) {
        swal({
            title: "مشکلی پیش امده دوباره امتحان کنید :(",
            icon: "error",
        })
    }
    const data = await res.json();
    return data
});

const createBlogToServer = createAsyncThunk('blog/createBlogToServer', async (body) => {
    const res = await fetch(`${BASE_API}/blog`, {
        method: "POST",
        body: body
    })
    const data = await res.json()
    console.log(data);


    if (res.status === 201) {
        swal({
            title: "پست جدید با موفقیت ساخته شده :)",
            icon: "success",
        })

        const data = {
            title: body.get("title"),
            description: body.get("description"),
            miniDesc: body.get("miniDesc"),
            category_id: body.get("category_id"),
            slug: body.get("slug"),
            admin_id: body.get("admin_id"),
            "photos": body.get("photos")
        }


        return data
    }
})


const slice = createSlice({
    name: "blog",
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(getBlogFromServer.fulfilled, (state, action) => {
            return action.payload
        });
        builder.addCase(createBlogToServer.fulfilled, (state, action) => {
            state.push(action.payload)
        })
    }
})
export default slice.reducer
export { getBlogFromServer, createBlogToServer }