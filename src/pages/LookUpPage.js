import { Link, useLocation } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';
import { useRef } from 'react';

function LookUpPage() {
    const docsRef = useRef(null);
    const location = useLocation();

    const scrollToDocs = () => {
        if (docsRef.current) {
            docsRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    }

    return (
        <section className="md:px-8 lg:px-0 lg:mx-32 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg p-4">
                <h1 className="mx-auto text-3xl text-slate-800 font-medium">
                    Tra cứu kết quả xét nghiệm
                </h1>

                <div className="type grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <Link to="/tra-cuu"
                          className={`rounded px-4 py-2 text-base md:text-lg text-center ${location.pathname === '/tra-cuu' ? ' text-white bg-sky-500' : 'text-sky-500 bg-white ring-1 ring-blue-500'}`}>
                        Khách hàng
                    </Link>

                    <Link to="/don-vi-tra-cuu"
                          className={`rounded-md px-4 py-2 text-base md:text-lg text-center ${location.pathname === '/don-vi-tra-cuu' ? ' text-white bg-sky-500' : 'text-sky-500 bg-white ring-1 ring-blue-500'}`}>
                        Đơn vị gửi mẫu
                    </Link>
                    <button onClick={scrollToDocs} className="md:hidden text-slate-600 flex items-center gap-2">
                        Hướng dẫn tra cứu
                        <FaArrowDown />
                    </button>
                </div>

                <div className="flex flex-col gap-6 mt-6">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="topic" className="text-sm font-medium text-gray-900 leading-6">Mã xét
                            nghiệm</label>
                        <input
                            // value={formData.ServiceName}
                            type="text"
                            id="ServiceName"
                            name="ServiceName"
                            className="py-1.5 text-sm font-medium leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md p-2"
                            placeholder={'Nhập tên dịch vụ'}
                            // onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="topic" className="text-sm font-medium text-gray-900 leading-6">Tên dịch
                            vụ</label>
                        <input
                            // value={formData.ServiceName}
                            type="text"
                            id="ServiceName"
                            name="ServiceName"
                            className="py-1.5 text-sm font-medium leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md p-2"
                            placeholder={'Nhập tên dịch vụ'}
                            // onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="topic" className="text-sm font-medium text-gray-900 leading-6">Tên dịch
                            vụ</label>
                        <input
                            // value={formData.ServiceName}
                            type="text"
                            id="ServiceName"
                            name="ServiceName"
                            className="py-1.5 text-sm font-medium leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-md p-2"
                            placeholder={'Nhập tên dịch vụ'}
                            // onChange={handleChange}
                        />
                    </div>
                    <div className="text-right">
                        <button className="px-4 py-1 bg-sky-500 rounded-md text-white">
                            Tra cứu
                        </button>
                    </div>
                </div>
            </div>

            <div ref={docsRef} className="overflow-hidden rounded-lg">
                <img
                    src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/mot-chiec-hinh-nen-vua-dang-yeu-vua-huyen-ao-cho-ban-nu.jpg"
                    alt="" />
            </div>
        </section>
    );
}

export default LookUpPage;