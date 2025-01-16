import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";
import './BookMarks.css'

const BookMarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3">

            <div>
                <h3 className="text-4xl">Reading Time : {readingTime}</h3>
            </div>

            <h2 className="text-4xl">BookMarks {bookmarks.length} </h2>

            <div className="bookmarksStyle">
                {
                    bookmarks.map((bookmark, idx) => <BookMark
                        key={idx}
                        bookmark={bookmark}
                    ></BookMark>)
                }
            </div>
        </div>
    );
};

BookMarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default BookMarks;