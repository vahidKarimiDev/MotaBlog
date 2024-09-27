import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const BASE_API = import.meta.env.VITE_BASE_API;

const getContactFromServe = createAsyncThunk('contact/getContactFromServe', async () => {
    const res = await fetch(`${BASE_API}/contact`);
    const data = await res.json();
    return data;
})

const createContactToServer = createAsyncThunk('contact/createContactToServer', async (data) => {
    const res = await fetch(`${BASE_API}/contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (res.status === 201) {
        withReactContent(Swal).fire({
            title: "نظر شما با موفقیت ثبت شد :)",
            icon: "success"
        })
        const dataContact = await res.json()
        return dataContact
    } else {
        withReactContent(Swal).fire({
            "title": "مشکلی پیش آمده دوباره امتحان کنید",
            icon: "error",
            text: "دوباره تلاش کنید"
        })
    }
})

const deleteContactFromServer = createAsyncThunk('contact/deleteContactFromServer', async (id) => {
    const res = await fetch(`${BASE_API}/contact/${id}`, {
        method: "DELETE"
    })
    if (res.status === 204) {
        withReactContent(Swal).fire({
            title: "نظر کاربر با موفقیت حذف شد :)",
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

const slice = createSlice({
    name: "contact",
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(getContactFromServe.fulfilled, (state, action) => {
            return action.payload
        });

        builder.addCase(createContactToServer.fulfilled, (state, action) => {
            state.push(action.payload)
        });

        builder.addCase(deleteContactFromServer.fulfilled, (state, action) => {
            return state.filter(contact => contact.id !== action.payload.id)
        });
    }
})

export default slice.reducer
export { getContactFromServe, createContactToServer, deleteContactFromServer }