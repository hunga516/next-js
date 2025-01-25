import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { FaRegTrashAlt } from 'react-icons/fa';
import { TiEdit } from 'react-icons/ti';
import { MdDeleteOutline } from 'react-icons/md';
import { CiFolderOn } from 'react-icons/ci';

import CreateServiceModal from '../components/Modal/Service/CreateServiceModal';
import CourseTable from '../components/Table/ServiceTable';
import ServiceTable from '../components/Table/ServiceTable';
import Skeleton from 'react-loading-skeleton';
import EditServiceModal from '../components/Modal/Service/EditServiceModal';
import DeleteModal from '../components/Modal/Service/DeleteModal';

function AdminServicePage() {
    const [services, setServices] = useState();
    const [isShowCreateService, setIsShowCreateService] = useState(false);
    const [isShowEditService, setIsShowEditService] = useState(false);
    const [isShowDeleteService, setIsShowDeleteService] = useState(false);
    const [selectedServiceDelete, setSelectedServiceDelete] = useState(null);
    const [selectedService, setSelectedService] = useState(null); //for render services
    const [activeButton, setActiveButton] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);

    useEffect(() => {
        const getAllServices = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/Service/Read`, {
                    params: {
                        page: currentPage,
                        pageSize: 10,
                    },
                });
                setServices(response.data.services);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.log(error);
            }
        };


        const getRecentCourses = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/services?sort=updatedAt&order=desc&page=${currentPage}`);
                setServices(response.data.services);
                setTotalPages(Math.ceil(response.data.totalCourses / 10));
            } catch (error) {
                console.log(error);
            }
        };

        const getTrashCourses = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/services/trash?page=${currentPage}`);
                setServices(response.data.services);
                setTotalPages(Math.ceil(response.data.totalCoursesDeleted / 10));
            } catch (error) {
                console.log(error);
            }
        };

        //For active button (all,recent,trash)
        switch (activeButton) {
            case 'all':
                getAllServices();
                break;
            case 'recent':
                getRecentCourses();
                break;
            case 'trash':
                getTrashCourses();
                break;
            default:
                break;
        }

    }, [currentPage, activeButton, isShowCreateService, isShowEditService, isShowDeleteService]);

    const toggleIsShowCreateService = () => {
        setIsShowCreateService(!isShowCreateService);
    };

    const toggleIsShowEditService = (service) => {
        setSelectedService(service);
        setIsShowEditService(!isShowEditService);
    };

    const toggleIsShowDeleteService = () => {
        setIsShowDeleteService(!isShowDeleteService);
    }

    const handleSoftDelete = async (service) => {
        try {
            console.log(service);
            await axios.delete(`${process.env.REACT_APP_API_URL}/Service/Delete/${service.id}`);
            toggleIsShowDeleteService()
        } catch (error) {
            console.log(error);
        }
    };

    const handleSearch = async (e) => {
        if (e.key === 'Enter') {
            try {
                setSearchQuery(e.target.value);
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/Service/Read?ServiceName=${e.target.value}`);
                setServices(response.data.services);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const SERVICE_ACTIONS = [
        {
            icon: TiEdit,
            title: 'Chỉnh sửa',
            onClick: function(service) {
                toggleIsShowEditService(service);
            },
        },
        {
            icon: MdDeleteOutline,
            title: 'Xoá',
            onClick: function(service) {
                setSelectedServiceDelete(service)
                toggleIsShowDeleteService(service);
            },
        },
    ];

    const handleActionForm = async (e, data) => {
        e.preventDefault();
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/services/handle-form-action`, data);
    };
    return (
        <>
            <div className="home-page-wrapper bg-white px-5 py-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <div className="flex items-center gap-x-3">
                            <h2 className="text-lg font-medium text-gray-800">Dịch vụ</h2>
                        </div>

                        <p className="mt-1 text-sm text-gray-500">Quản lý các dịch vụ</p>
                    </div>

                        <button
                            onClick={toggleIsShowCreateService}
                            className="flex items-center justify-center text-nowrap w-full px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Thêm dịch vụ</span>
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
                            onClick={() => setActiveButton('recent')}
                        >
                            Gần đây
                        </button>

                        {/*<button*/}
                        {/*    className={`flex items-center gap-2 px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm ${activeButton === 'trash' ? 'bg-gray-100' : 'bg-white'}`}*/}
                        {/*    onClick={() => setActiveButton('trash')}*/}
                        {/*>*/}
                        {/*    <FaRegTrashAlt />*/}
                        {/*    Thùng rác*/}
                        {/*</button>*/}
                    </div>

                    <div className="relative flex items-center mt-4 md:mt-0">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </span>

                        <input onKeyDown={(e) => handleSearch(e)} type="text" placeholder="Tìm dịch vụ"
                               className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                </div>

                <div className="table max-w-full flex flex-col w-full mt-6 drop-shadow-md">
                    {activeButton === 'all' || activeButton === 'recent' ? (
                        services ? (
                            <ServiceTable
                                headers={['STT', 'Tên dịch vụ', 'Nhóm','Ngày tạo','Đơn vị']}
                                data={services}
                                activeButton={activeButton}
                                serviceActions={SERVICE_ACTIONS}
                                handleActionForm={handleActionForm}
                            />
                        ) : (
                            <div className="flex flex-col gap-1 justify-center">
                                <Skeleton height={100} width={796} />
                                <Skeleton height={100} width={796} />
                                <Skeleton height={100} width={796} />
                                <Skeleton height={100} width={796} />
                                <Skeleton height={100} width={796} />
                            </div>

                        )
                    ) : (
                        <CourseTable
                            headers={['STT', 'Lĩnh vực', 'Tiêu đề', 'Người đăng', 'Lượt đăng ký', 'Ngày xoá']}
                            data={services}
                            activeButton={activeButton}
                            serviceActions={SERVICE_ACTIONS}
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
                            <span className="text-nowrap">
                                Trước
                            </span>
                        </button>
                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            href="#"
                            class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100-800"
                            disabled={currentPage === totalPages}
                        >
                            <span className="text-nowrap">
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
            {isShowCreateService && (
                <CreateServiceModal toggleIsShowCreateService={toggleIsShowCreateService} />
            )
            }
            {
                isShowEditService && (
                    <EditServiceModal service={selectedService} toggleIsShowEditService={toggleIsShowEditService} />
                )
            }
            {
                isShowDeleteService && (
                    <DeleteModal service={selectedServiceDelete} toggleIsShowDeleteService={toggleIsShowDeleteService} handleSoftDelete={handleSoftDelete} />
                )
            }
        </>
    );
}

export default AdminServicePage;