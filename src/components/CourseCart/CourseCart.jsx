import PropTypes from 'prop-types';

const CourseCart = ({ cart }) => {
    return (
        <div className='order-1 md:order-2 bg-white p-6 space-y-5 rounded-xl'>
            <h4 className='text-2xl font-bold'>Credit Hour Remaining  hr</h4>
            <hr />
            <h4 className='text-2xl font-bold'>Course Name</h4>
            <ol className='list-decimal px-6'>
                {
                    cart.map((item, idx)=><li key={idx}>{item?.title}</li>)
                }
            </ol>
            <hr />
            <p>Total Credit Hour : </p>
            <hr />
            <p>Total Price :  USD</p>
        </div>
    );
};

CourseCart.propTypes = {
    cart: PropTypes.array.isRequired,
}

export default CourseCart;