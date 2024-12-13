import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useContext, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FaRegLightbulb, FaRegUser, FaRegBookmark, FaRegMoon } from "react-icons/fa";
import { FaRegKeyboard } from "react-icons/fa6";
import { IoLanguage, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineContactSupport, MdLiveTv, MdLogout } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { FaBell } from "react-icons/fa6";

import Menu from "../../../components/Popper/Menu";
import Button from "../../../components/Button";
import Search from './Search';
import Skeleton from "react-loading-skeleton";
import { AuthContext, LoadingContext } from '../../../context';
import { AuthModalContext } from '../../../context';
import LoginModal from '../../../components/Modal/LoginModal';
import { Link } from 'react-router-dom';
import images from '../../../assets/images';

function AdminHeader() {
    const LoadingContextValue = useContext(LoadingContext);

    const AuthContextValue = useContext(AuthContext)
    const currentUser = AuthContextValue.user

    const AuthModalContextValue = useContext(AuthModalContext)

    return (
        <>
            <div className="header-wrapper fixed z-10 w-full flex px-4 drop-shadow bg-white/70 backdrop-blur-md border-[#1618231F]">
                <div className="header-inner w-[1426px] flex justify-between items-center h-[60px] pl-3 pr-6">
                    <div className="logo">
                        {LoadingContextValue ? (
                            <Skeleton width={118} height={42} />
                        ) : (
                            <Link to="/" className="logo flex gap-2 items-center">
                                <img src="/logo.png" alt="" className="w-12 h-12" />
                                <p className="hidden md:block bg-gradient-to-br from-sky-900 to-sky-500 text-transparent bg-clip-text text-base font-semibold font-sans">Medlab
                                    Vĩnh Viễn</p>
                            </Link>
                        )}
                    </div>

                    <Search />
                </div >
            </div >
        </>
    );
}

export default AdminHeader;
