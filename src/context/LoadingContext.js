import { createContext, useEffect, useState } from "react";

export const LoadingContext = createContext()

export const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(!isLoading)
        }, 10);
    }, [])

    return (
        <LoadingContext.Provider value={isLoading}>
            {children}
        </LoadingContext.Provider>
    )
}


