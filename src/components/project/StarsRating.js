import React from 'react';
import { FaRegStar, FaStarHalfAlt, FaStar } from 'react-icons/fa'
import { Box } from '@material-ui/core';

const StarsRating = (props) => {
    let { rating } = props;
    rating = parseFloat(rating);
    rating = rating > 5 ? 5: rating;
    const integerRating = Math.floor(rating);
    const decimalRating = rating - integerRating;
    console.log(`rating: ${rating} integer: ${integerRating} decimal: ${decimalRating} `);
    const stars = [];
    let i = 0;
    for (i = 0; i < integerRating; i++) {
        stars.push(<FaStar key={i} />)
    }
    if (decimalRating != 0) {
        stars.push(<FaStarHalfAlt key={i + 1} />)
        i++;
    }
    for (i = i; i < 5; i++) {
        stars.push(<FaRegStar key={i+1} />)
    }
    return (
        <Box>
            {stars}
        </Box>
    );
}

export default StarsRating;