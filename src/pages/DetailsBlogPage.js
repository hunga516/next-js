import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaArrowRightLong } from 'react-icons/fa6';
import { renderContentWithHighlight } from '../helper/rendeContentWithHighlight';
import formateDDMMYYYY from '../helper/formateDDMMYYYY';

export default function DetailsBlogPage({data}) {
    const [blog, setBlog] = useState(data);
    const [blogs, setBlogs] = useState([]);
    const params = useParams();

    const getDetailsBlog = async () => {
        if (!data){
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/Blog/GetDetail/${params.id}`);
                setBlog(response.data);
            } catch (e) {
                console.log(e);
            }
        }
        else {
            return;
        }
    };

    console.log(data);

    const getBlogs = async () => {
        if (!data){
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/Blog/Read`);
                setBlogs(response.data.blogs);
            } catch (e) {
                console.log(e);
            }
        }

        return
    };

    useEffect(() => {
        getDetailsBlog();
        getBlogs();
    }, [params.id]);

    const socialIcons = [
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/efb413c5cc5cc81ae2410fcc315d9f99e09ab33b66c57e0b8a3b0713329fe728?placeholderIfAbsent=true&apiKey=0f38df9da2834ce78ff98df9da825ead',
            alt: 'Share on Twitter',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/df88d6b6d7c94c6b0c317f7174c5c8b74983d6f34a41006fc4881c62d238f1e0?placeholderIfAbsent=true&apiKey=0f38df9da2834ce78ff98df9da825ead',
            alt: 'Share on LinkedIn',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c30d952a307166fe1ebde256f8da6330e4d0b6d1b96b2ade79bddd774fafe04b?placeholderIfAbsent=true&apiKey=0f38df9da2834ce78ff98df9da825ead',
            alt: 'Share on Facebook',
        },
    ];

    return (
        <div
            className="flex flex-col items-start self-center mt-16 md:mt-16 md:px-8 lg:px-0 lg:mx-20">
            <div className="self-stretch mt-2 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                        <div
                            className="flex overflow-hidden flex-col grow w-full rounded-xl bg-zinc-900 max-md:mt-8 max-md:max-w-full">
                            <div className="flex relative flex-col pt-9 w-full min-h-[350px] max-md:max-w-full">
                                {data && data.imgAddress ? (
                                    <img
                                        loading="lazy"
                                        src={data.imgAddress}
                                        alt="Main article featured image"
                                        className="object-cover absolute inset-0 size-full"
                                    />
                                ) : (
                                    <img
                                        loading="lazy"
                                        src={`${process.env.REACT_APP_ASP_NET_CORE_APP_URL}/${blog?.img}`}
                                        alt="Main article featured image"
                                        className="object-cover absolute inset-0 size-full"
                                    />
                                )}
                                <div
                                    className="flex relative z-10 shrink-0 mb-0 h-[300px] max-md:mb-2.5 max-md:max-w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-8">
                            {/*<AuthorCard />*/}
                            <div
                                className="flex overflow-hidden flex-col items-center bg-slate-100 rounded-xl">
                                <div className="flex relative flex-col p-5 w-full">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0143b2936edf67984ba985e0f0e6f98bb5d5078c4f1ef30cde00bd33dcfa6cf8?placeholderIfAbsent=true&apiKey=0f38df9da2834ce78ff98df9da825ead"
                                        alt=""
                                        className="object-cover absolute inset-0 size-full"
                                    />
                                    <div className="flex relative gap-5 self-start">
                                        <img
                                            loading="lazy"
                                            src="/logo.png"
                                            alt="Tác giả"
                                            className="object-contain shrink-0 max-w-full w-[100px]"
                                        />
                                    </div>
                                    <div className="flex relative flex-col mt-5 text-sky-600">
                                        <div className="flex flex-col max-w-full w-[301px]">
                                            <div className="text-xl font-semibold">Medlab Vĩnh Viễn</div>
                                        </div>
                                        <div
                                            className="mt-2.5 max-w-full bg-white border border-white border-solid opacity-20 min-h-[1px] w-[301px]" />
                                    </div>
                                </div>
                            </div>
                            {/*<ShareSection />*/}
                            <div className="flex overflow-hidden flex-col mt-8 bg-blue-900 rounded-xl">
                                <div
                                    className="flex relative flex-col justify-center items-start p-5 aspect-[3.444] w-[341px]">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2419c1e6dd47c58fc718781639dcd314498a76d021a9ad3bdc2c3a23e8a7191e?placeholderIfAbsent=true&apiKey=0f38df9da2834ce78ff98df9da825ead"
                                        alt=""
                                        className="object-cover absolute inset-0 size-full"
                                    />
                                    <div className="flex relative flex-col">
                                        <div className="text-sm font-semibold text-white font-sans md:text-base">
                                            Chia sẻ đến mạng xã hội
                                        </div>
                                        <div className="flex gap-5 items-start self-start mt-2.5">
                                            {socialIcons.map((icon, index) => (
                                                <button
                                                    key={index}
                                                    tabIndex={0}
                                                    aria-label={icon.alt}
                                                    className="focus:outline-none focus:ring-2 focus:ring-white rounded-full"
                                                >
                                                    <img
                                                        loading="lazy"
                                                        src={icon.src}
                                                        alt={icon.alt}
                                                        className="object-contain shrink-0 aspect-square w-[30px]"
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch mt-8 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                        <div className="flex items-center justify-between">
                            <div className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-lg">{blog?.category}</div>
                            <p className="text-slate-600 text-xs">{formateDDMMYYYY(blog?.createdAt)}</p>
                        </div>
                        <h1 className="text-xl font-medium mt-4">{blog?.title}</h1>
                        <p className="text-lg font-light text-slate-800 mt-4">
                            {renderContentWithHighlight(blog?.content)}
                        </p>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        {/*<TableOfContents />*/}
                        <div className="flex flex-col text-zinc-900 max-md:mt-8">
                            <div className="text-xl font-semibold">Các bài viết liên quan</div>
                            <div className="flex flex-col gap-6 mt-5 w-full text-base max-w-[341px]">
                                {blogs && blogs?.length > 0 && (
                                    blogs.map((blog, index) => (
                                        <Link to={`/blog/${blog.id}`} key={index}
                                              className="blog-item flex flex-col gap-2">
                                            <div className="flex flex-col gap-1">
                                                <div
                                                    className="px-2 py-1 bg-yellow-500 text-white text-[10px] rounded-lg w-fit"
                                                >
                                                    {blog.category}
                                                </div>
                                                <div className="grid grid-cols-5">
                                                    <h3 className="text-slate-800 col-span-4 hover:text-sky-600 duration-200">
                                                        {blog.title}
                                                    </h3>
                                                    <span className="flex justify-end">
                                                <FaArrowRightLong className="text-slate-600 text-right" />
                                            </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shrink-0 mt-7 max-w-full h-px bg-gray-500 border border-gray-500 border-solid w-[693px]" />
        </div>
    );
}