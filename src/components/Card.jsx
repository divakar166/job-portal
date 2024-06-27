const Card = ({ children, bg = 'bg-white dark:bg-black' }) => {
    return <div className={`${bg} outline-slate-1 dark:hover:outline-white-1 hover:outline-black-1 text-white p-6 rounded-lg shadow-md`}>{children}</div>;
};
export default Card;