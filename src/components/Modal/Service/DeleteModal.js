function DeleteModal({service, toggleIsShowDeleteService, handleSoftDelete}) {
    return (
        <div id="deleteModal" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div
                        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-white px-4 pb-4 pt-4 sm:p-6 sm:pb-4">
                            <div class="flex flex-col justify-center">
                                <div
                                    class="flex self-center h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                    </svg>
                                </div>
                                <div class="mt-2 text-center sm:mt-0 sm:text-left">
                                    <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Xác nhận xoá</h3>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500"><span id="spanComfirmDelete">Bạn có chắc muốn xoá dịch vụ {service.serviceName}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex bg-gray-50 px-4 py-3 justify-end gap-1">
                            <button type="button" class="bg-white ring-1 ring-inset ring-gray-300 px-3 font-semibold rounded-md h-[40px]"
                               onClick={toggleIsShowDeleteService}>
                                Huỷ
                            </button>
                            <button type="button" class="bg-red-500 text-white px-3 py-2 font-semibold rounded-md h-[40px]"
                                onClick={() => handleSoftDelete(service)}>
                                Xoá
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;