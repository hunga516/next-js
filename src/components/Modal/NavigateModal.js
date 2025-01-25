import { BiSupport } from 'react-icons/bi';
import { RiTestTubeFill } from 'react-icons/ri';
import { PiHospitalBold } from 'react-icons/pi';


import { FaPhone } from 'react-icons/fa';
import Link from "next/link";
import {useRouter} from "next/router";

function NavigateModal({toggleIsShowNavigateModal}) {
    const location = useRouter();

    const closeModal = (e) => {
        if(e.target === e.currentTarget) {
            toggleIsShowNavigateModal();
        }
    }

    return (
        <div className="modal fixed inset-0 bg-slate-100/50 z-20 mt-11" onClick={closeModal}>
            <div className="absolute flex flex-col justify-between top-0 bottom-0 left-0 w-52 md:w-80 bg-white py-4 md:py-8 px-2">
                <div>
                    <Link href="/" onClick={() => toggleIsShowNavigateModal()}
                          className={`mt-2 flex items-center gap-2 text-sm md:text-lg font-medium ${location.pathname === "/" ? 'bg-slate-100' : ""} px-4 py-2  rounded-lg`}>Trang
                        chủ
                    </Link>
                    <Link href="/dich-vu" onClick={() => toggleIsShowNavigateModal()}
                          className={`mt-2 flex items-center gap-2 text-sm md:text-lg font-medium ${location.pathname === "/price" ? 'bg-slate-100' : ""} px-4 py-2 rounded-lg`}>Dịch
                        vụ
                    </Link>
                    <Link href="/ve-medlab-vinh-vien" onClick={() => toggleIsShowNavigateModal()}
                          className={`mt-2 flex items-center gap-2 text-sm md:text-lg font-medium ${location.pathname === "/about" ? 'bg-slate-100' : ""} px-4 py-2 rounded-lg`}>Về
                        chúng tôi
                    </Link>
                    <Link href="/ho-tro" onClick={() => toggleIsShowNavigateModal()}
                          className={`mt-2 flex items-center gap-2 text-sm md:text-lg font-medium ${location.pathname === "/support" ? 'bg-slate-100' : ""} px-4 py-2 rounded-lg`}>Tư
                        vấn
                    </Link>
                    <div className="mt-12 w-full h-[0.5px] bg-slate-300/70"></div>
                    <div className="flex flex-col gap-1 items-start">
                        {/*<Link*/}
                        {/*    onClick={() => toggleIsShowNavigateModal()}*/}
                        {/*    className="w-full flex items-center gap-2 text-xs font-medium bg-sky-600 hover:bg-sky-700 rounded-lg leading-4 pl-2 py-2 pr-1.5 text-white">*/}
                        {/*    <MdOutlineEditCalendar className="text-lg" />*/}
                        {/*    Đặt lịch xét nghiệm*/}
                        {/*</Link>*/}
                        <Link
                            href="/tra-cuu"
                            onClick={() => toggleIsShowNavigateModal()}
                            className="w-full flex items-center gap-2 text-xs font-medium bg-sky-600 hover:bg-sky-700 rounded-lg leading-4 pl-2 py-2 pr-1.5 text-white">
                            <RiTestTubeFill className="text-lg" />
                            Tra cứu kết quả
                        </Link>
                        <Link
                            href="/don-vi-tra-cuu"
                            onClick={() => toggleIsShowNavigateModal()}
                            className="w-full flex items-center gap-2 text-xs font-medium bg-sky-600 hover:bg-sky-700 rounded-lg leading-4 pl-2 py-2 pr-1.5 text-white">
                            <PiHospitalBold className="text-lg" />
                            Đơn vị gửi mẫu tra cứu
                        </Link>
                        <Link
                            onClick={() => toggleIsShowNavigateModal()}
                            className="w-full bg-sky-800 text-xs flex items-center gap-2 px-2 py-2 tracking-wide font-medium text-white/85 rounded-lg">
                            <FaPhone className="" />
                            0909 636293
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <Link href="/" className="flex items-center gap-2 text-sm md:text-lg font-medium">
                        <BiSupport />
                        Hỗ trợ
                    </Link>
                    <p className="text-sm text-slate-400">v1.28.11</p>
                </div>
            </div>
        </div>
    )
}

export default NavigateModal