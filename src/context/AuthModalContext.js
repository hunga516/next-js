import { createContext, useState } from "react";

export const AuthModalContext = createContext()

export function AuthModalProvider({ children }) {
    const [showLoginModal, setShowLoginModal] = useState(false)

    const toggleLoginModal = () => {
        setShowLoginModal(!showLoginModal)
    }
    return (
        <AuthModalContext.Provider value={{ showLoginModal, toggleLoginModal }}>
            {children}
        </AuthModalContext.Provider>
    );
}

