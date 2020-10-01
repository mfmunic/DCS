import React from 'react';
import { useStyles } from '../Styles/shared';

/**
 * Displays Address block
 * @param {address{street: String, suite: String, city: String, zipcode: String}} props
 */
function CardAddress(props) {
  const classes = useStyles();
  const { street, suite, city, zipcode } = props.address;
  return (
    <div className={`${classes.flex} ${classes.marginLeft} ${classes.marginBottom}`}>
      <span className={classes.label}>Address:</span>
      <div>
        {street}
        {suite && <div>{suite}</div>}
        <div>
          {city}, {zipcode}
        </div>
      </div>
    </div>
  );
}

export default CardAddress;
