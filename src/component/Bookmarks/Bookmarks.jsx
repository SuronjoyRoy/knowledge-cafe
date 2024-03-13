import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {

    return (
        <div className="md:w-1/3 py-5 bg-slate-200">
            <div className="border-b-2">
                <h3 className="text-3xl mb-2 font-medium">Reading Time:{readingTime}</h3>
            </div>
            <h2 className="text-3xl mb-3">Bookmarks:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;