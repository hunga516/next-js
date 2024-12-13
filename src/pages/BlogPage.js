import { HiSearch } from 'react-icons/hi';
import images from '../assets/images';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { renderContentWithHighlight } from '../helper/rendeContentWithHighlight';
import formateDDMMYYYY from '../helper/formateDDMMYYYY';

function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    const [oneBlog, setOneBlog] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);

    const getOneBlog = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/Blog/Read?pageSize=1`,{
                params: {
                    status: "published",
                }
            });
            setOneBlog(response.data.blogs);
        } catch (e) {
            console.log(e);
        }
    };

    const getBlogs = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/Blog/Read`, {
                params: {
                    page: currentPage,
                    pageSize: 11,
                    status: "published"
                },
            });
            setBlogs(response.data.blogs);
            setTotalPages((response.data.totalPages))

            console.log(response.data.blogs);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getBlogs();
        getOneBlog();
    }, [currentPage]);


    return (
        <>
            {/*Tìm kiếm section*/}
            <div className="relative mt-8 flex items-center gap-2 md:px-8 lg:px-0 lg:mx-32 md:mt-20">
                <input type="text"
                       className="flex-1 px-4 py-2 ring-1 ring-slate-400/60 rounded-lg placeholder:text-slate-600 outline-none"
                       placeholder="Tìm bài viết bằng tên hoặc chủ đề" />
                <HiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl" />
            </div>


            {/*Hero blog section*/}
            <div className="grid grid-cols-3 gap-6 mt-8 md:px-8 lg:px-0 lg:mx-32">
                {blogs && blogs.length > 0 ? (
                    <>
                        <div className="grid grid-cols-2 gap-16 col-span-2 bg-slate-100/60 rounded-lg p-8">
                            {oneBlog && oneBlog.length > 0 ? (
                                oneBlog.map((blog, index) => (
                                    <>
                                        <div key={index} className="flex flex-col items-start gap-4">
                                            <div
                                                className="p-2 bg-yellow-500 text-white text-xs rounded-lg">{blog.category}</div>
                                            <h3 className="text-lg font-medium leading-5">{blog.title}</h3>
                                            <p className="text-slate-600 h-40 overflow-hidden text-ellipsis">
                                                {renderContentWithHighlight(blog?.content)}
                                            </p>
                                            <Link to="/blog/:id"
                                                  className="px-4 py-2 rounded-2xl ring-1 ring-slate-600 text-slate-800"
                                            >
                                                Đọc tiếp
                                            </Link>
                                        </div>
                                        <img src={`${process.env.REACT_APP_ASP_NET_CORE_APP_URL}${blog.img}`} alt=""
                                             className="rounded-xl h-full object-cover" />
                                    </>
                                ))
                            ) : (
                                <div>blog loading</div>
                            )}
                        </div>
                        <div className="">
                            <div className="flex items-center ring-1 ring-slate-100/60 rounded-full grid grid-cols-2">
                                <button className="text-sm px-4 py-2 rounded-full bg-slate-200/70 text-black">Mới nhất
                                </button>
                                <button className="text-sm px-4 py-2 rounded-full bg-white text-black">Thịnh hành
                                </button>
                            </div>
                            <div className="flex flex-col gap-4 mt-4 max-h-[350px] overflow-scroll">
                                {blogs.map((blog, index) => (
                                    <div key={index} className="blog-item flex flex-col gap-2">
                                        <div
                                            className="px-2 py-1 bg-yellow-500 text-white text-[10px] rounded-lg w-fit"
                                        >
                                            {blog.category}
                                        </div>
                                        <div className="grid grid-cols-5">
                                            <h3 className="text-slate-800 col-span-4">
                                                {blog.title}
                                            </h3>
                                            <span className="flex justify-end">
                                                <FaArrowRightLong className="text-slate-600 text-right" />
                                            </span>
                                        </div>
                                        <span className="border-b-[0.5px] border-slate-300 mt-2"></span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <div>data loading</div>
                )}
            </div>

            {/*Blog section*/}
            <div className="mt-12 md:mt-20 md:px-8 lg:px-0 lg:mx-32">
                <div className="flex items-center justify-between">
                    <p className="text-slate-800 text-xl md:text-2xl font-semibold">Tin tức về y khoa</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 md:mt-6 ">
                    {blogs && blogs.length > 0 ? (
                        blogs.map((blog, index) => (
                            <Link to={`/blog/${blog.id}`} className={`grid-item ${index === 0 ? "col-span-2" : "col-span-1"}`}>
                            <div key={index} >
                                <div className="relative">
                                    <img src={`${process.env.REACT_APP_ASP_NET_CORE_APP_URL}${blog.img}`} alt="hinh anh tin tuc"
                                         className="rounded-md h-40 w-full object-cover" />
                                    <div
                                        className="absolute px-2 py-1 bg-yellow-500 text-white border-white outline outline-offset-0 outline-4 outline-white text-[10px] rounded-md bottom-0 left-0 before:w-[25px] before:h-[25px] before:shadow-curve-bl-4px before:rounded-md before:absolute before:left-0 before:-top-[29px] after:absolute after:w-[25px] after:h-[25px] after:bottom-0 after:-right-[29px] after:shadow-curve-bl-4px after:rounded-md">
                                        {blog.category}
                                    </div>
                                </div>
                                <div className="px-2 py-4 flex flex-col gap-2">
                                    <div className="flex items-center justify-between">

                                        <p className="text-blue-500 text-xs">{formateDDMMYYYY(blog.createdAt)}</p>
                                    </div>
                                    <h2 className="text-lg font-medium h-8 overflow-hidden text-ellipsis">{blog.title}</h2>
                                    <p className="text-slate-600 max-h-14 overflow-hidden text-ellipsis">
                                        {renderContentWithHighlight(blog?.content)}
                                    </p>
                                </div>
                            </div>
                            </Link>
                        ))
                    ) : (
                        <div>dataloading</div>
                    )}
                </div>
                <div className="flex items-center justify-between mt-6">
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                       className="flex items-center px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>

                        <span className="text-sm">
                    Trước
            </span>
                    </button>

                    <div className="items-center hidden md:flex gap-x-3">
                        <div className="text-sm text-gray-500">
                            Trang <span className="font-medium text-gray-700">{currentPage} / {totalPages}</span>
                        </div>
                    </div>

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
                    >
                               <span className="text-sm">
                                        Kế tiếp
                                </span>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>

        </>
    );
}

export default BlogPage;