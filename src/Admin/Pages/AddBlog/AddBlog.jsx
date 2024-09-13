import React, { useEffect, useState } from 'react';
import BoxContent from './../../Components/BoxContent/BoxContent';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import classicEditor from '@ckeditor/ckeditor5-build-classic';
import { useDispatch } from 'react-redux';
import Blogs, { createBlogToServer } from './../../../Redux/Store/Blogs'

const AddBlog = () => {
    const dispatch = useDispatch()

    const [photos, setPhotos] = useState([]);
    const [title, setTitle] = useState('');
    const [miniDesc, setMiniDesc] = useState("")
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [slug, setSlug] = useState('');

    const photosHandler = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setPhotos(preve => [...preve, ...selectedFiles]);
    }

    const submitForm = async () => {
        const formData = new FormData();

        formData.append('title', title);
        formData.append('description', content);
        formData.append('miniDesc', miniDesc);
        formData.append('category_id', 1);
        formData.append('slug', slug);
        formData.append('admin_id', 1);

        photos.forEach((photo, index) => {
            formData.append(`photos[]`, photo)
        });

        console.log(formData);

        dispatch(createBlogToServer(formData))
    }

    return (
        <>
            <BoxContent>
                <h2 className='font-MorabbaBold text-2xl text-zinc-700 border-b-2 border-gray-300 pb-2'>اضافه کردن وبلاگ جدید</h2>

                <div className="flex items-center justify-between gap-5 mt-7">
                    <div className="w-full flex items-start flex-col gap-1">
                        <label className='font-DanaBold text-xl' htmlFor="title">عنوان</label>
                        <input type="text" id='title' className='input rounded-lg py-2.5 px-2' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='عنوان را وارد کنید ...' />
                        <span className='hidden text-sm tracking-tighter -mt-7 mr-1 text-red-500'>لطفا مقدار را پر کنید</span>
                    </div>
                    <div className="w-full flex items-start flex-col gap-1">
                        <label className='font-DanaBold text-xl' htmlFor="title">آدرس اینترنتی</label>
                        <input type="text" id='title' className='input rounded-lg py-2.5 px-2' value={slug} onChange={(e) => setSlug(e.target.value)} placeholder='آدرس اینترنتی را وارد کنید ...' />
                    </div>
                </div>

                <div className="flex items-start justify-start gap-4">

                    <div className="w-full flex items-start flex-col gap-1">
                        <label className='font-DanaBold text-xl' htmlFor="mini">چکیده توضیحات</label>
                        <textarea id='mini' className='input rounded-lg py-2.5 px-2' value={slug} onChange={(e) => setMiniDesc(e.target.value)} placeholder='چکیده توضیحات را وارد کنید ...'></textarea>
                    </div>
                </div>

                <div className="">
                    <CKEditor
                        editor={classicEditor}
                        config={{
                            language: "fa",
                        }}
                        onChange={(evetn, editor) => {
                            const data = editor.getData();
                            setContent(data);
                        }}
                    />
                </div>



                <div className="my-7">
                    <label className='font-DanaBold text-xl' htmlFor="title">تصاویر</label>
                    <div className="grid grid-cols-6 items-center justify-start gap-4 mt-4  ">
                        {
                            photos.length !== 0 && photos.map((photo, i) => (
                                <div key={i} className="bg-white/90 rounded-lg shadow-md overflow-hidden h-48 flex items-center justify-center">
                                    <img src={URL.createObjectURL(photo)} className='w-full h-full object-cover' alt="Photos :))" />
                                </div>
                            ))
                        }
                        <input onChange={photosHandler} type="file" multiple id='photoUplaod' className='hidden' />
                        <label htmlFor='photoUplaod' className="bg-white/90 rounded-lg shadow-md h-48 flex items-center justify-center hover:bg-white transition hover:scale-95 cursor-pointer">
                            <svg className='w-16 h-16 text-gray-400'>
                                <use xlinkHref='#plus'></use>
                            </svg>
                        </label>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-1 mb-7">
                    <label className='font-DanaBold text-xl' htmlFor="title"> دسته بندی </label>
                    <select className='p-2.5 rounded-lg'>
                        <option value="-1">دسته بندی را انتخاب کنید</option>
                    </select>
                </div>
                <div className="flex items-center justify-end gap-4">
                    <button className='bg-redPrimaryColor px-4 py-2 rounded-md font-DanaBold text-white text-lg hover:bg-redPrimaryColor/90 transition'>پیش نویس</button>
                    <button onClick={submitForm} className='bg-green-500 px-4 py-2 rounded-md font-DanaBold text-white text-lg hover:bg-green-600 transition'>ثبت</button>
                </div>


            </BoxContent>
        </>
    )
}

export default AddBlog