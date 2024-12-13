import { useState } from "react";

function NavigateModal({toggleIsShowBookingModal}) {
    const closeModal = (e) => {
        if(e.target === e.currentTarget) {
            toggleIsShowBookingModal();
        }
    }

    return (
        <div className="modal fixed inset-0 bg-slate-100/50 z-20 mt-11" onClick={closeModal}>
            <div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-lg grid grid-cols-2 gap-8 w-full max-w-[900px] bg-white">
                <div className="">
                    <h1 className="text-3xl font-semibold leading-10">Xác nhận và chúng tôi sẽ liên hệ lại bạn để xác nhận lịch xét nghiệm</h1>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <input type="text" className="ring-1 ring-slate-100 px-2 py-1" />
                    <input type="text" className="ring-1 ring-slate-100 px-2 py-1" />
                    <input type="date" name="" id="" className="col-span-2" />
                </div>
            </div>
        </div>
    )
}

export default NavigateModal