import { FaBookmark } from "react-icons/fa6";
import PropTypes from 'prop-types';

const SignleBlog = ({ blog, handleAddbookmarks, hanldeReadingMarks }) => {
    const { id, cover, author, author_img, title, reading_time, posted_date, hashtags } = blog
    return (
        <div className="mb-20">
            <img className="w-full rounded-md" src={cover} alt="" />
            <div className="flex justify-between items-center py-3">
                <div className="flex">
                    <div>
                        <img className="w-14 h-14 rounded-full" src={author_img} alt="" />
                    </div>
                    <div className="ml-2">
                        <h4 className="font-bold">{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 mr-2">
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddbookmarks(blog)}>
                        <FaBookmark />
                    </button>
                </div>
            </div>
            <h2 className="text-3xl py-2 text-justify font-medium">{title}</h2>
            <p className="text-justify py-2 text-blue-700">
                {
                    hashtags.map((has, idx) => <span key={idx}><a href="">#{has}</a></span>)
                }
            </p>
            <div className="text-left">
                <button onClick={() => hanldeReadingMarks(reading_time, id)} className="text-blue-700 underline">Mark as Read</button>
            </div>
        </div>
    );
};

SignleBlog.prototypes = {
    handleAddbookmarks: PropTypes.func
}

export default SignleBlog;