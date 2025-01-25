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


function EditBlogModal({blog, toggleIsShowEditBlog}) {
    const { userId } = useContext(AuthContext)
    const [images, setImages] = useState(`${process.env.REACT_APP_ASP_NET_CORE_APP_URL}/${blog.img}`)
    const [searchedUsers, setSearchedUsers] = useState([])
    const [errors, setErrors] = useState({});
    const [isLoadingSubmit, setIsLoadingSubmit] = useState(false)
    const editorRef = useRef(null);
    const [formData, setFormData] = useState({
        Id: blog.id,
        Title: blog.title,
        Category: blog.category,
        CreatedAt: blog.createdAt,
        ImageFile: ""
    });

    console.log(blog);


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
            await axios.put(`${process.env.REACT_APP_API_URL}/Blog/Update/${blog.id}`, formDataToSend);
            setIsLoadingSubmit(false)
            toggleIsShowEditBlog();
        } catch (error) {
            console.log(error);
            setIsLoadingSubmit(false)
        }
    };

    const handleSaveDraf = async (e) => {
        e.preventDefault();
        setIsLoadingSubmit(true)

        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }
        formDataToSend.append('Content', editorRef.current.getContent());

        try {
            await axios.put(`${process.env.REACT_APP_API_URL}/Blog/Update/${blog.id}`, formDataToSend, {
                params: {
                    isDraft: true,
                }
            });
            setIsLoadingSubmit(false)
            toggleIsShowEditBlog();
        } catch (error) {
            console.log(error);
            setIsLoadingSubmit(false)
        }
    };

    const closeModal = (e) => {
        if (e.target === e.currentTarget) {
            toggleIsShowEditBlog();
        }
    }

    return createPortal(
        <div className="relative">
            {/* Wrapper Disable */}
            <div onClick={closeModal} className="fixed h-[100vh] inset-0 bg-gray-500/75 z-20">
                {/* Modal */}
                <form id='createPostForm' className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-20">
                    <div className="overflow-auto overscroll-y-contain h-[80vh] w-[100vw] md:w-[80vw] bg-white rounded-xl">
                        <div className="relative px-12 py-4">
                            <div
                                className="back-action z-10 flex flex-col md:flex-row justify-between md:items-center gap-2 sticky top-0 py-2 w-full bg-white "
                            >
                                <button onClick={toggleIsShowEditBlog} className="flex items-center gap-2">
                                    <IoArrowBack />
                                    <h2 className="text-base text-gray-700 leading-9">Trở về</h2>
                                </button>

                                <div className="container-action flex flex-col md:flex-row items-center gap-2">
                                    <Button className="w-full" onClick={handleSaveDraf} size='medium' type='upload'>
                                        <RiDraftLine />
                                        Lưu nháp
                                    </Button>
                                    {isLoadingSubmit ? (
                                        <Button
                                            className="px-4 opacity-70 w-full" type='primary'
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
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>Đăng tin tức</span>
                                        </Button>
                                    )}
                                </div>
                            </div>
                            <div class="border-b border-gray-900/10 pb-12 mt-4">
                                <h2 class="text-base font-normal leading-7 text-gray-900">Đăng tin tức</h2>
                                <div className='flex flex-col mt-8 gap-6'>
                                    <div className='grid grid-cols-4 gap-6'>
                                        <div className='flex flex-col gap-2 col-span-4 md:col-span-2'>
                                            <label htmlFor='topic' className='text-sm font-medium text-gray-900 leading-6'>Tiêu đề</label>
                                            <input
                                                value={formData.Title}
                                                type='text'
                                                id='Title'
                                                name='Title'
                                                className='py-1.5 text-sm font-medium leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md p-2'
                                                placeholder={'Nhập tiêu đề'}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className='flex flex-1 flex-col gap-2 col-span-4 md:col-span-2'>
                                            <label htmlFor='Category' className='text-sm font-medium text-gray-900 leading-6'>Doanh mục</label>
                                            <input
                                                value={formData.Category}
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
                                        <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                            {images ? (
                                                <div className='relative'>
                                                    <img src={images} alt='hinh upload' className='' />
                                                    <label for="file-upload" class="absolute bottom-0 w-full p-4  cursor-pointer rounded-tl-md rounded-tr-md bg-gray-400/60 text-white font-normal">
                                                        <span>Đổi hình khác</span>
                                                    </label>
                                                    <input id="file-upload" type="file" class="sr-only" name='ImageFile' placeholder='test' onChange={handleChange} />
                                                </div>
                                            ) : (
                                                <div class="text-center">
                                                    <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                                                    </svg>
                                                    <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                                        <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                            <span>Tải ảnh lên</span>
                                                            <input id="file-upload" type="file" class="sr-only" name='ImageFile' onChange={handleChange} />
                                                        </label>
                                                        <p class="pl-1">bằng kéo hoặc thả</p>
                                                    </div>
                                                    <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF dưới 10MB</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className='content'>
                                        <Editor
                                            apiKey='bzvtlkoota8hewyizr7ejk6wvqytmvudptgpviyat17odt93'
                                            onInit={(_evt, editor) => editorRef.current = editor}
                                            initialValue={blog.content}
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
                    </div >
                </form >
            </div>
        </div >,
        document.body
    );
}

export default EditBlogModal;