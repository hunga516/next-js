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


const BlogTable = ({ headers, data, activeButton, handleRestore, itemEditedId, serviceActions }) => {
    const [isSelectAction, setIsSelectAtion] = useState(false)
    const [courseIds, setCourseIds] = useState([])


    const handleChangeCheckbox = (e) => {
        if (e.target.checked) {
            setCourseIds(prev => [...prev, e.target.value])
        } else {
            setCourseIds(prev => prev.filter(id => id !== e.target.value))
        }
    }

    return (
        <div className="inline-block min-w-full py-2 align-middle">
            <div className="overflow-hidden rounded-lg">
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
                            <tr key={item.id}
                                className={`transition ease-out duration-200 hover:bg-gray-200 hover:duration-75 even:bg-slate-50`}>
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
                                    <h2 className="max-w-52 overflow-scroll text-ellipsis flex items-center gap-2 text-gray-800">
                                        {item.serviceName}
                                    </h2>
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap">
                                    <div
                                        className="max-w-36 text-sm overflow-scroll py-1 rounded-full">{item.serviceGroup}</div>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <h4 className="text-gray-700">{formateDDMMYYYY(item.createdAt)}</h4>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <h4 className="text-gray-700">{item.serviceUnit}</h4>
                                </td>
                                {activeButton === 'trash' ? (
                                    <td className=''>
                                        <Button className='text-sm px-[-2] hover:bg-gray-200 hover:duration-200'
                                                onClick={() => handleRestore(item)}>
                                            <LuArchiveRestore />
                                            Khôi phục
                                        </Button>
                                    </td>
                                ) : (
                                    <Menu items={serviceActions} payload={item}>
                                        <td className="flex justify-center px-2 py-4 text-sm whitespace-nowrap">
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
