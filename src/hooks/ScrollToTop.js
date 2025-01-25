import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop(props) {
    const { pathname }= useLocation();

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0,0)
        },100)
    }, [pathname]);


    return null
}

export default ScrollToTop;