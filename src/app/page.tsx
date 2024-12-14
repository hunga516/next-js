import images from '../../public/images';
import { FaArrowRightLong, FaRegCircleCheck } from 'react-icons/fa6';
import { MdOutlineSearch } from 'react-icons/md';
import { TbCash } from 'react-icons/tb';
import { RxPencil1 } from 'react-icons/rx';

import Image from "next/image";
import {BlogList} from "@/app/components/Blog/BlogList";
import {GetServerSideProps} from "next";
import {getBlogs} from "@/app/services/api";
import {Blog} from "@/app/types/blog";

export default async function HomePage() {
    const blogs:Blog[] = await getBlogs();

    return (
        <>
            {/*Hero section*/}
            <div
                className="w-full relative h-[300px] md:h-[600px] rounded-2xl bg-cover lg:bg-cover bg-top"
                style={{
                    backgroundImage: `url(${images.background1.src})`,
                    backgroundRepeat: 'no-repeat',
                    aspectRatio: 16 / 9,
                }}
            >
                <div className="grid md:grid-cols-2 grid-cols-3 p-6 md:p-8 h-full">
                    <div className="flex flex-col gap-2 md:gap-6 col-span-2 md:col-span-1 md:mt-24">
                        <div className="title">
                            <h1 className="text-[#0093DD] font-bold max-h-[110px] md:max-h-screen text-2xl md:text-4xl lg:text-5xl leading-7 md:leading-[40px] lg:leading-[50px] xl:leading-[50px] text-left tracking-wide">Xét
                                nghiệm chính xác, sức khoẻ an tâm
                            </h1>
                            <p className="hidden md:block text-slate-600 text-sm md:text-base mt-4 overflow-hidden">
                                Medlab tự hào là trung tâm xét nghiệm hàng đầu, cung cấp dịch vụ chính xác, nhanh
                                chóng
                                với đội ngũ
                                chuyên gia giàu kinh nghiệm và trang thiết bị hiện đại.
                            </p>
                            <p className="block md:hidden text-slate-600 text-sm mt-6">
                                Medlab tự hào là một trong top trung tâm xét nghiệm nhanh, chính xác.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                className="hidden md:flex items-center gap-1 bg-[#0093DD] px-2 py-1 md:px-3 md:py-1 lg:px-4 lg:py-1 text-white text-nowrap md:text-lg rounded-md text-[14px]">
                                Đặt lịch xét nghiệm
                            </button>
                            <button className="hidden md:flex items-center gap-2 text-sm text-nowrap">
                                Tìm hiểu thêm
                                <FaArrowRightLong className="text-xs" />
                            </button>
                        </div>
                        <div className="search-mobile">
                            <button
                                className="flex md:hidden items-center gap-1 bg-[#0093DD] px-2 py-1 md:px-3 md:py-1 lg:px-4 lg:py-1 text-white text-nowrap md:text-lg rounded-md text-[14px]">
                                <MdOutlineSearch />
                                Tra cứu kết quả xét nghiệm
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className="absolute left-8 bottom-0 hidden md:flex items-center gap-x-8 px-8 py-4 bg-yellow-300/60 outline outline-8 outline-white rounded-2xl before:w-[25px] before:h-[25px] before:absolute before:bottom-0 before:left-[-33px] before:shadow-curve-br before:rounded-2xl after:w-[25px] after:h-[25px] after:bottom-0 after:-right-[33px] after:rounded-2xl after:absolute after:shadow-curve-bl">
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-xs md:text-3xl text-nowrap text-blue-500">35.5N</p>
                        <p className="text-blue-500 text-xs md:text-sm tracking-wide text-nowrap">Khách
                            hàng</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-xs md:text-3xl text-nowrap text-blue-500">120.5N</p>
                        <p className="text-blue-500 text-xs md:text-sm tracking-wide text-nowrap">Lượt xét
                            nghiệm</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-xs md:text-3xl text-nowrap text-blue-500">+30</p>
                        <p className="text-blue-500 text-xs md:text-sm tracking-wide text-nowrap">Đối tác</p>
                    </div>
                </div>
            </div>

            {/*Quy trình section*/}
            <div className="mt-12 md:mt-20 md:px-8 lg:px-0 lg:mx-32">
                <div className="">
                    <h1 className="text-lg md:text-2xl font-semibold leading-1 font-sans">Quy trình
                        <span
                            className="underline underline-offset-8 decoration-2 decoration-yellow-400"> Xét nghiệm</span>
                    </h1>
                </div>

                <div
                    className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-4 sm:gap-8 md:gap-12 mt-4 md:mt-6">
                    <div
                        className="rounded-md"
                    >
                        <div className="grid grid-cols-4 sm:grid-cols-3 h-full">
                            <div className="col-span-3 sm:col-span-2 bg-white rounded-xl p-4 sm:px-0 pl-0 h-full">
                                <h1 className="text-sm md:text-lg bg-blue-100 px-2 py-1 rounded-lg">Bước 1: Đăng
                                    ký <span
                                        className="hidden sm:inline">thông
                                    tin</span></h1>
                                <p className="text-slate-800 text-xs md:text-base  mt-2 tracking-wide">Bệnh
                                    nhân cung cấp thông tin cá
                                    nhân và lịch sử
                                    bệnh tại quầy tiếp nhận hoặc đăng ký ngay trên website.</p>
                            </div>
                            <div className="relative">
                                <Image src={images.medregistration} alt="bước 1"
                                     className="absolute bottom-8 sm:bottom-0 md:bottom-0 right-0 w-16 sm:w-20 md:w-24" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="rounded-md"
                    >
                        <div className="grid grid-cols-4 sm:grid-cols-3 h-full">
                            <div
                                className="hidden md:block col-span-3 sm:col-span-2 bg-white rounded-xl p-4 sm:px-0 pr-0 h-full">
                                <h1 className="text-sm md:text-lg bg-yellow-100 px-2 py-1 rounded-lg">Bước 2: Tiếp
                                    nhận</h1>
                                <p className="text-slate-800 text-xs md:text-base  mt-2 tracking-wide">Nhân viên tiếp
                                    nhận thông tin, kiểm tra giấy tờ và sắp xếp lịch khám hoặc xét nghiệm, sau đó thông
                                    báo ngày giờ cho bệnh nhân.</p>
                            </div>
                            <div className="relative">
                                <Image src={images.medwaiting} alt="bước 2"
                                     className="absolute bottom-8 sm:bottom-0 md:bottom-0 left-0 md:left-auto md:right-0 w-16 sm:w-20 md:w-24" />
                            </div>
                            <div
                                className="block md:hidden col-span-3 sm:col-span-2 bg-white rounded-xl p-4 sm:px-0 pr-0 h-full">
                                <h1 className="text-sm md:text-lg bg-sky-100 px-2 py-1 rounded-lg">Bước 2: Tiếp
                                    nhận</h1>
                                <p className="text-slate-800 text-xs md:text-base mt-2 tracking-wide">Nhân viên tiếp
                                    nhận thông tin, kiểm tra giấy tờ và sắp xếp lịch khám hoặc xét nghiệm, sau đó thông
                                    báo ngày giờ cho bệnh nhân.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="rounded-md"
                    >
                        <div className="grid grid-cols-4 sm:grid-cols-3 h-full">
                            <div className="col-span-3 sm:col-span-2 bg-white rounded-xl p-4 sm:px-0 pl-0 h-full">
                                <h1 className="text-sm md:text-lg bg-yellow-100 px-2 py-1 rounded-lg">Bước 3: Xét
                                    nghiệm</h1>
                                <p className="text-slate-800 text-xs md:text-base mt-2 tracking-wide">Bệnh nhân đến
                                    theo lịch hẹn, thực hiện xét nghiệm dưới sự hướng dẫn chi tiết của nhân viên y
                                    tế.</p>
                            </div>
                            <div className="relative">
                                <Image src={images.medprocess} alt="bước 3"
                                     className="absolute bottom-8 sm:bottom-0 md:bottom-0 right-0 w-16 sm:w-20 md:w-24" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="rounded-md"
                    >
                        <div className="grid grid-cols-4 sm:grid-cols-3 h-full">
                            <div
                                className="hidden md:block col-span-3 sm:col-span-2 bg-white rounded-xl p-4 sm:px-0 h-full">
                                <h1 className="text-sm md:text-lg bg-sky-100 px-2 py-1 rounded-lg">Bước 4: Tra cứu kết
                                    quả</h1>
                                <p className="text-slate-800 text-xs md:text-base  mt-2 tracking-wide">Bệnh nhân nhận
                                    kết quả tại bệnh viện hoặc tra cứu trực tuyến, bác sĩ sẽ giải thích và tư vấn điều
                                    trị nếu cần</p>
                            </div>
                            <div className="relative">
                                <Image src={images.medsearch} alt="bước 4"
                                     className="absolute bottom-8 sm:bottom-0 md:bottom-0 left-0 md:left-auto md:right-0 w-16 sm:w-20 md:w-24" />
                            </div>
                            <div
                                className="block md:hidden col-span-3 sm:col-span-2 bg-white rounded-xl p-4 sm:px-0 pr-0 h-full">
                                <h1 className="text-sm md:text-lg bg-sky-100 px-2 py-1 rounded-lg">Bước 4: Tra cứu kết
                                    quả</h1>
                                <p className="text-slate-800 text-xs md:text-base mt-2 tracking-wide">Bệnh nhân nhận
                                    kết quả tại bệnh viện hoặc tra cứu trực tuyến, bác sĩ sẽ giải thích và tư vấn điều
                                    trị nếu cần</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Dịch vụ section*/}
            <div className="mt-12 md:mt-20 md:px-8 lg:px-0 lg:mx-32">
                <div className="">
                    <p className="text-sky-500 text-sm md:text-lg mx-auto font-sans">Dịch Vụ</p>
                    <p className="text-slate-800 text-lg md:text-2xl font-semibold font-sans mx-auto mt-2">Doanh
                        mục <span
                            className="underline underline-offset-8 decoration-2 decoration-sky-500">Xét nghiệm</span> của
                        Medlab</p>
                </div>
                <div
                    className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-9 gap-4 mt-6 md:mt-8">
                    <div className="grid-item shadow-md p-2 rounded-2xl">
                        <Image src={images.huyethoc} alt="" className="w-16 sm:w-20 md:w-16 px-2 py-1 mx-auto" />
                        <p className="text-sky-700 text-xs md:textsmm text-center overflow-hidden text-ellipsis text-nowrap w-full mt-2">Huyết
                            học</p>
                    </div>
                    <div className="grid-item shadow-md p-2 rounded-2xl">
                        <Image src={images.sinhhoamiendich} alt="" className="w-16 sm:w-20 md:w-16 px-2 py-1 mx-auto" />
                        <p className="text-sky-700 text-xs md:text-sm  text-center overflow-hidden text-ellipsis text-nowrap w-full mt-2">Sinh
                            hoá - Miễn dịch</p>
                    </div>
                    <div className="grid-item shadow-md p-2 rounded-2xl">
                        <Image src={images.sinhhoa} alt="" className="w-16 sm:w-20 md:w-16 px-2 py-1 mx-auto" />
                        <p className="text-sky-700 text-xs md:text-sm  text-center overflow-hidden text-ellipsis text-nowrap w-full mt-2">Sinh
                            hoá</p>
                    </div>
                    <div className="grid-item shadow-md p-2 rounded-2xl">
                        <Image src={images.nuoctieu} alt="" className="w-16 sm:w-20 md:w-16 px-2 py-1 mx-auto" />
                        <p className="text-sky-700 text-xs md:text-sm  text-center overflow-hidden text-ellipsis text-nowrap w-full mt-2">Nước
                            tiểu</p>
                    </div>
                    <div className="grid-item shadow-md p-2 rounded-2xl">
                        <Image src={images.xetnghiemdich} alt="" className="w-16 sm:w-20 md:w-16 px-2 py-1 mx-auto" />
                        <p className="text-sky-700 text-xs md:text-sm  text-center overflow-hidden text-ellipsis text-nowrap w-full mt-2">Xét
                            nghiệm dịch</p>
                    </div>
                    <div className="grid-item shadow-md p-2 rounded-2xl">
                        <Image src={images.vitrung} alt="" className="w-16 sm:w-20 md:w-16 px-2 py-1 mx-auto" />
                        <p className="text-sky-700 text-xs md:text-sm  text-center overflow-hidden text-ellipsis text-nowrap w-full mt-2">Vi
                            trùng</p>
                    </div>
                    <div className="grid-item shadow-md p-2 rounded-2xl">
                        <Image src={images.sinhhocphantu} alt="" className="w-16 sm:w-20 md:w-16 px-2 py-1 mx-auto" />
                        <p className="text-sky-700 text-xs md:text-sm  text-center overflow-hidden text-ellipsis text-nowrap w-full mt-2">Sinh
                            học phân tử</p>
                    </div>
                    <div className="grid-item shadow-md p-2 rounded-2xl">
                        <Image src={images.chuandoan} alt="" className="w-16 sm:w-20 md:w-16 px-2 py-1 mx-auto" />
                        <p className="text-sky-700 text-xs md:text-sm  text-center overflow-hidden text-ellipsis text-nowrap w-full mt-2">Chuẩn
                            đoán</p>
                    </div>
                    <div className="grid-item shadow-md p-2 rounded-2xl">
                        <Image src={images.visinh} alt="" className="w-16 sm:w-20 md:w-16 px-2 py-1 mx-auto" />
                        <p className="text-sky-700 text-xs md:text-sm  text-center overflow-hidden text-ellipsis text-nowrap w-full mt-2">Vi
                            sinh</p>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-6 md:mt-12">
                    <div className="text-sky-600 text-sm md:text-sm flex items-center gap-2">
                        Xem bảng giá dịch vụ
                        <TbCash />
                    </div>
                    <p className="hidden md:block text-slate-600 text-sm md:text-xs">Cập nhật 1 ngày trước</p>
                </div>
            </div>

            {/*Các gói xét nghiệm section*/}
            <div className="mt-12 md:mt-20 md:px-8 lg:px-0 lg:mx-32">
                <div className="">
                    <p className="text-slate-800 text-xl md:text-2xl font-semibold mx-auto font-sans">Các gói xét
                        nghiệm</p>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-2 gap-2 mt-4 md:mt-6">
                    <div className="bg-blue-100 p-4 rounded-md flex items-start gap-4">
                        <div className="content col-span-2 flex flex-col ">
                            <h2 className="text-base md:text-lg font-medium">Gói xét nghiệm tổng quát</h2>
                            <p className="text-sm md:text-base text-sky-600 font-medium">Giá chỉ từ 499.000đ</p>
                            <p className="text-slate-600 text-sm md:text-base max-h-40 md:max-h-48 overflow-x-hidden mt-2">Gói
                                xét
                                nghiệm tổng quát giúp kiểm tra sức khỏe toàn diện, bao gồm các xét nghiệm máu, nước tiểu
                                và chỉ số sinh hóa. Kết quả hỗ trợ phát hiện sớm các bệnh lý tiềm ẩn.</p>
                        </div>
                        <Image src={images.tongquat} alt="Hình ảnh gói xét nghiệm tổng quát"
                             className="rounded-lg w-24" />
                    </div>
                    <div className="bg-blue-100 p-4 rounded-md flex items-start gap-4">
                        <div className="content col-span-2 flex flex-col">
                            <h2 className="text-base md:text-lg font-medium">Gói xét nghiệm NIPT</h2>
                            <p className="text-sm md:text-base text-sky-600 font-medium">Giá chỉ từ 1.200.000đ</p>
                            <p className="text-slate-600 text-sm md:text-base max-h-40 md:max-h-48 overflow-x-hidden mt-2">Gói
                                xét
                                nghiệm NIPT giúp kiểm tra và phát hiện các rối loạn di truyền sớm trong thai kỳ, đảm bảo
                                sức khỏe mẹ và bé.</p>
                        </div>
                        <Image src={images.nipt} alt="Hình ảnh gói xét nghiệm NIPT" className="rounded-lg w-24" />
                    </div>
                    <div className="bg-blue-100 p-4 rounded-md flex items-start gap-4">
                        <div className="content col-span-2 flex flex-col">
                            <h2 className="text-base md:text-lg font-medium">Gói xét nghiệm vi chất</h2>
                            <p className="text-sm md:text-base text-sky-600 font-medium">Giá chỉ từ 800.000đ</p>
                            <p className="text-slate-600 text-sm md:text-base max-h-40 md:max-h-48 overflow-x-hidden mt-2">Gói
                                xét
                                nghiệm vi chất giúp xác định sự thiếu hụt các vitamin và khoáng chất trong cơ thể, từ đó
                                hỗ trợ điều chỉnh chế độ dinh dưỡng phù hợp.</p>
                        </div>
                        <Image src={images.vichat} alt="Hình ảnh gói xét nghiệm vi chất" className="rounded-lg w-24" />
                    </div>
                    <div className="bg-blue-100 p-4 rounded-md flex items-start gap-4">
                        <div className="content col-span-2 flex flex-col">
                            <h2 className="text-base md:text-lg font-medium">Gói xét nghiệm tim mạch</h2>
                            <p className="text-sm md:text-base text-sky-600 font-medium">Giá chỉ từ 1.500.000đ</p>
                            <p className="text-slate-600 text-sm md:text-base max-h-40 md:max-h-48 overflow-x-hidden mt-2">Gói
                                xét
                                nghiệm tim mạch cung cấp các thông tin quan trọng về chức năng tim và các yếu tố nguy
                                cơ, giúp phát hiện sớm và phòng ngừa các bệnh lý tim mạch.</p>
                        </div>
                        <Image src={images.timmach} alt="Hình ảnh gói xét nghiệm tim mạch" className="rounded-lg w-24" />
                    </div>
                </div>
            </div>

            {/*Đối tượng xét nghiệm section*/}
            <div className="mt-12 md:mt-20 md:px-8 lg:px-0 lg:mx-32">
                <p className="text-slate-800 text-xl md:text-2xl mx-auto font-semibold font-sans">Đối tượng xét
                    nghiệm</p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-4 md:mt-6">
                    <div className="relative h-40 md:h-52 lg:h-56 bg-blue-500 rounded-lg">
                        <p className="text-base font-bold text-blue-100 mx-auto w-fit mt-4">MẸ BẦU</p>
                        <Image src={images.mebau} alt=""
                             className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[65px] md:w-2/3 lg:w-[50%]" />
                    </div>
                    <div className="relative h-40 md:h-52 lg:h-56 bg-blue-100 rounded-lg">
                        <p className="text-base font-bold text-blue-500 mx-auto w-fit mt-4">TRẺ EM</p>
                        <Image src={images.treem} alt=""
                             className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[68px] md:w-3/4 lg:w-[50%]" />
                    </div>
                    <div className="relative h-40 md:h-52 lg:h-56 bg-blue-500 rounded-lg">
                        <p className="text-base font-bold text-blue-100 mx-auto w-fit mt-4">NỮ GIỚI</p>
                        <Image src={images.nugioi} alt=""
                             className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[68px] md:w-3/5 lg:w-[45%]" />
                    </div>
                    <div className="relative h-40 md:h-52 lg:h-56 bg-blue-100 rounded-lg">
                        <p className="text-base font-bold text-blue-500 mx-auto w-fit mt-4">TIỀN HÔN NHÂN</p>
                        <Image src={images.tienhonnhan} alt=""
                             className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[68px] md:w-3/5 lg:w-[45%]" />
                    </div>
                    <div className="relative h-40 md:h-52 lg:h-56 bg-blue-500 rounded-lg">
                        <p className="text-base font-bold text-blue-100 mx-auto w-fit mt-4">NAM GIỚI</p>
                        <Image src={images.namgioi} alt=""
                             className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[81px] md:w-3/4 lg:w-[55%]" />
                    </div>
                </div>
            </div>

            {/*Đánh giá section*/}
            <div className="mt-12 md:mt-20 md:px-8 lg:px-0 lg:mx-32">

                <div className="grid grid-cols-3 gap-2 md:gap-4">
                    <div className="col-span-3 md:col-span-1">
                        <h2 className="text-slate-800 text-xl md:text-2xl leading-snug font-sans font-medium">Khách
                            hàng nói gì về <span
                                className="bg-clip-text text-transparent bg-gradient-to-br from-sky-900 to-sky-400 text-xl md:text-2xl">Medlab Vĩnh Viễn</span>
                        </h2>

                        <div className="flex flex-row items-center gap-6 mt-2">
                            <button
                                className="flex items-center gap-2 px-2 py-0.5 md:px-4 md:py-1 text-white font-semibold rounded-lg text-xs md:text-sm bg-gradient-to-tl from-amber-500 to-yellow-400/70">
                                Để lại đánh giá
                                <RxPencil1 />
                            </button>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-2 grid grid-cols-2 gap-4 mt-2 md:mt-0">
                        <div className="bg-slate-100 p-2 md:p-4 rounded-lg ">
                            <div className="flex items-start justify-between gap-4">
                                <p className="text-black text-sm">Khách hàng mới</p>
                                <div className="flex items-center">
                                    {/*<Image*/}
                                    {/*    className="object-cover w-5 h-5 md:w-8 md:h-8 sm:w-10 sm:h-10 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"*/}
                                    {/*    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"*/}
                                    {/*    alt=""*/}
                                    {/*    layout="fill"*/}
                                    {/*/>*/}
                                    {/*<Image*/}
                                    {/*    className="object-cover cover  w-5 h-5 md:w-8 md:h-8 sm:w-10 sm:h-10 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"*/}
                                    {/*    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"*/}
                                    {/*    alt=""*/}
                                    {/*    layout="fill"*/}
                                    {/*/>*/}
                                    {/*<Image*/}
                                    {/*    className="hidden lg:block  object-cover cover w-5 h-5 md:w-8 md:h-8 sm:w-10 sm:h-10 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"*/}
                                    {/*    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"*/}
                                    {/*    alt=""*/}
                                    {/*    layout="fill"*/}
                                    {/*/>*/}
                                    {/*<Image*/}
                                    {/*    className="hidden lg:block object-cover cover w-5 h-5 md:w-8 md:h-8 sm:w-10 sm:h-10 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"*/}
                                    {/*    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"*/}
                                    {/*    alt=""*/}
                                    {/*layout="fill"*/}
                                    {/*/>*/}
                                    <p className="flex items-center justify-center cover  w-5 h-5 md:w-8 md:h-8 sm:w-10 sm:h-10 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 mt-6 md:mt-12 items-end">
                                <div className="w-full col-span-2">
                                    <p className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-yellow-500">91%</p>
                                    <p className="text-xs md:text-sm text-slate-600 font-medium">Khách hàng hài
                                        lòng</p>
                                </div>

                                <button className="hidden lg:flex text-nowrap text-xs items-center gap-2">
                                    Đặt lịch ngay
                                    <FaRegCircleCheck />
                                </button>
                            </div>
                        </div>

                        <div className="bg-slate-100 rounded-lg overflow-hidden grid grid-rows-2">
                            <div
                                className="border-b-[1px] bg-gradient-to-r p-2 md:p-4 w-full flex justify-center items-center from-green-400 to-blue-500 text-sm md:text-base font-semibold text-transparent bg-clip-text text-nowrap">93%
                                <p className="hidden md:block mx-1">khách hàng</p> hài lòng
                            </div>
                            <div
                                className="bg-gradient-to-r from-yellow-400 to-yellow-600 w-full flex justify-center items-center text-sm md:text-base text-nowrap font-semibold text-transparent bg-clip-text">85%
                                <p className="hidden md:block mx-1">khách hàng</p> quay lại
                            </div>
                        </div>
                    </div>

                    {/*Thẻ đệm*/}
                    <div></div>
                    {/*/Rating item*/}
                    <div className="col-span-3 md:col-span-2 bg-slate-100 p-4 rounded-lg">
                        <div className="flex flex-row gap-1">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                        alt="avatar-customer"
                                        width={16}
                                        height={16}
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <p className="flex items-center gap-2 text-slate-800 text-xs md:text-sm tracking-wide">
                                        Chị Mai, Bình Tân TP.HCM
                                        {/*<Rating />*/}
                                    </p>
                                </div>
                                <p className="text-slate-600 text-sm">3 giờ trước</p>
                            </div>
                        </div>
                        <div className="w-full mt-4 text-[14px]">
                            Dịch vụ tại đây rất tuyệt vời! Nhân viên chuyên nghiệp, nhiệt tình hướng dẫn, kết quả xét
                            nghiệm nhanh chóng và chính xác. Tôi sẽ tiếp tục tin tưởng lựa chọn.
                        </div>
                    </div>
                    {/*Thẻ đệm*/}
                    <div></div>
                    {/*/Rating item*/}
                    <div className="col-span-3 md:col-span-2 bg-slate-100 p-4 rounded-lg">
                        <div className="flex flex-row gap-1">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                        alt="avatar-customer"
                                        width={16}
                                        height={16}
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <p className="flex items-center gap-2 text-slate-800 text-xs md:text-sm tracking-wide">
                                        Anh Hùng, Quận 1 TP.HCM
                                        {/*<Rating />*/}
                                    </p>
                                </div>
                                <p className="text-slate-600 text-sm">3 giờ trước</p>
                            </div>
                        </div>
                        <div className="w-full mt-4 text-[14px]">
                            Medlab thực sự đáng tin cậy. Đội ngũ nhân viên không chỉ thân thiện mà còn tư vấn rất chi
                            tiết, giúp tôi hiểu rõ hơn về tình trạng sức khỏe của mình
                        </div>
                    </div>
                    {/*Thẻ đệm*/}
                    <div></div>
                    {/*/Rating item*/}
                    <div className="col-span-3 md:col-span-2 bg-slate-100 p-4 rounded-lg">
                        <div className="flex flex-row gap-1">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                                        alt="avatar-customer"
                                        width={16}
                                        height={16}
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <p className="flex items-center gap-2 text-slate-800 text-xs md:text-sm tracking-wide">
                                        Chị Thảo, Quận 10 TP.HCM
                                        {/*<Rating />*/}
                                    </p>
                                </div>
                                <p className="text-slate-600 text-sm">3 giờ trước</p>
                            </div>
                        </div>
                        <div className="w-full mt-4 text-[14px]">
                            Tôi rất ấn tượng với cơ sở vật chất hiện đại và quy trình xét nghiệm nhanh gọn tại đây. Kết
                            quả trả đúng hẹn, không để khách hàng phải chờ đợi.
                        </div>
                    </div>
                </div>
            </div>

            {/*Tin tức section*/}
            <BlogList blogs={blogs} />
        </>
    );
}
