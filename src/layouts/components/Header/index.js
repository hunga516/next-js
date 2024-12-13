import { SlMenu } from 'react-icons/sl';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavigateModal from '../../../components/Modal/NavigateModal';
import Tippy from '@tippyjs/react/headless';
import Wrapper from '../../../components/Popper/Wrapper';
import { IoIosArrowDown } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa';
import { MdOutlineEditCalendar } from 'react-icons/md';
import { RiTestTubeFill } from 'react-icons/ri';
import { PiHospitalBold } from 'react-icons/pi';
import BookingModal from '../../../components/Modal/BookingModal';
import { FiPhone } from 'react-icons/fi';
import { TbTestPipe } from 'react-icons/tb';

function Header() {

    const [isShowNavigateModal, setIsShowNavigateModal] = useState(false);
    const [isShowBookingModal, setIsShowBookingModal] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const location = useLocation();

    const toggleIsShowNavigateModal = () => {
        setIsShowNavigateModal(!isShowNavigateModal);
    };

    const toggleIsShowBookingModal = () => {
        setIsShowBookingModal(!isShowBookingModal);
    };

    useEffect(() => {
        const toggleIsHidden = () => {
            let currentY = window.scrollY;
            if (currentY > 30) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
        }

        window.addEventListener('scroll', toggleIsHidden);

        return () => {
            window.removeEventListener('scroll', toggleIsHidden);
        }

    }, [])

    return (
        <>
            <div
                className="header-wrapper fixed w-full md:px-8 md:pt-1 border-[#1618231F] z-50">
                <div className="absolute inset-0 bg-white/80 backdrop-blur-lg -z-10 drop-shadow-sm"></div>
                <div
                    className={`hidden ${isHidden ? "-translate-y-full": "translate-y-0 border-b-[0.5px] border-slate-200"} md:flex duration-300 w-full items-center justify-between px-2 text-white gap-2`}>
                    <Link to="/" className="logo flex flex-col gap-2 items-center">
                        <img src="/logo.png" alt="" className="w-20 h-20" />
                        <p className="hidden md:block bg-gradient-to-br from-sky-900 to-sky-500 text-transparent bg-clip-text text-base font-semibold font-sans">Medlab
                            Vĩnh Viễn</p>
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link to="/tra-cuu"
                            className="flex items-center gap-2 text-lg font-medium rounded-lg leading-4 pl-6 py-4 pr-6 text-pink-600 font-sans ring-2 ring-pink-600/70">
                            <TbTestPipe />
                            Tra cứu kết quả xét nghiệm
                        </Link>
                        <button
                            className="flex items-center gap-2 text-lg font-medium rounded-lg leading-4 pl-6 py-4 pr-6 text-pink-600 font-sans  ring-2 ring-pink-600/70">
                            <FiPhone />
                            0909 636293
                        </button>
                    </div>
                </div>
                <div className={`${isHidden ? "mt-0 md:-mt-28" : "md:mt-0"} flex justify-between mx-4 md:mx-0 items-center duration-300`}>
                    <button onClick={toggleIsShowNavigateModal} className="block md:hidden p-1">
                        <SlMenu className="text-2xl" />
                    </button>
                    <Link to="/" className="logo flex md:hidden gap-2 items-center">
                        <p className="inline md:hidden bg-gradient-to-br from-sky-900 to-sky-500 text-transparent bg-clip-text text-base font-semibold font-sans">Medlab
                            Vĩnh Viễn</p>
                        <img src="/logo.png" alt="" className="w-10 h-10" />
                    </Link>

                    <div className="hidden md:flex w-full items-center py-1 justify-between">
                        <div className="flex items-center gap-8">
                            <Link to={'/'}
                                  className={`${location.pathname === '/' ? 'text-white bg-sky-600' : 'text-slate-500'} text-lg hover:bg-sky-600 hover:text-white duration-200 px-2 py-1 rounded-lg font-medium font-sans`}>TRANG
                                CHỦ</Link>
                            <Link to="/dich-vu"
                                  className={`${location.pathname === '/bang-gia-dich-vu' ? 'text-white bg-sky-600' : 'text-slate-500'} text-lg hover:bg-sky-600 hover:text-white duration-200 px-2 py-1 rounded-lg  font-medium font-sans`}>DỊCH
                                VỤ</Link>
                            <Tippy
                                interactive={true}
                                delay={[0, 500]}
                                render={attrs => (
                                    <Wrapper {...attrs}>
                                        <div
                                            className="flex flex-col items-start ring-1 ring-slate-200/70 drop-shadow-lg rounded-lg">
                                            <Link to="/combo/:id"
                                                  className="text-slate-600 text-sm font-medium hover:bg-sky-600 hover:text-white px-4 py-3 duration-200 rounded-lg">Tất
                                                cả gói xét nghiệm</Link>
                                            <Link to="/combo/:id"
                                                  className="text-slate-600 text-sm font-medium hover:bg-sky-600 hover:text-white px-4 py-3 duration-200">Gói
                                                xét nghiệm 1</Link>
                                            <Link to="/combo/:id"
                                                  className="text-slate-600 text-sm font-medium hover:bg-sky-600 hover:text-white px-4 py-3 duration-200">Gói
                                                xét nghiệm dành cho nữ giới</Link>
                                            <Link to="/combo/:id"
                                                  className="text-slate-600 text-sm font-medium hover:bg-sky-600 hover:text-white px-4 py-3 duration-200">Gói
                                                xét nghiệm dành cho nam giới</Link>
                                            <Link to="/combo/:id"
                                                  className="text-slate-600 text-sm font-medium hover:bg-sky-600 hover:text-white px-4 py-3 duration-200">Gói
                                                xét nghiệm dành cho trẻ em</Link>
                                            <Link to="/combo/:id"
                                                  className="text-slate-600 text-sm font-medium hover:bg-sky-600 hover:text-white px-4 py-3 duration-200">Gói
                                                xét nghiệm dành cho tiền hôn nhân</Link>
                                        </div>
                                    </Wrapper>
                                )}
                            >
                                {/*<Link className={`text-slate-500 text-lg font-medium flex items-center gap-1 font-sans`}>*/}
                                {/*    GÓI XÉT NGHIỆM*/}
                                {/*    <IoIosArrowDown className="text-sky-600" />*/}
                                {/*</Link>*/}
                            </Tippy>
                            <Link to={'/ve-medlab-vinh-vien'}
                                  className={`${location.pathname === '/ve-medlab-vinh-vien' ? 'text-white bg-sky-600' : 'text-slate-500'} text-lg hover:bg-sky-600 hover:text-white duration-200 px-2 py-1 rounded-lg font-medium font-sans`}>VỀ
                                CHÚNG TÔI</Link>
                            <Link to="/tin-tuc"
                                  className={`${location.pathname === '/tin-tuc' ? 'text-white bg-sky-600' : 'text-slate-500'} text-lg hover:bg-sky-600 hover:text-white duration-200 px-2 py-1 rounded-lg  font-medium font-sans`}>
                                TIN TỨC
                            </Link>
                        </div>
                        <div>
                            <button className="hidden lg:block px-4 py-1.5 text-lg rounded-md text-white bg-sky-600">
                                ĐĂNG KÝ TƯ VẤN
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isShowNavigateModal && (
                <NavigateModal toggleIsShowNavigateModal={toggleIsShowNavigateModal} />
            )}

            {isShowBookingModal && (
                <BookingModal toggleIsShowBookingModal={toggleIsShowBookingModal} />
            )}
        </>
    );
}

export default Header;
