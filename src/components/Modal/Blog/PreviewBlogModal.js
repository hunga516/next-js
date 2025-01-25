import DetailsBlogPage from '../../../pages/DetailsBlogPage';
import Button from '../../Button';
import { RiDraftLine } from 'react-icons/ri';
import { VscLoading } from 'react-icons/vsc';
import { IoArrowBack } from 'react-icons/io5';

function PreviewBlogModal({data, toggleIsShowPreviewBlogModal, handleSubmit,handleSaveDraft, isLoadingSubmit, toggleIsShowCreateBlog}) {

    const closeModal = (e) => {
        if(e.target === e.currentTarget) {
            toggleIsShowPreviewBlogModal(e);
        }
    }

    console.log(data);

    return (
        <div className="fixed inset-0 bg-slate-100/75 z-30 overflow-hidden" onClick={closeModal}>
            <div
                className="absolute inset-x-4 top-1/2 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg drop-shadow-lg opacity-100 h-[80vh] md:w-[80vw] bg-white">
                <div className="relative mx-4">
                    <div className="sticky top-0 bg-white flex flex-col md:flex-row items-center justify-between z-10">
                        <div
                            className="back-action w-full py-2 z-10 flex flex-col md:flex-row md:justify-between md:items-center gap-2 sticky top-0 bg-white md:mx-8"
                        >
                            <button onClick={toggleIsShowPreviewBlogModal} className="flex items-center gap-2">
                                <IoArrowBack />
                                <h2 className="text-base text-gray-700 leading-9 text-nowrap">Trở về</h2>
                            </button>

                            <div className="container-action flex flex-col md:flex-row items-center max-sm:justify-between gap-2">

                                <Button className="w-full" onClick={handleSaveDraft} size='medium' type='upload'>
                                    <RiDraftLine />
                                    Lưu nháp
                                </Button>
                                {isLoadingSubmit ? (
                                    <Button
                                        className="px-4 w-full opacity-70" type='primary'
                                        onClick={handleSubmit}
                                    >
                                        <VscLoading className='animate-spin text-lg' />
                                        <span></span>
                                    </Button>
                                ) : (
                                    <Button
                                        className="px-4 w-full" type='primary'
                                        onClick={handleSubmit}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Đăng tin tức</span>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                    <DetailsBlogPage data={data} />
                </div>
            </div>
        </div>
    )
}

export default PreviewBlogModal;