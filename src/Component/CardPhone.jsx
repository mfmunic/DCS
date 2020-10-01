import React from 'react';
import { useStyles } from '../Styles/shared';

import * as Phone from '../Actions/Phone';

/**
 * Displays Phone Number
 * @param {String} props
 */
function CardPhone(props) {
  const classes = useStyles();
  const [phone, ext] = props ? Phone.reformat(props.phone) : null;

  return (
    <div className={classes.marginLeft}>
      <span className={classes.label}>Phone:</span>
      {phone} {ext && `ext. ${ext}`}
    </div>
  );
}

export default CardPhone;
