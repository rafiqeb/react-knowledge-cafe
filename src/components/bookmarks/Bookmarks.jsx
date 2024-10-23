import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {

    return (
        <div className="md:w-1/3 bg-slate-300 p-4 m-4">
            <div>
                <h3 className="text-xl font-bold text-center">Reading Time: {readingTime}</h3>
            </div>
            <h3>Bookmarks: {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;