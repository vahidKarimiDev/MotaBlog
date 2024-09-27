import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const BASE_API = import.meta.env.VITE_BASE_API;

const getCategoryFromServer = createAsyncThunk('category/getCategoryFromServer', async () => {
    const res = await fetch(`${BASE_API}/category`);
    if (res.status === 200) {
        const data = await res.json()
        return data
    }
});

const createCategoryToServer = createAsyncThunk('category/creaetCategoryToServer', async (data) => {
    const res = await fetch(`${BASE_API}/category`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    if (res.status === 201) {
        withReactContent(Swal).fire({
            title: "دسته بندی با موفقیت اضافه شد:)",
            icon: "success",
        })
        const data = await res.json();
        return data
    } else {
        withReactContent(Swal).fire({
            "title": "مشکلی پیش آمده دوباره امتحان کنید",
            icon: "error",
            text: "دوباره تلاش کنید"
        })
    }
})

const deleteCategoryFromServer = createAsyncThunk('category/deleteCategoryFromServer', async (id) => {
    const res = await fetch(`${BASE_API}/category/${id}`, {
        method: "DELETE"
    })
    if (res.status === 204) {
        withReactContent(Swal).fire({
            title: "با موفقیت حذف شد",
            icon: "success"
        })
        return id
    } else {
        withReactContent(Swal).fire({
            "title": "مشکلی پیش آمده دوباره امتحان کنید",
            icon: "error",
            text: "دوباره تلاش کنید"
        })
    }
})


const updateCategoryFromServer = createAsyncThunk('category/updateCategoryFromServer', async ({ title, id }) => {
    const res = await fetch(`${BASE_API}/category/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title
        })
    })
    let data = await res.json()
    console.log(data);



    if (res.status === 200) {
        withReactContent(Swal).fire({
            title: "با موفقیت آپدیت شد :)",
            icon: "success",
        })
        return {
            id,
            title
        }
    } else {
        withReactContent(Swal).fire({
            "title": "مشکلی پیش آمده دوباره امتحان کنید",
            icon: "error",
            text: "دوباره تلاش کنید"
        })
    }

})

const slice = createSlice({
    name: "category",
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(getCategoryFromServer.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(createCategoryToServer.fulfilled, (state, action) => {
            state.push(action.payload)
        })
        builder.addCase(deleteCategoryFromServer.fulfilled, (state, action) => {
            return [...state].filter(category => category.id !== action.payload);
        })
        builder.addCase(updateCategoryFromServer.fulfilled, (state, action) => {
            console.log(action);

            const categoryFind = state.find(category => category.id === action.payload.id)
            categoryFind.title = action.payload.title;
            return state;
        })
    }
})

export default slice.reducer;
export { getCategoryFromServer, createCategoryToServer, deleteCategoryFromServer, updateCategoryFromServer }