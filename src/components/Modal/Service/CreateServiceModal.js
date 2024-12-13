import { useContext, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';

import { IoArrowBack } from "react-icons/io5";
import { VscLoading } from "react-icons/vsc";
import { RiDraftLine } from "react-icons/ri";

import Button from '../../Button';
import { AuthContext } from '../../../context/AuthContext';
import SearchUserResult from '../../Popper/Menu/SearchUserResult';
import formateDDMMYYYY from '../../../helper/formateDDMMYYYY';


function CreateServiceModal({ toggleIsShowCreateService }) {
    const { userId } = useContext(AuthContext)
    const [images, setImages] = useState()
    const [searchedUsers, setSearchedUsers] = useState([])
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        Id: "0",
        ServiceName: "",
        ServiceGroup: "",
        ServiceUnit: "",
        CreatedAt: formateDDMMYYYY(new Date()),
    });
    const [isLoadingSubmit, setIsLoadingSubmit] = useState(false)
    const editorRef = useRef(null);

    const handleChange = (e) => {
        if (e.target.name === 'ImageFile' && e.target.files[0].size > 0) {
            setFormData({ ...formData, ImageFile: e.target.files[0] }) //URL.createObjectURL(e.target.files[0]) tạo local img preview blog://
            setImages(URL.createObjectURL(e.target.files[0]))
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoadingSubmit(true)

        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/Service/Create`, formDataToSend);
            setIsLoadingSubmit(false)
            toggleIsShowCreateService();
        } catch (error) {
            console.log(error);
            setIsLoadingSubmit(false)
        }
    };


    const closeModal = (e) => {
        console.log(e.target);
        console.log(e.currentTarget);
        if (e.target === e.currentTarget) {
            toggleIsShowCreateService();
        }
    }


    return createPortal(
        <div className="relative">
            {/* Wrapper Disable */}
            <div onClick={closeModal} className="fixed h-[100vh] inset-0 bg-gray-500/75 z-20">
                <form id='createPostForm' className="absolute inset-x-2 md:inset-x-auto top-1/2 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 flex justify-center items-center inset-0 z-20">
                    <div className="overflow-auto overscroll-y-contain h-[80vh] bg-white rounded-xl">
                        <div className="relative px-4 md:px-12 py-4">
                            <div
                                className="back-action w-full z-10 flex flex-col md:flex-row justify-between md:items-center gap-2 sticky top-0 py-2 bg-white "
                            >
                                <button onClick={toggleIsShowCreateService} className="flex items-center gap-2">
                                    <IoArrowBack />
                                    <h2 className="text-base text-gray-700 leading-9">Trở về</h2>
                                </button>

                                <div className="container-action flex items-center gap-2">
                                    {isLoadingSubmit ? (
                                        <Button
                                            className="px-4 w-full opacity-70" type='primary'
                                            onClick={handleSubmit}
                                        >
                                            <VscLoading className='animate-spin text-lg' />
                                            <span></span>
                                        </Button>
                                    ) : (
                                        <Button
                                            className="px-4 w-full" type='primary'
                                            onClick={handleSubmit}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>Thêm dịch vụ</span>
                                        </Button>
                                    )}
                                </div>
                            </div>
                            <div className="border-b border-gray-900/10 pb-12 mt-4">
                                <h2 className="text-base font-normal leading-7 text-gray-900">Thêm dịch vụ mới</h2>
                                <div className='flex flex-col mt-8 gap-6'>
                                    <div className='grid grid-cols-4 gap-6'>
                                        <div className='flex flex-col gap-2 col-span-4'>
                                            <label htmlFor='topic'
                                                   className='text-sm font-medium text-gray-900 leading-6'>Tên
                                                dịch vụ</label>
                                            <input
                                                type='text'
                                                id='ServiceName'
                                                name='ServiceName'
                                                className='py-1.5 text-sm font-medium leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md p-2'
                                                placeholder={'Nhập tên dịch vụ'}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className='grid grid-cols-2 gap-6'>
                                        <div className='flex flex-1 flex-col gap-2'>
                                            <label htmlFor='ServiceGroup'
                                                   className='text-sm font-medium text-gray-900 leading-6'>Nhóm</label>
                                            <input
                                                type='text'
                                                id='ServiceGroup'
                                                name='ServiceGroup'
                                                className='py-1.5 text-sm font-medium leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md p-2'
                                                placeholder={'Nhập nhóm dịch vụ'}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <label htmlFor='topic'
                                                   className='text-sm font-medium text-gray-900 leading-6'>Đơn
                                                vị</label>
                                            <input
                                                type='text'
                                                id='ServiceUnit'
                                                name='ServiceUnit'
                                                className='py-1.5 text-sm font-medium leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md p-2'
                                                placeholder={'Nhập đơn vị'}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
}

export default CreateServiceModal;