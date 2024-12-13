import { useEffect, useState } from "react";

function useDebounced(value, delay) {
    const [debounced, setDebounced] = useState(value)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounced(value)
        }, delay);

        return () => {
            clearTimeout(timerId)
        }
    }, [value])

    return debounced;
}

export default useDebounced;