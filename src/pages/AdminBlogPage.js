import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { TiEdit } from 'react-icons/ti';
import { MdDeleteOutline } from 'react-icons/md';

import CreateBlogModal from '../components/Modal/Blog/CreateBlogModal';
import CourseTable from '../components/Table/BlogTable';
import BlogTable from '../components/Table/BlogTable';
import Skeleton from 'react-loading-skeleton';
import { AuthContext } from '../context';
import EditBlogModal from '../components/Modal/Blog/EditBlogModal';
import DeleteModal from '../components/Modal/Blog/DeleteModal';
import DetailsBlogPage from './DetailsBlogPage';
import { FaRegEye } from 'react-icons/fa';

function AdminBlogPage() {
    const [blogs, setBlogs] = useState();
    const [isShowCreateBlog, setIsShowCreateBlog] = useState(false);
    const [isShowEditBlog, setIsShowEditBlog] = useState(false);
    const [isShowDeleteBlog, setIsShowDeleteBlog] = useState(false);
    const [isShowPreviewBlog, setIsShowPreviewBlog] = useState(false);
    const [selectedBlogDelete, setSelectedBlogDelete] = useState(null);
    const [selectedBlog, setSelectedBlog] = useState(null); //for render blogs
    const [activeButton, setActiveButton] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [courseEditedId, setCourseEditedId] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        const getAllBlogs = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/Blog/Read`, {
                    params: {
                        page: currentPage,
                        pageSize: 10,
                    },
                });
                setBlogs(response.data.blogs);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.log(error);
            }
        };


        const getDraftBlogs = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/Blog/Read`, {
                    params: {
                        page: currentPage,
                        pageSize: 10,
                        status: "draft",
                    },
                });
                setBlogs(response.data.blogs);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.log(error);
            }
        };

        const getTrashCourses = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/blogs/trash?page=${currentPage}`);
                setBlogs(response.data.blogs);
                setTotalPages(Math.ceil(response.data.totalCoursesDeleted / 10));
            } catch (error) {
                console.log(error);
            }
        };

        console.log(selectedBlog);

        //For active button (all,recent,trash)
        switch (activeButton) {
            case 'all':
                getAllBlogs();
                break;
            case 'draft':
                getDraftBlogs();
                break;
            case 'trash':
                getTrashCourses();
                break;
            default:
                break;
        }

    }, [currentPage, activeButton, isShowCreateBlog, isShowEditBlog, isShowDeleteBlog]); // Theo dõi cả currentPage và activeButton

    const toggleIsShowCreateBlog = () => {
        setIsShowCreateBlog(!isShowCreateBlog);
    };

    const toggleIsShowEditBlog = (blog) => {
        setSelectedBlog(blog);
        setIsShowEditBlog(!isShowEditBlog);
    };

    const toggleIsShowDeleteBlog = () => {
        setIsShowDeleteBlog(!isShowDeleteBlog);
    }

    const toggleIsShowPreviewBlog = (blog) => {
        setSelectedBlog(blog);
        setIsShowPreviewBlog(!isShowPreviewBlog);
    }

    const closeModalPreview = (e) => {
        if (e.target === e.currentTarget) {
            setIsShowPreviewBlog(false);
        }
    }

    const handleSoftDelete = async (blog) => {
        try {
            console.log(blog);
            await axios.delete(`${process.env.REACT_APP_API_URL}/Blog/Delete/${blog.id}`);
            toggleIsShowDeleteBlog()
        } catch (error) {
            console.log(error);
        }
    };


    const handleRestore = async (course) => {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/blogs/restore/${course._id}?updatedBy=${userId}`);
        } catch (error) {
            console.log(error);
        }
    };

    const onChangeSearch = async (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = async (e) => {
       if(e.key === 'Enter') {
           try {
               const response = await axios.get(`${process.env.REACT_APP_API_URL}/Blog/Read?title=${searchQuery}`);
               setBlogs(response.data.blogs);
           } catch (error) {
               console.log(error);
           }
       }
    }

    const BLOG_ACTIONS = [
        {
            icon: FaRegEye,
            title: 'Xem trước',
            onClick: function(blog) {
                console.log(blog);
                toggleIsShowPreviewBlog(blog);
            },
        },
        {
            icon: TiEdit,
            title: 'Chỉnh sửa',
            onClick: function(blog) {
                toggleIsShowEditBlog(blog);
            },
        },
        {
            icon: MdDeleteOutline,
            title: 'Xoá',
            onClick: function(blog) {
                setSelectedBlogDelete(blog)
                toggleIsShowDeleteBlog(blog);
            },
        },
    ];

    const handleActionForm = async (e, data) => {
        e.preventDefault();
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/blogs/handle-form-action`, data);
    };

    return (
        <>
            <div className="home-page-wrapper bg-white px-5 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                        <div className="flex items-center gap-x-3">
                            <h2 className="text-lg font-medium text-gray-800">Tin tức</h2>
                            <span
                                className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">{blogs?.length} bài viết</span>
                        </div>

                        <p className="mt-1 text-sm text-gray-500">Quản lý các tin tức</p>
                    </div>

                        <button
                            onClick={toggleIsShowCreateBlog}
                            className="flex w-full items-center text-nowrap justify-center px-6 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Đăng tin tức</span>
                        </button>
                </div>

                <div className="mt-6 md:flex md:items-center md:justify-between drop-shadow-md">
                    <div
                        className="inline-flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse">
                        <button
                            className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm ${activeButton === 'all' ? 'bg-gray-100' : 'bg-white'}`}
                            onClick={() => setActiveButton('all')}
                        >
                            Tất cả
                        </button>

                        <button
                            className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm ${activeButton === 'recent' ? 'bg-gray-100' : 'bg-white'}`}
                            onClick={() => setActiveButton('draft')}
                        >
                            Bản nháp
                        </button>
                    </div>

                    <div className="relative flex items-center mt-4 md:mt-0">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </span>

                        <input
                            onChange={(e) => onChangeSearch(e)}
                            onKeyDown={handleSearch}
                            type="text"
                            placeholder="Tìm tin tức"
                            className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                </div>

                <div className="table max-w-full flex flex-col w-full mt-6 drop-shadow-md">
                    {activeButton === 'all' || activeButton === 'recent' ? (
                        blogs ? (
                            <BlogTable
                                headers={['STT', 'Tiêu đề', 'Doanh mục', 'Người đăng', 'Ngày đăng', 'Lượt xem', '']}
                                data={blogs}
                                activeButton={activeButton}
                                handleRestore={handleRestore}
                                itemEditedId={courseEditedId}
                                blogActions={BLOG_ACTIONS}
                                handleActionForm={handleActionForm}
                            />
                        ) : (
                            <div className="flex flex-col gap-1 justify-center mt-10">
                                <Skeleton height={100} width={796} />
                                <Skeleton height={100} width={796} />
                                <Skeleton height={100} width={796} />
                                <Skeleton height={100} width={796} />
                                <Skeleton height={100} width={796} />
                            </div>

                        )
                    ) : (
                        <CourseTable
                            headers={['STT', 'Tiêu đề', 'Doanh mục', 'Người đăng', 'Ngày đăng', 'Lượt xem', '']}
                            data={blogs}
                            activeButton={activeButton}
                            handleRestore={handleRestore}
                            itemEditedId={courseEditedId}
                            blogActions={BLOG_ACTIONS}
                        />
                    )}
                </div>
                <div class="mt-6 sm:flex sm:items-center sm:justify-between ">
                    <div class="text-sm text-gray-500">
                        Trang <span class="font-medium text-gray-700">{currentPage} / {totalPages}</span>
                    </div>
                    <div class="flex items-center mt-4 gap-x-4 sm:mt-0">
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            href="#"
                            class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100-800"
                            disabled={currentPage === 1}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            <span>
                                Trước
                            </span>
                        </button>
                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            href="#"
                            class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100-800"
                            disabled={currentPage === totalPages}
                        >
                            <span>
                                Kế tiếp
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isShowCreateBlog && (
                <CreateBlogModal toggleIsShowCreateBlog={toggleIsShowCreateBlog} />
            )
            }
            {
                isShowEditBlog && (
                    <EditBlogModal blog={selectedBlog} toggleIsShowEditBlog={toggleIsShowEditBlog} />
                )
            }
            {
                isShowDeleteBlog && (
                    <DeleteModal blog={selectedBlogDelete} toggleIsShowDeleteBlog={toggleIsShowDeleteBlog} handleSoftDelete={handleSoftDelete} />
                )
            }
            {
                isShowPreviewBlog && (
                    <div className="fixed inset-0 bg-slate-100/75 z-30 overflow-hidden" onClick={closeModalPreview}>
                            <div className="absolute overflow-y-auto rounded-lg drop-shadow-lg opacity-100 inset-0 mx-20 mt-20 bg-white">
                                <DetailsBlogPage data={selectedBlog} />
                            </div>
                    </div>
                )
            }
        </>
    );
}

export default AdminBlogPage;