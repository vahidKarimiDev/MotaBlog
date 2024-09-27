import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { retry } from "@reduxjs/toolkit/query";
const BASE_API = import.meta.env.VITE_BASE_API;
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { effectTarget } from "swiper/effect-utils";

const getBlogFromServer = createAsyncThunk("blog/getBlogFromServer", async () => {
    const res = await fetch(`${BASE_API}/blog`);
    const data = await res.json();
    return data
});

const createBlogToServer = createAsyncThunk('blog/createBlogToServer', async (body) => {
    const res = await fetch(`${BASE_API}/blog`, {
        method: "POST",
        body: body
    })
    const data = await res.json()

    if (res.status === 201) {
        withReactContent(Swal).fire({
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

const findBlogWithSlug = createAsyncThunk('blog/findBlogWithSlug', async (slug) => {
    const res = await fetch(`${BASE_API}/blog/${slug}`);
    if (res.status === 200) {
        const data = await res.json();
        return data;
    }
})

const deleteBlogFromServer = createAsyncThunk('blog/deleteBlogFromServer', async id => {
    const res = await fetch(`${BASE_API}/blog/${id}`, {
        method: "DELETE",
    })
    if (res.status === 204) {
        withReactContent(Swal).fire({
            title: "با موفقیت حذف شد",
            icon: "success",
        })
        return id
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
        builder.addCase(deleteBlogFromServer.fulfilled, (state, action) => {
            state.filter(blog => blog.id !== action.payload)
        })
    }
})
export default slice.reducer
export { getBlogFromServer, createBlogToServer, findBlogWithSlug, deleteBlogFromServer }

/* HTML: <div class="loader"></div> */
