import PropTypes from 'prop-types';

function Button({  children}) {
    return <div>
        <button className='px-4 py-[7px] bg-primary text-white rounded-[4px]'>
            {children}
        </button>
    </div>;
}

Button.propTypes = {
    // small: PropTypes.bool,
    children: PropTypes.node.isRequired
}

export default Button;

