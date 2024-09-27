import React, { useEffect, useState } from 'react';
import BoxContent from './../../Components/BoxContent/BoxContent'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactFromServer, getContactFromServe } from '../../../Redux/Store/Contact';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const Contact = () => {
    const contacts = useSelector(state => state.contact);
    const dispatch = useDispatch();
    const [change, setChange] = useState(false)
    console.log(contacts);
    

    useEffect(() => {
        dispatch(getContactFromServe())
    }, [change])

    const showTextContact = text => {
        withReactContent(Swal).fire(text)
    }


    const deleteContactHandler = id => {
        dispatch(deleteContactFromServer(id));
        setChange(prev => !prev)
    }


    return (
        <>
            <BoxContent>
                <h2 className='font-MorabbaBold text-2xl text-zinc-700 border-b-2 border-gray-300 pb-2'>ارتباط با ما </h2>

                <div className="overflow-x-auto w-full">
                    <table className="table-fixed w-full text-center bg-white ">
                        {/* head */}
                        <thead >
                            <tr className='child:p-4 text-zinc-700'>
                                <th>#</th>
                                <th>نام</th>
                                <th>ایمیل</th>
                                <th>موضوع</th>
                                <th>رویداد ها</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.length > 0 ? contacts?.map((contact, index) => (
                                    <tr className='child:p-4 border-t border-zinc-300'>
                                        <th>{index + 1}</th>
                                        <td>{contact.userName}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.subject}</td>
                                        <td>
                                            <button className='backGround-primary rounded-md px-2  py-1' onClick={() => showTextContact(contact.text)}>مشاهد</button>
                                            <button className='bg-red-500 rounded-md px-2 mr-2 py-1 text-white' onClick={() => deleteContactHandler(contact.id)}>حذف</button>
                                        </td>
                                    </tr>
                                )) : <><p className='flex items-center justify-center'>هنوز کاربر پیام نداده</p></>
                            }

                        </tbody>
                    </table>
                </div>
            </BoxContent>
        </>
    )
}

export default Contact