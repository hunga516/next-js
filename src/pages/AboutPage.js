import images from '../assets/images';
import { MdOutlineEditCalendar, MdSupportAgent } from 'react-icons/md';
import { FaPhoneAlt, FaRegCalendarCheck } from 'react-icons/fa';
import BookingModal from '../components/Modal/BookingModal';
import { useModal } from '../context/ModalContext';
import { Ri24HoursLine } from 'react-icons/ri';
import { IoIosCheckbox, IoIosFlash } from 'react-icons/io';
import { IoLeaf } from 'react-icons/io5';
import { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

function AboutPage() {
    const { bookingModal, toggleModal } = useModal();
    const [isOpen, setIsOpenAccordion] = useState({
        accordion1: false,
        accordion2: false,
        accordion3: false,
        accordion4: false,
        accordion5: false,
        accordion6: false,
        accordion7: false,
        accordion8: false,
        accordion9: false,
    });

    const toggleAccordion = (accordion) => {
        setIsOpenAccordion((prev) => ({ ...prev, [accordion]: !prev[accordion] }));
    };


    return (
        <>
        {/*Tổng quan section*/}
            <div className="md:px-8 lg:px-0 lg:mx-32 md:mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                    <div className="row-span-2 flex flex-col justify-center gap-4 md:gap-8 items-start">
                        <h1 className="text-bold text-xl md:text-4xl leading-6 md:leading-10"><span
                            className="text-sky-600">Sức khỏe</span> của bạn là <span className="text-orange-500">trách nghiệm</span> của
                            Medlab Vĩnh Viễn</h1>
                        <p className="inline md:hidden text-slate-600 md:text-lg">Medlab tận tâm mang đến giải pháp y tế
                            hiện
                            đại, đồng hành cùng bạn để sống khỏe và hạnh phúc mỗi ngày.</p>
                        <p className="hidden md:inline text-slate-600 md:text-lg">Medlab luôn tận tâm mang đến các giải
                            pháp y tế hiện đại, tiên tiến và toàn diện, đồng hành cùng bạn trong mọi hành trình chăm sóc
                            sức khỏe, giúp bạn sống khỏe mạnh, vui vẻ và hạnh phúc hơn mỗi ngày.</p>
                        <button
                            onClick={() => toggleModal('bookingModal')}
                            className="flex items-center justify-center md:justify-normal gap-2 text-sm md:text-sm w-full md:w-auto font-medium bg-sky-600 hover:bg-sky-700 duration-300 rounded-lg leading-4 pl-2 md:pl-4 py-2 md:py-1.5 pr-1.5 md:pr-3.5 text-white">
                            <MdOutlineEditCalendar className="text-sm md:text-lg" />
                            Đặt lịch xét nghiệm
                        </button>
                    </div>
                    <div className="row-span-2 mt-4 md:mt-0">
                        <img src={images.medlab1} alt="" className="h-96 w-full object-cover rounded-lg" />
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 rounded-lg mt-8 md:mt-16 gap-2 md:gap-4">
                    <div className="bg-slate-100 p-4 flex flex-col gap-2 items-center justify-center rounded-2xl">
                        <h2 className="text-lg md:text-2xl font-medium text-sky-600">35.5k</h2>
                        <p className="text-sm md:text-base text-nowrap font-semibold text-slate-800">Khách hàng</p>
                    </div>
                    <div className="bg-slate-100 p-4 flex flex-col gap-2 items-center justify-center rounded-2xl">
                        <h2 className="text-lg md:text-2xl font-medium text-sky-600">10+</h2>
                        <p className="text-sm md:text-base text-nowrap font-semibold text-slate-800">Dịch vụ</p>
                    </div>
                    <div className="bg-slate-100 p-4 flex flex-col gap-2 items-center justify-center rounded-2xl">
                        <h2 className="text-lg md:text-2xl font-medium text-sky-600">8+</h2>
                        <p className="text-sm md:text-base text-nowrap font-semibold text-slate-800">Năm kinh nghiệm</p>
                    </div>
                    <div className="bg-slate-100 p-4 flex flex-col gap-2 items-center justify-center rounded-2xl">
                        <h2 className="text-lg md:text-2xl font-medium text-sky-600">15+</h2>
                        <p className="text-sm md:text-base text-nowrap font-semibold text-slate-800">Đối tác</p>
                    </div>
                    <div
                        className="col-span-2 md:col-span-1 bg-slate-100 p-4 flex flex-col gap-2 items-center justify-center rounded-2xl">
                        <h2 className="text-lg md:text-2xl font-medium text-sky-600">95%</h2>
                        <p className="text-sm md:text-base text-nowrap font-semibold text-slate-800">Khách hàng quay
                            lại</p>
                    </div>
                </div>
            </div>

        {/*Đội ngũ section*/}
            <div className="mt-8 md:mt-20 md:px-8 lg:px-0 lg:mx-32">
                <div className="text-center">
                    <p className="text-sky-500 text-sm md:text-lg font-medium mx-auto font-sans">Đội Ngũ</p>
                    <p className="text-slate-800 text-base sm:text-lg md:text-2xl mx-auto mt-2">Bác sĩ chuyên ngành
                        trình độ cao</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    <div className="relative bg-white ring-slate-300 rounded-lg h-48 md:h-80">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-45 rounded-lg"
                            style={{
                                backgroundImage: `url(${images.background2})`,
                            }}
                        ></div>
                        <div>
                            <div className="w-full text-center mt-2 md:mt-8">
                                <h2 className="text-black md:text-xl">Nguyễn Trường Vũ</h2>
                                <p className="text-sky-600 text-sm font-semibold tracking-wider">Bác sĩ</p>
                            </div>
                            <img
                                src={images.doctor2}
                                alt="Doctor"
                                className="absolute w-24 md:w-48 bottom-0 left-1/2 transform -translate-x-1/2 z-10"
                            />
                        </div>
                    </div>
                    <div className="relative bg-white ring-slate-300 rounded-lg h-52 md:h-80">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-45 rounded-lg"
                            style={{
                                backgroundImage: `url(${images.background2})`,
                            }}
                        ></div>
                        <div>
                            <div className="w-full text-center mt-2 md:mt-8">
                                <h2 className="text-black md:text-xl">Nguyễn Trường Vũ</h2>
                                <p className="text-sky-600 text-sm font-semibold tracking-wider">Bác sĩ</p>
                            </div>
                            <img
                                src={images.doctor2}
                                alt="Doctor"
                                className="absolute w-24 md:w-48 bottom-0 left-1/2 transform -translate-x-1/2 z-10"
                            />
                        </div>
                    </div>
                    <div className="relative bg-white ring-slate-300 rounded-lg h-52 md:h-80">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-45 rounded-lg"
                            style={{
                                backgroundImage: `url(${images.background2})`,
                            }}
                        ></div>
                        <div>
                            <div className="w-full text-center mt-2 md:mt-8">
                                <h2 className="text-black md:text-xl">Nguyễn Trường Vũ</h2>
                                <p className="text-sky-600 text-sm font-semibold tracking-wider">Bác sĩ</p>
                            </div>
                            <img
                                src={images.doctor2}
                                alt="Doctor"
                                className="absolute w-24 md:w-48 bottom-0 left-1/2 transform -translate-x-1/2 z-10"
                            />
                        </div>
                    </div>
                    <div className="relative bg-white ring-slate-300 rounded-lg h-52 md:h-80">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-45 rounded-lg"
                            style={{
                                backgroundImage: `url(${images.background2})`,
                            }}
                        ></div>
                        <div>
                            <div className="w-full text-center mt-2 md:mt-8">
                                <h2 className="text-black md:text-xl">Nguyễn Trường Vũ</h2>
                                <p className="text-sky-600 text-sm font-semibold tracking-wider">Bác sĩ</p>
                            </div>
                            <img
                                src={images.doctor2}
                                alt="Doctor"
                                className="absolute w-24 md:w-48 bottom-0 left-1/2 transform -translate-x-1/2 z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>

        {/*Dịch vụ chất lượng section*/}
            <div className="mt-8 md:mt-20 md:px-8 lg:px-0 lg:mx-32">
                <div className="grid grid-cols-1 gap-2  sm:gap-16">
                    <div className="flex flex-col items-start gap-4">
                        <h3 className="text-sky-500 text-sm md:text-lg font-medium font-sans">Dịch vụ chất
                            lượng</h3>
                        <h2 className="text-slate-800 text-4xl leading-10">Tại sao nên chọn chúng tôi ?</h2>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-12 sm:gap-x-16 sm:gap-y-16 mt-12">
                    <div className="grid-item flex flex-col items-start justify-between">
                        <div>
                            <div className="flex flex-col sm:flex-row justify-start items-start sm:items-end gap-2">
                                <div className="p-2 rounded-full bg-slate-200">
                                    <Ri24HoursLine className="text-lg text-blue-500" />
                                </div>
                                <p className="text-slate-800 text-base font-medium sm:text-lg">Trực tuyến 24/7</p>
                            </div>
                            <p className="mt-1 sm:mt-3 text-slate-600 text-sm md:text-base leading-6 text-left">
                                Đội ngũ chuyên gia y tế giàu kinh nghiệm luôn sẵn sàng hỗ trợ, giải đáp mọi thắc mắc của bạn bất kể ngày hay đêm.
                            </p>
                        </div>
                    </div>
                    <div className="grid-item flex flex-col items-start justify-between">
                        <div>
                            <div className="flex flex-col sm:flex-row justify-start items-start sm:items-end gap-2">
                                <div className="p-2 rounded-full bg-slate-200">
                                    <IoIosFlash className="text-lg text-blue-500" />
                                </div>
                                <p className="text-slate-800 text-base font-medium sm:text-lg">Trả kết quả nhanh
                                </p>
                            </div>
                            <p className="mt-1 sm:mt-3 text-slate-600 text-sm md:text-base leading-6 text-left">
                                Cung cấp kết quả xét nghiệm trong thời gian ngắn nhất, đảm bảo độ chính xác cao và thông tin kịp thời.
                            </p>
                        </div>
                    </div>
                    <div className="grid-item flex flex-col items-start justify-between">
                        <div>
                            <div className="flex flex-col sm:flex-row justify-start items-start sm:items-end gap-2">
                                <div className="p-2 rounded-full bg-slate-200">
                                    <FaRegCalendarCheck className="text-lg text-blue-500" />
                                </div>
                                <p className="text-slate-800 text-base font-medium sm:text-lg">Đặt lịch dễ dàng</p>
                            </div>
                            <p className="mt-1 sm:mt-3 text-slate-600 text-sm md:text-base leading-6 text-left">
                                Đặt lịch xét nghiệm dễ dàng, chỉ vài thao tác là bạn có thể chọn thời gian phù hợp mà không cần chờ đợi, tiết kiệm tối đa thời gian.
                            </p>
                        </div>
                    </div>
                    <div className="grid-item flex flex-col items-start justify-between">
                        <div>
                            <div className="flex flex-col sm:flex-row justify-start items-start sm:items-end gap-2">
                                <div className="p-2 rounded-full bg-slate-200">
                                    <IoLeaf className="text-lg text-blue-500" />
                                </div>
                                <p className="text-slate-800 text-base font-medium sm:text-lg">Không gian thoải mái</p>
                            </div>
                            <p className="mt-1 sm:mt-3 text-slate-600 text-sm md:text-base leading-6 text-left">
                                Cơ sở vật chất hiện đại, sạch sẽ, thoáng mát, được bố trí khoa học, tạo cảm giác dễ chịu trong suốt quá trình trải nghiệm.
                            </p>
                        </div>
                    </div>
                    <div className="grid-item flex flex-col items-start justify-between">
                        <div>
                            <div className="flex flex-col sm:flex-row justify-start items-start sm:items-end gap-2">
                                <div className="p-2 rounded-full bg-slate-200">
                                    <MdSupportAgent className="text-lg text-blue-500" />
                                </div>
                                <p className="text-slate-800 text-base font-medium sm:text-lg">Hậu xét nghiệm</p>
                            </div>
                            <p className="mt-1 sm:mt-3 text-slate-600 text-sm md:text-base leading-6 text-left">
                                Tư vấn chi tiết và hướng dẫn theo dõi sau xét nghiệm, đảm bảo bạn nhận được sự chăm sóc tốt nhất.
                            </p>
                        </div>
                    </div>
                    <div className="grid-item flex flex-col items-start justify-between">
                        <div>
                            <div className="flex flex-col sm:flex-row justify-start items-start sm:items-end gap-2">
                                <div className="p-2 rounded-full bg-slate-200">
                                    <IoIosCheckbox className="text-lg text-blue-500" />
                                </div>
                                <p className="text-slate-800 text-base font-medium sm:text-lg">Độ chính xác cao</p>
                            </div>
                            <p className="mt-1 sm:mt-3 text-slate-600 text-sm md:text-base leading-6 text-left">
                                Cam kết thực hiện từng xét nghiệm với trách nhiệm cao, đảm bảo chất lượng tốt nhất, mang lại kết quả chính xác và đáng tin cậy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        {/*FAQ section*/}
            <div className="mt-8 md:mt-20 md:px-8 lg:px-0 lg:mx-32">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2  sm:gap-16">
                    <div className="flex flex-col items-start gap-4">
                        <h3 className="text-blue-500 text-sm md:text-lg font-medium font-sans">FAQ</h3>
                        <h2 className="text-slate-800 text-4xl leading-10">Các câu hỏi thường gặp</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4 sm:gap-2 mt-12">
                    <div className="left flex flex-col gap-2">
                        <div className="accordion">
                            <div onClick={() => toggleAccordion(`accordion1`)}
                                 className="px-4 py-3 ring-1 ring-inset bg-blue-100/50 ring-slate-200 rounded-md cursor-pointer">
                                <div className="flex justify-between gap-2">
                                    <h3 className="text-sm sm:text-base text-slate-800 tracking-wide font-medium">MedLab
                                        cung cấp những
                                        loại xét nghiệm nào?</h3>
                                    <FiPlusCircle className="text-blue-500 text-2xl" />
                                </div>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen[`accordion1`] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="flex gap-2 items-center px-4 py-3 border-b-[0.5px] text-slate-700">
                                        MedLab cung cấp đa dạng các loại xét nghiệm, bao gồm xét nghiệm máu, xét nghiệm
                                        nước
                                        tiểu, xét nghiệm sinh hóa, miễn dịch, vi sinh, và các gói xét nghiệm định kỳ
                                        tổng
                                        quát. Nếu bạn cần tư vấn loại xét nghiệm phù hợp, đội ngũ của chúng tôi luôn sẵn
                                        sàng hỗ trợ.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion">
                            <div onClick={() => toggleAccordion(`accordion2`)}
                                 className="px-4 py-3 ring-1 ring-inset bg-blue-100/50 ring-slate-200 rounded-md cursor-pointer">
                                <div className="flex justify-between gap-2">
                                    <h3 className="text-sm sm:text-base text-slate-800 tracking-wide font-medium">Tôi có
                                        thể
                                        đặt lịch xét nghiệm như thế nào?</h3>
                                    <FiPlusCircle className="text-blue-500 text-2xl" />
                                </div>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen[`accordion2`] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="flex gap-2 items-center px-4 py-3 border-b-[0.5px] text-slate-700">
                                        Bạn có thể đặt lịch xét nghiệm trực tiếp trên website, qua ứng dụng di động của
                                        MedLab, hoặc gọi điện đến hotline. Đội ngũ nhân viên sẽ hướng dẫn bạn chi tiết
                                        và
                                        xác nhận lịch hẹn nhanh chóng.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion">
                            <div onClick={() => toggleAccordion(`accordion3`)}
                                 className="px-4 py-3 ring-1 ring-inset bg-blue-100/50 ring-slate-200 rounded-md cursor-pointer">
                                <div className="flex justify-between gap-2">
                                    <h3 className="text-sm sm:text-base text-slate-800 tracking-wide font-medium">Kết
                                        quả
                                        xét nghiệm có thể nhận được trong bao lâu?</h3>
                                    <FiPlusCircle className="text-blue-500 text-2xl" />
                                </div>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen[`accordion3`] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="flex gap-2 items-center px-4 py-3 border-b-[0.5px] text-slate-700">
                                        Thông thường, kết quả sẽ được trả trong vòng 24-48 giờ. Tuy nhiên, một số xét
                                        nghiệm
                                        đặc thù có thể cần thời gian lâu hơn. Kết quả có thể được nhận qua email, ứng
                                        dụng
                                        di động hoặc trực tiếp tại phòng khám.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion">
                            <div onClick={() => toggleAccordion(`accordion4`)}
                                 className="px-4 py-3 ring-1 ring-inset bg-blue-100/50 ring-slate-200 rounded-md cursor-pointer">
                                <div className="flex justify-between gap-2">
                                    <h3 className="text-sm sm:text-base text-slate-800 tracking-wide font-medium">Tôi có
                                        cần
                                        nhịn ăn trước khi làm xét nghiệm không?</h3>
                                    <FiPlusCircle className="text-blue-500 text-2xl" />
                                </div>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen[`accordion4`] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="flex gap-2 items-center px-4 py-3 border-b-[0.5px] text-slate-700">
                                        Một số xét nghiệm, chẳng hạn như xét nghiệm đường huyết hoặc mỡ máu, yêu cầu bạn
                                        nhịn ăn từ 8-12 giờ trước khi lấy mẫu. Nhân viên MedLab sẽ tư vấn chi tiết khi
                                        bạn
                                        đặt lịch.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right flex flex-col gap-2">
                        <div className="accordion">
                            <div onClick={() => toggleAccordion(`accordion5`)}
                                 className="px-4 py-3 ring-1 ring-inset bg-blue-100/50 ring-slate-200 rounded-md cursor-pointer">
                                <div className="flex justify-between gap-2">
                                    <h3 className="text-sm sm:text-base text-slate-800 tracking-wide font-medium">MedLab
                                        có
                                        cung cấp dịch vụ xét nghiệm tại nhà không?</h3>
                                    <FiPlusCircle className="text-blue-500 text-2xl" />
                                </div>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen[`accordion5`] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="flex gap-2 items-center px-4 py-3 border-b-[0.5px] text-slate-700">
                                        Có, MedLab cung cấp dịch vụ lấy mẫu tại nhà để giúp khách hàng tiết kiệm thời
                                        gian
                                        và thuận tiện hơn. Bạn chỉ cần đặt lịch trước, và nhân viên y tế sẽ đến tận nơi
                                        để
                                        hỗ trợ.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion">
                            <div onClick={() => toggleAccordion(`accordion6`)}
                                 className="px-4 py-3 ring-1 ring-inset bg-blue-100/50 ring-slate-200 rounded-md cursor-pointer">
                                <div className="flex justify-between gap-2">
                                    <h3 className="text-sm sm:text-base text-slate-800 tracking-wide font-medium">Chi
                                        phí
                                        xét nghiệm tại MedLab là bao nhiêu?</h3>
                                    <FiPlusCircle className="text-blue-500 text-2xl" />
                                </div>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen[`accordion6`] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="flex gap-2 items-center px-4 py-3 border-b-[0.5px] text-slate-700">
                                        Chi phí xét nghiệm phụ thuộc vào loại xét nghiệm bạn thực hiện. MedLab cung cấp
                                        bảng
                                        giá rõ ràng và minh bạch trên website và tại phòng khám. Chúng tôi cũng có các
                                        gói
                                        xét nghiệm với ưu đãi đặc biệt.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion">
                            <div onClick={() => toggleAccordion(`accordion7`)}
                                 className="px-4 py-3 ring-1 ring-inset bg-blue-100/50 ring-slate-200 rounded-md cursor-pointer">
                                <div className="flex justify-between gap-2">
                                    <h3 className="text-sm sm:text-base text-slate-800 tracking-wide font-medium">Tôi
                                        cần
                                        làm gì nếu phát hiện kết quả bất thường?</h3>
                                    <FiPlusCircle className="text-blue-500 text-2xl" />
                                </div>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen[`accordion7`] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="flex gap-2 items-center px-4 py-3 border-b-[0.5px] text-slate-700">
                                        Nếu nhận được kết quả bất thường, bạn nên liên hệ ngay với bác sĩ hoặc đội ngũ
                                        MedLab để được tư vấn và hướng dẫn. Chúng tôi luôn sẵn sàng hỗ trợ bạn trong
                                        việc
                                        giải thích kết quả và đề xuất phương pháp xử lý.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion">
                            <div onClick={() => toggleAccordion(`accordion8`)}
                                 className="px-4 py-3 ring-1 ring-inset bg-blue-100/50 ring-slate-200 rounded-md cursor-pointer">
                                <div className="flex justify-between gap-2">
                                    <h3 className="text-sm sm:text-base text-slate-800 tracking-wide font-medium">MedLab
                                        có
                                        hỗ trợ bảo hiểm y tế không?</h3>
                                    <FiPlusCircle className="text-blue-500 text-2xl" />
                                </div>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen[`accordion8`] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="flex gap-2 items-center px-4 py-3 border-b-[0.5px] text-slate-700">
                                        Hiện tại, MedLab hỗ trợ thanh toán thông qua một số bảo hiểm y tế đối tác. Bạn
                                        hãy
                                        mang theo thẻ bảo hiểm khi đến phòng khám để được hướng dẫn chi tiết.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {bookingModal && (
                <BookingModal />
            )}
        </>
    );
}

export default AboutPage;