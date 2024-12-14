import Link from "next/link";
import {FaArrowRightLong} from "react-icons/fa6";
import Image from "next/image";
import formateDDMMYYYY from "@/helper/formateDDMMYYYY";
import {renderContentWithHighlight} from "@/helper/rendeContentWithHighlight";
import {Blog} from "@/app/types/blog";


export const BlogList: React.FC<{ blogs: Blog[] }> = ({ blogs }) => {
    return (
        <div className="mt-12 md:mt-20 md:px-8 lg:px-0 lg:mx-32">
            <div className="flex items-center justify-between">
                <p className="text-slate-800 text-xl md:text-2xl font-semibold">Tin tức về y khoa</p>
                <Link
                    href="/blog" className="flex items-center gap-2 px-4 py-1 bg-blue-100 text-blue-600 rounded-lg">
                    <FaArrowRightLong/>
                    Xem tất cả
                </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-2 mt-4 md:mt-6">
                {blogs && blogs.length > 0 && (
                    blogs.map((blog, index) => (
                        <Link href={`/blog/${blog.id}`} key={index}>
                            <div className="grid-item">
                                <div className="relative">
                                    <Image src={`${process.env.REACT_APP_ASP_NET_CORE_APP_URL}${blog.img}`}
                                           alt="hinh anh tin tuc"
                                           className="rounded-md h-40 w-full object-cover"
                                           width={100}
                                           height={100}
                                    />
                                    <div
                                        className="absolute px-2 py-1 bg-yellow-500 text-white border-white outline outline-offset-0 outline-4 outline-white text-[10px] rounded-md bottom-0 left-0 before:w-[25px] before:h-[25px] before:shadow-curve-bl-4px before:rounded-md before:absolute before:left-0 before:-top-[29px] after:absolute after:w-[25px] after:h-[25px] after:bottom-0 after:-right-[29px] after:shadow-curve-bl-4px after:rounded-md">
                                        {blog.category}
                                    </div>
                                </div>
                                <div className="px-2 py-4 flex flex-col gap-1">
                                    <div className="flex items-center justify-between">
                                        <p className="text-blue-500 text-xs">{formateDDMMYYYY(blog.createdAt)}</p>
                                    </div>
                                    <h2 className="text-lg font-medium">{blog.title}</h2>
                                    <div className="blog-content h-16 overflow-hidden" dangerouslySetInnerHTML={{__html: blog.content}}/>
                                </div>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    )
}



