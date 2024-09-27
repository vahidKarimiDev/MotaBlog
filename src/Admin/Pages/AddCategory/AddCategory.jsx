import React, { useEffect, useState } from 'react'
import BoxContent from '../../Components/BoxContent/BoxContent'
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryFromServer, createCategoryToServer, deleteCategoryFromServer, updateCategoryFromServer } from '../../../Redux/Store/Category';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const AddCategory = () => {
    const categories = useSelector(state => state.category);
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');

    useEffect(() => {
        dispatch(getCategoryFromServer())
    }, [])

    const updateCategory = (id) => {
        withReactContent(Swal).fire({
            title: "نام جدید را وارد کنید :)",
            input: "text",
            confirmButtonText: "تایید",
            "showCancelButton": true,
            cancelButtonText: "خیر",
            inputValue: categories.find(category => category.id === id)?.title,
            preConfirm: () => {
                const value = Swal.getInput()?.value;
                let data = {
                    id,
                    title: value
                }
                dispatch(updateCategoryFromServer(data))
            }
        })
    }

    const deleteCategory = (id) => {
        withReactContent(Swal).fire({
            title: "آیا میخواید این دسته بندی را حذف کنید !؟",
            icon: "warning",
            confirmButtonText: "تایید",
            showCancelButton: true,
            cancelButtonText: "خیر",
        }).then(result => {
            if (result.isConfirmed) {
                dispatch(deleteCategoryFromServer(id))
            }
        })
    }

    const createCategory = (e) => {
        e.preventDefault();
        const newCategoryInfo = {
            title
        }
        dispatch(createCategoryToServer(newCategoryInfo))
        setTitle('')
    }

    return (
        <>
            <BoxContent>
                <h2 className='font-MorabbaBold text-2xl text-zinc-700 border-b-2 border-gray-300 pb-2'>اضافه کردن وبلاگ جدید</h2>

                <div className="flex items-center justify-between gap-5 mt-7">
                    <div className="w-full flex items-start flex-col gap-1">
                        <label className='font-DanaBold text-xl' htmlFor="title">دسته بندی</label>
                        <input type="text" id='title' className='input rounded-lg py-2.5 px-2 mb-0' value={title} onChange={e => setTitle(e.target.value)} placeholder='نام دسته بندی را وارد کنید ...' />
                        <span className='hidden text-sm tracking-tighter -mt-7 mr-1 text-red-500'>لطفا مقدار را پر کنید</span>
                    </div>
                </div>
                <button onClick={createCategory} className='px-2.5 py-1.5 rounded-md bg-green-500 hover:bg-green-600 transition text-white font-DanaBold mt-4'>افزودن</button>


                <div className="mt-7">
                    <table className='table-fixed w-full text-center bg-white p-3 rounded-xl'>
                        <thead>
                            <tr className='child:p-5 font-DanaMedium'>
                                <th>#</th>
                                <th>نام</th>
                                <th>عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories?.map((category, index) => (
                                    <tr className=' border-t border-[#EBEBEB] child:p-5'>
                                        <td className='font-Dana'>{index + 1}</td>
                                        <td className='font-DanaMedium'>{category.title}</td>
                                        <td className='flex items-center justify-center gap-2'>
                                            {
                                                category.disabled ? <>
                                                    <button className='px-2 py-1 rounded-md bg-redPrimaryColor/50 cursor-auto transition text-white font-DanaBold'>حذف</button>

                                                </> : <>
                                                    <button onClick={() => deleteCategory(category.id)} className='px-2 py-1 rounded-md bg-redPrimaryColor hover:bg-red-600 transition text-white font-DanaBold'>حذف</button>
                                                </>
                                            }
                                            <button onClick={() => updateCategory(category.id)} className='px-2 py-1 rounded-md bg-green-500 hover:bg-green-600 transition text-white font-DanaBold'>ویرایش</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>

            </BoxContent>
        </>
    )
}

export default AddCategory