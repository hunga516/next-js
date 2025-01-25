import { FaCalendarCheck, FaPhone } from 'react-icons/fa';
import images from '../../../assets/images';

function Footer() {

    return (
        <>
            <div className="w-full">
                <div className="" style={{ width: '100%' }}>
                    <iframe
                        title="Google Map"
                        width="100%"
                        height="400"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=250%20%C4%90.%20V%C4%A9nh%20Vi%E1%BB%85n,%20Ph%C6%B0%E1%BB%9Dng%204,%20Qu%E1%BA%ADn%2010,%20H%E1%BB%93%20Ch%C3%AD%20Minh,%20Vi%E1%BB%87t%20Nam+(Trung%20T%C3%A2m%20Xe%CC%81t%20Nghi%C3%AA%CC%A3m%20Y%20T%C3%AA%CC%81%20Medlab)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                        Your browser does not support iframes.
                    </iframe>
                </div>
            </div>
            <div
                className="w-full p-4 sm:px-8 sm:py-4 md:px-16 md:py-0 md:pb-24 bg-blue-100/50 rounded-tr-lg rounded-tl-lg">
                <div
                    className="flex flex-col md:flex-row  items-center justify-between gap-2 pt-0 md:pt-8 pb-4  border-b-[0.5px] border-sky-400">
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="" className="w-8 h-8" />
                        <p className="bg-gradient-to-br from-sky-900 to-sky-500 text-transparent bg-clip-text text-sm font-semibold font-sans">Medlab
                            Vĩnh Viễn</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div
                            className="flex items-center text-[10px] sm:text-base mt-2 gap-2 text-nowrap bg-white rounded-full px-3 py-1 font-medium tracking-wide text-sky-600">
                            <FaPhone />
                            0909 636293
                        </div>
                        <div
                            className="flex items-center text-[10px] sm:text-base mt-1 gap-2 text-nowrap bg-white rounded-full px-3 py-1 font-medium tracking-wide text-sky-600">
                            <FaPhone />
                            028 39273929
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4 gap-y-8 mt-4">
                    <div className="grid-item-1 col-span-2">
                        <h1 className="text-[10px] sm:text-sm font-sans font-semibold text-sky-600">
                            CÔNG TY TNHH TM DV Y TẾ MEDLAB XÉT NGHIỆM Y KHOA - TẾ BÀO HỌC
                        </h1>

                        <p className="text-sky-600 text-[10px] sm:text-sm mt-1">Mã số thuế: 0314145380</p>
                        <p className="text-sky-600 text-[10px] sm:text-sm mt-1">Ngày cấp: 06/12/2016</p>
                    </div>
                    <div className="grid-item-3">
                        <h2 className="text-[10px] sm:text-sm text-sky-600 font-bold">TRA CỨU</h2>

                        <p className="text-[10px] sm:text-sm text-sky-600 mt-1 md:mt-2">Khách hàng tra cứu</p>
                        <p className="text-[10px] sm:text-sm text-sky-600 mt-1">Đơn vị gửi mẫu tra cứu</p>
                    </div>
                    <div className="grid-item-2">
                        <h3 className="text-[10px] sm:text-sm font-bold text-sky-600 flex items-center gap-1 text-nowrap">
                            GIỜ LÀM VIỆC
                        </h3>
                        <div className="mt-1 md:mt-2">
                            <p className="text-[10px] sm:text-sm text-sky-600">Thứ 2 - Thứ 7 <span
                                className="hidden md:inline">lúc 6h30 - 19h30</span></p>
                            <p className="text-sky-600 md:hidden text-xs">6h30 - 19h30</p>
                            <p className="text-[10px] sm:text-sm text-sky-600 mt-1">Ngày lễ, chủ nhật <span
                                className="hidden md:inline">lúc 7h00 - 12h00</span></p>
                            <p className="text-sky-600 md:hidden text-xs">7h00 - 12h00</p>
                        </div>
                    </div>
                    <div className="grid-item-4 col-span-2">
                        <h2 className="text-[10px] sm:text-sm font-bold text-sky-600 ">ĐỊA CHỈ</h2>
                        <p className="text-sky-600 text-[10px] sm:text-sm mt-1 md:mt-2">Trung Tâm Xét Nghiệm Y Khoa
                            Medlab, <p
                                className="">250 Đ. Vĩnh Viễn, Phường 4, Quận 10, Hồ Chí Minh, Việt Nam</p>
                        </p>
                    </div>
                    <div className="grid-item-5">
                        <h2 className="text-[10px] sm:text-sm text-sky-600 font-bold">LIÊN KẾT <span
                            className="hidden md:inline">XÃ HỘI</span></h2>
                        <div className="flex mt-2.5 items-center gap-1 md:gap-3">
                            <img src={images.facebook} alt="facebook logo" className="w-4 h-4 md:w-6 md:h-6" />
                            <img src={images.zalo} alt="zalo logo" className="w-4 h-4 md:w-6 md:h-6" />
                            <img src={images.insta} alt="insta logo" className="w-4 h-4 md:w-6 md:h-6" />
                        </div>
                    </div>
                    <div className="grid-item-6 col-span-2 md:col-span-1">
                        <h2 className="text-[10px] sm:text-sm text-sky-600 font-bold">PHƯƠNG THỨC THANH TOÁN</h2>
                        <div className="flex mt-1 md:mt-2 items-center gap-1 md:gap-3">
                            <img src={images.momo} alt="momo logo" className="w-4 h-4 md:w-6 md:h-6" />
                            <img src={images.vietqr} alt="vietqr logo" className="h-4 md:h-6" />
                            <img src={images.tienmat} alt="tienmat logo" className="h-6 md:h-8" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
        ;
}

export default Footer;
