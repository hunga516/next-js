import { Link } from "react-router-dom";
import classNames from 'classnames';

function Button({ children, to, href, className, onClick, size = "medium", type = "menu", ...passProps }) {
    let Comp = 'button';

    const classes = classNames(className, {
        // 'min-w-[50px] h-[30px]': size === 'small',
        'min-w-[100px] h-[36px]': size === 'medium',
        'min-w-[200px] h-[42px]': size === 'large',
        'flex disabled:opacity-50 text-sm gap-2 items-center justify-center text-[#fff] rounded-md bg-blue-500 hover:bg-blue-500 text-nowrap': type === 'primary',
        'flex disabled:opacity-50 items-center justify-center border-[1px] rounded-md border-[#1618231E] hover:bg-[#f8f8f8]': type === 'outline-dark',
        'flex disabled:opacity-50 items-center justify-center font-normal text-md p-2 text-blue-500 border-[1px] border-blue-500 rounded-md': type === 'outline-primary',
        'w-full flex gap-2 items-center py-[10px] pl-[16px] pr-[8px] text-[16px] font-normal leading-[21px] hover:bg-[#f8f8f8]': type === "menu",
        'flex disabled:opacity-50 items-center justify-center hover:bg-[#f8f8f8]': type === "outline-none",
        'flex items-center justify-center text-nowrap w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100 text-slate-500': type === "upload",
    });

    let props = {
        onClick,
        className: classes,
        ...passProps
    };

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }

    return (
        <Comp {...props}>
            {children}
        </Comp>
    );
}

export default Button;
