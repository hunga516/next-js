import { useContext, useEffect, useRef, useState } from "react";
import { useDebounced } from "../../../../hooks";
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import request from "../../../../utils/request";


import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { TiDelete } from "react-icons/ti";


import { Wrapper as PopperWrapper } from "../../../../components/Popper";
import styles from '../Header.module.css'
import AccountItem from "../../../../components/AccounItem";
import Skeleton from "react-loading-skeleton";
import { LoadingContext } from "../../../../context";




function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)
    const LoadingContextValue = useContext(LoadingContext)

    const Debounced = useDebounced(searchValue, 800)

    const inputRef = useRef()

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([])
            return;
        }

        setLoading(true)

        const handleFetch = async () => {
            try {
                const response = await request.get('/users/search', {
                    params: {
                        q: searchValue,
                        type: 'less'
                    }
                })
                setSearchResult(response.data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }

        handleFetch()
    }, [Debounced]);

    const handleOnChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleDelete = (e) => {
        setSearchValue('')
        inputRef.current.focus()
    }

    return (
        <div
            className="search flex items-center w-[500px] h-[38px] border-[1px] border-transparent ring-1 ring-slate-200 pl-[16px] py-[12px] rounded-lg focus-within:ring-[#1618231F]">
            {LoadingContextValue ? (
                <Skeleton />
            ) : (
                <>
                    <TippyHeadless
                        className="bg-white min-w-[200px] h-full"
                        visible={showResult && searchValue.length > 0}
                        placement="bottom"
                        interactive={true}
                        onClickOutside={() => setShowResult(false)}
                        render={attrs => (
                            <PopperWrapper>
                                {searchResult.length > 0 ? (
                                    <div className="search-result" tabIndex="-1" {...attrs}>
                                        {/* <ul>
                                {searchResult.map(item => (
                                    <li>{item}</li>
                                ))}
                            </ul> */}

                                        <h2 className="text-[14px] text-[#51525b] font-semibold px-3 pt-1">Accounts</h2>

                                        {searchResult.map(item => (
                                            <AccountItem loading={loading} data={item} key={item.id} />
                                        ))}
                                    </div>
                                ) : (
                                    <p className="px-2 py-2">Chưa làm model gợi ý xong bạn ơi</p>
                                )}
                            </PopperWrapper>
                        )}>
                        <input
                            ref={inputRef}
                            value={searchValue}
                            placeholder="Tìm kiếm"
                            className={`${styles.input} bg-transparent w-full h-[21px] outline-none text-[#8a8b90] font-light text-[16px] tracking-wide`}
                            onChange={handleOnChange}
                            onFocus={() => setShowResult(true)}
                        />
                    </TippyHeadless>
                    <button onClick={handleDelete} className="flex items-center justify-center w-[40px] text-[#777778]">
                        {
                            searchValue && !loading && (
                                // <HiMiniXCircle className="delete-icon text-[20px]" />
                                <TiDelete className="delete-icon text-[20px]" />
                            )
                        }
                        {loading && (
                            <AiOutlineLoading3Quarters className="loading-icon text-[16px] animate-spin " />
                        )}
                    </button>
                    <span className="w-[1px] h-[28px] bg-[#1618231F]"></span>
                    <button
                        className={`${styles.searchIcon} pl-[12px] pr-[16px] py-[11px] text-[#A6A7AB] hover:bg-gray-200`}>
                        <div>
                            <IoIosSearch style={{ width: '24px', height: '24px' }} />
                        </div>
                    </button>
                </>
            )
            }
        </div >
    )
}

export default Search