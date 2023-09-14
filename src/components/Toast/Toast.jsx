import PropTypes from 'prop-types';

const Toast = ({ isActive }) => {
    return (
        <div className={`text-xl text-green-700 font-bold bg-white px-4 py-2 w-1/2 ms-auto border-2 rounded-xl sticky right-3 bottom-3  ${isActive ? "hidden" : "block"}`}>
            <h3>Toast</h3>
        </div>
    );
};

Toast.propTypes = {
    isActive: PropTypes.bool.isRequired,
}

export default Toast;