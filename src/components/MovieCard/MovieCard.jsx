import PropTypes from 'prop-types';

import {Link } from 'react-router-dom'
function MovieCard({image , nameEn, nameVi  }) {
    return (    <div className="py-3">
                    <Link><img src={image} alt={nameEn} /></Link>
                    <Link ><p className='mt-[6px] overflow-hidden text-ellipsis whitespace-nowrap '>{nameVi} </p></Link>
                    <Link><p className="text-[#7A7A7A]  overflow-hidden text-ellipsis whitespace-nowrap "> {nameEn} </p> </Link>
                </div> );
}

MovieCard.propTypes = {
    image: PropTypes.string.isRequired,
    nameEn: PropTypes.string.isRequired,
    nameVi: PropTypes.string.isRequired,
}

export default MovieCard;