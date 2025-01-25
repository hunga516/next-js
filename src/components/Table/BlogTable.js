import React, { useState } from 'react';

import { LuArchiveRestore } from "react-icons/lu";
import { IoIosOptions } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { TiEdit } from 'react-icons/ti';

import Menu from "../Popper/Menu";
import Button from '../Button';
import axios from 'axios';
import images from '../../assets/images';
import formateDDMMYYYY from '../../helper/formateDDMMYYYY';


const BlogTable = ({ headers, data, activeButton, handleRestore, itemEditedId, blogActions, handleActionForm }) => {
    const [isSelectAction, setIsSelectAtion] = useState(false)
    const [courseIds, setCourseIds] = useState([])

    const handleRedirect = (id) => {
        window.location.href = `/blog/${id}`;
    };

    const handleChangeCheckbox = (e) => {
        if (e.target.checked) {
            setCourseIds(prev => [...prev, e.target.value])
        } else {
            setCourseIds(prev => prev.filter(id => id !== e.target.value))
        }
    }

    return (
        <div className="inline-block min-w-full py-2 align-middle">
            <div className="rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-slate-50 font-sans">
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index} className="py-2 px-4 text-sm font-medium text-left rtl:text-right text-gray-800 ">
                                    {header}
                                </th>
                            ))}
                            <th className="relative flex justify-center py-3.5 px-4 text-center">
                                <button onClick={() => setIsSelectAtion(!isSelectAction)}>
                                    <IoIosOptions className='text-center' />
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((item, index) => (
                            <tr
                                key={item.id}
                                className={`transition ease-out duration-200 hover:bg-gray-200 hover:duration-75 even:bg-slate-50 ${itemEditedId === item._id ? 'transition ease-out duration-1000 bg-green-200' : ''}`}
                            >
                                {isSelectAction ? (
                                    <>
                                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                            <input type='checkbox' name='courseId' value={item.id}
                                                   onChange={handleChangeCheckbox}
                                            />
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <h2 className="text-gray-800">{item.id}</h2>
                                        </td>
                                    </>
                                )}
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <h2
                                        onClick={() => handleRedirect(item.id)}
                                        className="max-w-52 overflow-scroll hover:cursor-pointer hover:text-blue-600 duration-300 text-ellipsis flex items-center gap-2 text-gray-800">
                                        <img src={`${process.env.REACT_APP_ASP_NET_CORE_APP_URL}/${item.img}`}
                                             alt="hinh anh blog" className="w-6 h-6 rounded-lg object-cover" />
                                        {item.title}
                                    </h2>
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap">
                                    <div
                                        className="max-w-36 text-sm overflow-scroll py-1 rounded-full">{item.category}</div>
                                </td>
                                <td className="px-4 py-4 text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                                    <div className="flex gap-2 items-end py-1 text-sm rounded-full">
                                        <img src="/logo.png" className="w-6 rounded-full object-cover" alt="avatar" />
                                       Medlab Vĩnh Viễn
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <h4 className="text-gray-700">{formateDDMMYYYY(item.createdAt)}</h4>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <h4 className="text-gray-700">{item.viewCount}</h4>
                                </td>
                                {item.status ? (
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <h4 className="text-left text-yellow-500 rounded-full ring-1 ring-inset ring-yellow-500 px-2 py-0.5">{item.status}</h4>
                                    </td>
                                ) : (
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <h4 className="text-left"></h4>
                                    </td>
                                )}
                                {activeButton === 'trash' ? (
                                    <td className="">
                                        <Button className="text-sm px-[-2] hover:bg-gray-200 hover:duration-200"
                                                onClick={() => handleRestore(item)}>
                                            <LuArchiveRestore />
                                            Khôi phục
                                        </Button>
                                    </td>
                                ) : (
                                    <Menu items={blogActions} payload={item}>
                                        <td className={`flex justify-center px-2 py-4 text-sm whitespace-nowrap z-10 sticky right-0 ${index % 2 !== 0 ? "bg-slate-50" : "bg-white"}`}>
                                            <button
                                                className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </Menu>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BlogTable;
