function Wrapper({ children }) {
    return (
        <div className="max-w-[500px] mt-2 bg-white duration-500 drop-shadow-sm rounded-md">
            {children}
        </div>
    );
}

export default Wrapper;