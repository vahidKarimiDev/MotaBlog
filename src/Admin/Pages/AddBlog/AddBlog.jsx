import React from 'react';
import BoxContent from './../../Components/BoxContent/BoxContent';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddBlog = () => {
    return (
        <>
            <BoxContent>
                <h2 className='font-MorabbaBold text-2xl text-zinc-700 border-b-2 border-gray-300 pb-2'>اضافه کردن وبلاگ جدید</h2>

                <div className="flex items-center justify-between gap-5 mt-7">
                    <div className="w-full flex items-start flex-col gap-1">
                        <label className='font-DanaBold text-xl' htmlFor="title">عنوان</label>
                        <input type="text" id='title' className='input rounded-lg py-2.5 px-2' placeholder='عنوان را وارد کنید ...' />
                        <span className='hidden text-sm tracking-tighter -mt-7 mr-1 text-red-500'>لطفا مقدار را پر کنید</span>
                    </div>
                    <div className="w-full flex items-start flex-col gap-1">
                        <label className='font-DanaBold text-xl' htmlFor="title">آدرس اینترنتی</label>
                        <input type="text" id='title' className='input rounded-lg py-2.5 px-2' placeholder='آدرس اینترنتی را وارد کنید ...' />
                    </div>
                </div>

                <div className="">
                    <CKEditor
                        editor={ClassicEditor}
                        config={{
                            language: "fa",
                        }}
                    />
                </div>
            </BoxContent>
        </>
    )
}

export default AddBlog