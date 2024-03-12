
const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className="bg-slate-300 p-5 mb-2 rounded-md ml-2">
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};

export default Bookmark;