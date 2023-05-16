
const ErrorMessage = ({ message }) => {
    if (typeof message === 'undefined') return <span></span>;
    return <div className="error_container">
        <h3>{message}</h3>
    </div>
}

export default ErrorMessage;
