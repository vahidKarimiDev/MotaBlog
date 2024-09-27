import React, { useEffect, useState } from 'react';
import BoxContent from './../../Components/BoxContent/BoxContent';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import classicEditor from '@ckeditor/ckeditor5-build-classic';
import { useDispatch, useSelector } from 'react-redux';
import { createBlogToServer } from './../../../Redux/Store/Blogs'
import { getCategoryFromServer } from '../../../Redux/Store/Category';
import './AddBlog.css';
import { resizeImage } from '../../../../utils/resizeImage';

const AddBlog = () => {
    const BASE_API = import.meta.env.VITE_BASE_API;

    const categories = useSelector(state => state.category)
    const dispatch = useDispatch()

    const [photos, setPhotos] = useState([]);
    const [title, setTitle] = useState('');
    const [miniDesc, setMiniDesc] = useState("")
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [slug, setSlug] = useState('');

    const photosHandler = async (e) => {
        const selectedFiles = Array.from(e.target.files);

        try {
            const resizedImage = await Promise.all(
                selectedFiles.map(photo => resizeImage(photo, 740, 470, 'webp', 1))
            )
            setPhotos(preve => [...preve, ...resizedImage]);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        dispatch(getCategoryFromServer())
    }, [])

    function uploadAdaptor(loader) {
        return {
            upload: () => {
                return new Promise((resolve, reject) => {
                    const body = new FormData()
                    loader.file.then(file => {
                        body.append("image", file);
                        fetch(`${BASE_API}/upload`, {
                            method: "POST",
                            body: body
                        }).then(res => res.json()).then(data => {
                            resolve({ default: data?.url })
                        }).catch(err => reject(err))
                    })
                })
            }
        }
    }

    function loaderPlugins(editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            return uploadAdaptor(loader)
        }
    }

    const submitForm = async () => {
        const formData = new FormData();

        formData.append('title', title);
        formData.append('description', content);
        formData.append('miniDesc', miniDesc);
        formData.append('category_id', category);
        formData.append('slug', slug.split(" ").join('-'));
        formData.append('admin_id', 1);

        photos.forEach((photo) => {
            formData.append(`photos[]`, photo)
        });

        dispatch(createBlogToServer(formData))
        // setPhotos([])
        // setTitle("")
        // setMiniDesc("")
        // setContent("")
        // setCategory("")
        // setSlug("")
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
                        <textarea id='mini' className='input rounded-lg py-2.5 px-2' onChange={(e) => setMiniDesc(e.target.value)} placeholder='چکیده توضیحات را وارد کنید ...'  >{slug}</textarea>
                    </div>
                </div>

                <div className="prose w-full max-w-none">
                    <CKEditor
                        editor={classicEditor}
                        config={{
                            language: "fa",
                            heading: {
                                options: [
                                    { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                                    { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                                    { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                                    { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                                    { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
                                    { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
                                    { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' },
                                ]
                            },
                            extraPlugins: [loaderPlugins]
                        }}
                        onChange={(event, editor) => {
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
                    <select onChange={e => setCategory(e.target.value)} className='p-2.5 rounded-lg'>
                        <option value="-1" disabled>دسته بندی را انتخاب کنید</option>
                        {
                            categories?.map(category => (
                                <option value={category.id}>{category.title}</option>
                            ))
                        }
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