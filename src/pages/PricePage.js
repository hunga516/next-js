import { IoIosSearch } from "react-icons/io";
import images from '../assets/images';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

function PricePage() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const getServices = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/Service/Read`,{
                params: {
                    page: 1,
                    pageSize: 100,
                }
            })
            setServices(response.data.services);
        }

        getServices();
    }, [])


    return (
        <>
            <section className="md:px-8 lg:px-0 lg:mx-32 md:mt-20">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="hidden md:inline mt-1 text-base sm:text-lg md:text-lg text-gray-500 dark:text-gray-300">Bảng giá tất cả dịch vụ
                            của Medlab</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <input className="px-2 py-1 md:px-4 md:py-1 ring-1 ring-slate-200 rounded-lg w-48 sm:w-56 md:max-w-80 placeholder:text-sm" type="text"
                                   placeholder="Nhập dịch vụ cần tìm" />
                            <p className="absolute right-4 top-1/2 transform -translate-y-1/2"><IoIosSearch className="text-slate-500 text-lg md:text-2xl" /></p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-scroll border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                {services && services.length > 0 ? (
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-sky-600 dark:bg-gray-800">
                                    <tr>
                                        <th scope="col"
                                            className="py-3.5 px-4 text-sm font-medium flex items-center justify-center text-white dark:text-gray-400">
                                            <button className="flex items-center gap-x-3 focus:outline-none">
                                                <span className="text-sm md:text-base text-nowrap">Tên dịch vụ</span>

                                                <svg className="h-3" viewBox="0 0 10 11" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                                        fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                    <path
                                                        d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                                        fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                    <path
                                                        d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                                        fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                                </svg>
                                            </button>
                                        </th>

                                        <th scope="col"
                                            className="px-4 py-2 md:px-12 md:py-3.5 text-sm md:text-base font-medium text-center rtl:text-right text-white text-nowrap">
                                            Tên nhóm
                                        </th>

                                        <th scope="col"
                                            className="px-4 py-3.5 text-sm md:text-base font-medium text-center rtl:text-right text-white text-nowrap">
                                            Đơn vị
                                        </th>

                                        <th scope="col"
                                            className="px-4 py-3.5 text-sm md:text-base font-medium text-center rtl:text-right text-white text-nowrap">Trạng thái
                                        </th>

                                    </tr>
                                    </thead>
                                    <tbody
                                        className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                    {services.map((item, index) => (
                                            <tr key={index} className="even:bg-slate-100 dark:bg-gray-900">
                                                <td className="px-4 p-4 text-sm font-medium whitespace-nowrap">
                                                    <div>
                                                        <h2 className="w-56 overflow-hidden text-ellipsis font-medium text-gray-600 dark:text-white text-sm">{item.serviceName}</h2>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-2 md:px-12 md:py-4 text-sm font-medium whitespace-nowrap">
                                                    <div
                                                        className="">
                                                        <h2 className="font-medium text-gray-600 dark:text-white text-sm">{item.serviceGroup}</h2>
                                                    </div>
                                                </td>
                                                <td className="px-4 p-4 text-sm whitespace-nowrap">
                                                    <div
                                                        className="">
                                                        <h2 className="font-medium text-gray-600 dark:text-white text-sm">{item.serviceUnit}</h2>
                                                    </div>
                                                </td>
                                                <td className="px-4 p-4 text-sm font-medium whitespace-nowrap">
                                                    <div
                                                        className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                        Đang cung cấp
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                ) : (
                                    <Skeleton className="w-full h-96 -mt-2" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Contact section*/}
            <div className="mt-12 md:mt-16 md:px-8 lg:px-0 lg:mx-32">
                <div className="">
                    <div className="grid grid-cols-3 p-4 mx-auto md:p-8 bg-slate-100 rounded-md">
                        <div className="col-span-3 md:col-span-2 px-20">
                            <h2 className="text-slate-800 text-xl font-medium">Bạn cần hỗ trợ?</h2>
                            <p className="text-slate-600 leading-5 text-sm mt-2">Medlab rất hân hạnh được hỗ trợ bạn,
                                hãy để lại thông tin cho chúng tôi nhé. Yêu cầu của bạn sẽ được xử lý và phản hồi trong
                                thời gian sớm nhất.</p>
                            <div className="grid grid-cols-2 gap-2 mt-6">
                                <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
                                    <h3 className="text-slate-800">Họ và tên:</h3>
                                    <input type="text" placeholder="Nhập tên"
                                           className="col-span-2 sm:col-span-1 px-4 py-1 placeholder:text-base placeholder:font-light placeholder:font-sans placeholder:text-slate-600 ring-1 ring-slate-300 rounded-md" />
                                </div>
                                <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
                                    <h3 className="text-slate-800">Số điện thoại:</h3>
                                    <input type="text" placeholder="Nhập số điện thoại"
                                           className="col-span-2 sm:col-span-1 px-4 py-1 placeholder:text-base placeholder:font-light placeholder:font-sans placeholder:text-slate-600 ring-1 ring-slate-300 rounded-md" />
                                </div>
                                <div className="flex flex-col gap-1 col-span-2 md:mt-4">
                                    <h3 className="text-slate-800">Email:</h3>
                                    <input type="text" placeholder="Nhập email liên hệ"
                                           className="col-span-2 px-4 py-1 placeholder:text-base placeholder:font-light placeholder:font-sans placeholder:text-slate-600 ring-1 ring-slate-300 rounded-md" />
                                </div>
                                <button type="submit"
                                        className="col-span-2 mt-2 bg-sky-600 rounded-lg text-white px-12 py-1.5">GỬI
                                </button>
                            </div>
                        </div>
                        <img src={images.contact} alt="" className="hidden md:block w-52 h-full mx-auto object-cover " />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricePage;