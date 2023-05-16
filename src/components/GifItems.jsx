import PropTypes from 'prop-types';

export const GifItems = ({ title, url }) => {
    return <div className="card">
        <img src={url} alt={title} />
        <p>{title.trim().length === 0 ? 'No title added' : title}</p>
    </div>
}

GifItems.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

GifItems.defaultProps = {
    title: 'No title'
}
