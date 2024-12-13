import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import images from '../../assets/images';
import Footer from '../components/Footer';
import { FaCircleArrowUp } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { MdOutlineEditCalendar } from 'react-icons/md';

function DefaultLayout({ children }) {
    const [isShowScroll, setIsShowScroll] = useState(false);

    useEffect(() => {
        const toggleIsShowScroll = () => {
            if(window.scrollY > 300) {
                setIsShowScroll(true);
            } else {
                setIsShowScroll(false);
            }
        }

        window.addEventListener('scroll', toggleIsShowScroll)

        return () => {
            window.removeEventListener('scroll', toggleIsShowScroll)
        }
    } , [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className="bg-slate-100/30 relative">
            <Header />
            <div className="wrapper flex max-w-screen-2xl">
                <div className="content w-full mt-20 md:mt-28 px-4 md:px-0">
                    {children}
                    <div className="mt-12 md:mt-32">
                        <Footer />
                    </div>
                </div>
            </div>

            <div
                className={`${isShowScroll ? "md:fixed md:opacity-85" : "md:opacity-0"} duration-300 right-8 bottom-8`}>
                <button className="text-3xl" onClick={() => scrollToTop()}>
                    <FaCircleArrowUp className="text-pink-600" />
                </button>
            </div>

            <div className="hidden md:block md:fixed right-8 top-1/2 -translate-y-1/2">
                <div className="flex flex-col gap-8 items-center">
                    <a href="https://www.facebook.com/vinhvien.medlab/" target="_blank" className="relative">
                        <img src={images.facebook} alt="facebook contact"
                             className="absolute z-10 w-12 h-12 rounded-full object-cover" />
                        <p className="w-12 h-12 rounded-full bg-blue-700 animate-ping delay-150 ease-in-out"></p>
                    </a>
                    <div className="relative">
                        <img src={images.phone} alt="phone contact"
                             className="absolute z-10 w-12 h-12 rounded-full object-cover" />
                        <p className="w-12 h-12 rounded-full bg-sky-600 animate-ping"></p>
                    </div>
                    <div className="relative">
                        <img src={images.zalo} alt="zalo contact"
                             className="absolute z-10 w-12 h-12 rounded-full object-cover" />
                        <p className="w-12 h-12 rounded-full bg-blue-800 animate-ping"></p>
                    </div>
                </div>
            </div>

            <div className="fixed md:hidden bottom-0 left-0 right-0">
                <div className="grid grid-cols-4 bg-white/80 backdrop-blur-2xl w-full">
                    <a href="" className="p-4 flex items-center justify-center">
                        <img src={images.zalo} alt="zalo contact" className="w-10 h-10" />
                    </a>
                    <div className="p-4 flex items-center justify-center">
                        <img src={images.phone} alt="zalo contact" className="w-10 h-10" />
                    </div>
                    <a href="https://www.facebook.com/vinhvien.medlab/" target="_blank" className="p-4 flex items-center justify-center">
                        <img src={images.facebook} alt="zalo contact" className="w-10 h-10" />
                    </a>
                    <div className="p-4 flex gap-2 items-center justify-center">
                        <p className="text-nowrap font-medium text-sky-600">TRA CỨU</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout