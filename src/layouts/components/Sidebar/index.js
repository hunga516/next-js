import { FaHome, FaRegHeart } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa6";
import { RiUserFollowLine } from "react-icons/ri";
import { IoMdTrendingUp } from "react-icons/io";
import Button from "../../../components/Button";
import { useContext } from "react";
import { loadingContext } from "../../../App";
import Skeleton from "react-loading-skeleton";
import { LoadingContext } from "../../../context";

function Sidebar() {
    const LoadingContextValue = useContext(LoadingContext)

    const NAV_ITEMS = [
        {
            icon: FaHome,
            title: 'Dành cho bạn'
        },
        {
            icon: RiUserFollowLine,
            title: 'Đang theo dõi'
        },
        {
            icon: FaRegCompass,
            title: 'Khám phá'
        },
        {
            icon: FaRegHeart,
            title: 'Yêu thích'
        },
        {
            icon: IoMdTrendingUp,
            title: 'Thịnh hành'
        }
    ]

    return (
        <div className="sidebar-wrapper fixed mt-[60px] w-[232px]">
            <ul className="nav flex flex-col text-[19px] leading-[45px] py-[10px] font-sans font-semibold tracking-wide border-b-[1px] border-[#1618231F]">
                {NAV_ITEMS.map((item, index) => (
                    <li key={index} className="flex items-center gap-[16px]">
                        {LoadingContextValue ? (
                            <>
                                <Skeleton width={24} height={24} /> <Skeleton width={200} height={24} />
                            </>
                        ) : (
                            <>
                                <item.icon size="24px" /> {item.title}
                            </>
                        )}
                    </li>
                ))}
            </ul>
            {!LoadingContextValue && (
                <>
                    <div className="require-login py-[20px] border-b-[1px] border-[#1618231F]">
                        <div className="text-[#8a8b90] font-light text-[16px] tracking-wide mb-[10px]">Đăng nhập để follow các tác giả, thích video và xem bình luận.</div>
                        <Button className="w-full" size="large" type={"outline-primary"}>
                            Đăng nhập
                        </Button>
                    </div>
                    <div className="container relative mt-[20px]">
                        <img src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/8152caf0c8e8bc67ae0d.png" className="h-[52px] w-full"></img>
                        <h4 className="absolute w-[141px] left-[56px] top-1/2 transfrom -translate-y-1/2 text-[#fff5c9] text-[13px] font-semibold leading-[16px] text-left tracking-[0.035em]">Tạo hiệu ứng Tiktok, nhận phần thưởng.</h4>
                    </div>
                </>
            )}
        </div>
    )
}

export default Sidebar