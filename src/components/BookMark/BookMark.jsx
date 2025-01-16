import PropTypes from "prop-types";
import './BookMark.css'

const BookMark = ({ bookmark }) => {
    const { title } = bookmark
    return (
        <div className="bookmarkStyle">
            <h3 className="text-3xl">{title}</h3>
        </div>
    );
};


BookMark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default BookMark;