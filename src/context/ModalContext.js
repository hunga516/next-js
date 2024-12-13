import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
    const [modals, setModals] = useState({
        bookingModal: false,
        navigateModal: false,
        exampleModal: false,
    });

    const toggleModal = (modalName) => {
        setModals((prev) => ({
            ...prev,
            [modalName]: !prev[modalName],
        }));
    };

    return (
        <ModalContext.Provider value={{ modals, toggleModal }}>
            {children}
        </ModalContext.Provider>
    );
};
