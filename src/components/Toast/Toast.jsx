import PropTypes from 'prop-types';

const Toast = ({ isActive, toastText }) => {
    return (
        <div className={`text-xl text-rose-500 font-bold bg-white px-4 py-2 w-1/2 ms-auto border-2 rounded-xl sticky right-3 bottom-3  ${isActive ? "hidden" : "block"}`}>
            <h3>{toastText}</h3>
        </div>
    );
};

Toast.propTypes = {
    isActive: PropTypes.bool.isRequired,
    toastText: PropTypes.string.isRequired,
}

export default Toast;