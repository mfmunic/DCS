import React from 'react';
import { useStyles } from '../Styles/shared';

/**
 * Display Website
 * @param {String} props
 */
function CardWebsite(props) {
  const classes = useStyles();
  return (
    <div className={classes.marginLeft}>
      <span className={classes.label}>Website:</span>
      {props.website}
    </div>
  );
}

export default CardWebsite;
