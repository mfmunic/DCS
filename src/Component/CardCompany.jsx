import React from 'react';
import { useStyles } from '../Styles/shared';

/**
 * Company Info
 * @param {company:{name: String, catchPhrase: String, label: String}} props
 */
function CardCompany(props) {
  const classes = useStyles();
  return (
    <div>
      <span className={`${classes.label} ${classes.company}`}>{props.company.name}</span>
      <div className={classes.catchPhrase}>{props.company.catchPhrase}</div>
      <span className={classes.label}>Description:</span>
      {props.company.bs}
    </div>
  );
}

export default CardCompany;
