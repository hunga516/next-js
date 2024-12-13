import { useContext, useEffect, useRef, useState } from 'react';
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
import PreviewBlogModal from './PreviewBlogModal';


function CreateBlogModal({ toggleIsShowCreateBlog }) {
    const [isLoadingSubmit, setIsLoadingSubmit] = useState(false)
    const editorRef = useRef(null);
    const { userId } = useContext(AuthContext)
    const [images, setImages] = useState()
    const [isShowPreviewBlogModal, setIsShowPreviewBlogModal] = useState(false);
    const [searchedUsers, setSearchedUsers] = useState([])
    const [errors, setErrors] = useState({});
    const [formPreview, setFormPreview] = useState({
        id: "0",
        title: "",
        category: "",
        createdAt: formateDDMMYYYY(new Date()),
        img: ""
    });
    const [formData, setFormData] = useState({
        Id: "0",
        Title: "",
        Category: "",
        CreatedAt: formateDDMMYYYY(new Date()),
        ImageFile: ""
    });

    console.log(formPreview);


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
        formDataToSend.append('Content', editorRef.current.getContent());

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/Blog/Create`, formDataToSend);
            setIsLoadingSubmit(false)
            toggleIsShowCreateBlog();
        } catch (error) {
            console.log(error);
            setIsLoadingSubmit(false)
        }
    };

    const handleSaveDraft = async (e) => {
        e.preventDefault();
        setIsLoadingSubmit(true)

        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }
        formDataToSend.append('Content', editorRef.current.getContent());

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/Blog/Create`, formDataToSend, {
                params: {
                    isDraft: true,
                }
            });
            setIsLoadingSubmit(false)
            toggleIsShowCreateBlog();
        } catch (error) {
            console.log(error);
            setIsLoadingSubmit(false)
        }
    }

    const closeModal = (e) => {
        console.log(e.target);
        console.log(e.currentTarget);
        if(e.target === e.currentTarget) {
            toggleIsShowCreateBlog();
        }
    }

    const toggleIsShowPreviewBlogModal = (e) => {
        setFormPreview(prev => {
            return {
                id: formData.Id,
                title: formData.Title,
                category: formData.Category,
                createdAt: formateDDMMYYYY(new Date()),
                imgAddress: images,
                content: editorRef.current?.getContent()
            }
        })
        e.preventDefault();
        setIsShowPreviewBlogModal(!isShowPreviewBlogModal);
    }


    return createPortal(
        <div className="relative">
            {/* Wrapper Disable */}
            <div onClick={closeModal} className="fixed h-[100vh] inset-0 bg-gray-500/75 z-20">
                <form id='createPostForm' className="absolute flex justify-center items-center inset-x-4 md:inset-x-auto md:left-1/2 top-1/2 md:-translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="overflow-auto overscroll-y-contain h-[80vh] md:w-[80vw] bg-white rounded-xl">
                        <div className="relative px-4 md:px-12 py-4">
                            <div
                                className="back-action z-10 flex flex-col md:flex-row md:justify-between md:items-center gap-2 sticky top-0 w-full bg-white "
                            >
                                <button onClick={toggleIsShowCreateBlog} className="flex items-center gap-2">
                                    <IoArrowBack />
                                    <h2 className="text-base text-gray-700 leading-9 text-nowrap">Trở về</h2>
                                </button>

                                <div className="container-action grid grid-cols-1 md:grid-cols-3 gap-2">

                                    <Button className="w-full" onClick={handleSaveDraft} size='medium' type='upload'>
                                        <RiDraftLine />
                                        Lưu nháp
                                    </Button>
                                    <Button className="w-full" onClick={toggleIsShowPreviewBlogModal} type='upload'>
                                        <RiDraftLine />
                                        Xem trước
                                    </Button>
                                    {isLoadingSubmit ? (
                                        <Button
                                            className="px-4 opacity-70" type='primary'
                                            onClick={handleSubmit}
                                        >
                                            <VscLoading className='animate-spin text-lg' />
                                            <span></span>
                                        </Button>
                                    ) : (
                                        <Button
                                            className="px-4" type='primary'
                                            onClick={handleSubmit}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>Đăng tin tức</span>
                                        </Button>
                                    )}
                                </div>
                            </div>
                            <div className="border-b border-gray-900/10 pb-12 mt-4">
                                <h2 className="text-base font-normal leading-7 text-gray-900">Đăng tin tức</h2>
                                <div className='flex flex-col mt-8 gap-6'>
                                    <div className='grid grid-cols-4 gap-6'>
                                        <div className='flex flex-col gap-2 col-span-4 md:col-span-2'>
                                            <label htmlFor='topic'
                                                   className='text-sm font-medium text-gray-900 leading-6'>Tiêu
                                                đề</label>
                                            <input
                                                type='text'
                                                id='Title'
                                                name='Title'
                                                className='py-1.5 text-sm font-medium leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md p-2'
                                                placeholder={'Nhập tiêu đề'}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className='flex flex-1 flex-col gap-2 col-span-4 md:col-span-2'>
                                            <label htmlFor='Category'
                                                   className='text-sm font-medium text-gray-900 leading-6'>Doanh
                                                mục</label>
                                            <input
                                                type='text'
                                                id='Category'
                                                name='Category'
                                                className='py-1.5 text-sm font-medium leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md p-2'
                                                placeholder={'Nhập doanh mục'}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        {/*<SearchUserResult searchedUsers={searchedUsers} handleClickUser={handleClickUser}>*/}
                                        {/*    <div className='flex flex-1 flex-col gap-2 col-span-4'>*/}
                                        {/*        <label htmlFor='keyword' className='text-sm font-medium text-gray-900 leading-6'>Tác giả</label>*/}
                                        {/*        <input*/}
                                        {/*            type='text'*/}
                                        {/*            id='keyword'*/}
                                        {/*            name='keyword'*/}
                                        {/*            value={formData.author || ''}*/}
                                        {/*            className='py-1.5 text-sm font-medium leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md p-2'*/}
                                        {/*            placeholder={'Nhập từ khoá'}*/}
                                        {/*            onChange={(e) => {*/}
                                        {/*                handleChange(e)*/}
                                        {/*                handleSearchUser(e)*/}
                                        {/*            }}*/}
                                        {/*            onFocus={() => setFormData({ ...formData, author: '' })}*/}
                                        {/*        />*/}
                                        {/*    </div>*/}
                                        {/*</SearchUserResult>*/}
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <div
                                            className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                            {images ? (
                                                <div className='relative'>
                                                    <img src={images} alt='hinh upload' className='' />
                                                    <label htmlFor="file-upload"
                                                           className="absolute bottom-0 w-full p-4  cursor-pointer rounded-tl-md rounded-tr-md bg-gray-400/60 text-white font-normal">
                                                        <span>Đổi hình khác</span>
                                                    </label>
                                                    <input id="file-upload" type="file" className="sr-only"
                                                           name='ImageFile' placeholder='test'
                                                           onChange={handleChange} />
                                                </div>
                                            ) : (
                                                <div className="text-center">
                                                    <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24"
                                                         fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                                                              clip-rule="evenodd" />
                                                    </svg>
                                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                        <label htmlFor="file-upload"
                                                               className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                            <span>Tải ảnh lên</span>
                                                            <input id="file-upload" type="file" className="sr-only"
                                                                   name='ImageFile' onChange={handleChange} />
                                                        </label>
                                                        <p className="pl-1">bằng kéo hoặc thả</p>
                                                    </div>
                                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF dưới
                                                        10MB</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className='content'>
                                        <Editor
                                            apiKey='bzvtlkoota8hewyizr7ejk6wvqytmvudptgpviyat17odt93'
                                            onInit={(_evt, editor) => editorRef.current = editor}
                                            initialValue="<p>This is the initial content of the editor.</p>"
                                            init={{
                                                height: 500,
                                                menubar: false,
                                                plugins: [
                                                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                                ],
                                                toolbar: 'undo redo | blocks | ' +
                                                    'bold italic forecolor | alignleft aligncenter ' +
                                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                                    'removeformat | help',
                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {isShowPreviewBlogModal && (
                <PreviewBlogModal
                    data={formPreview}
                    toggleIsShowPreviewBlogModal={toggleIsShowPreviewBlogModal}
                    handleSubmit={handleSubmit}
                    handleSaveDraft={handleSaveDraft}
                    isLoadingSubmit={isLoadingSubmit}
                    toggleIsShowCreateBlog={toggleIsShowCreateBlog}
                />
            )}
        </div>
        ,
        document.body
    );
}

export default CreateBlogModal;