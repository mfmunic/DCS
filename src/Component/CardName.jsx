import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

/**
 * Generates random Hex value to be used as a color
 */
const randomColor = Math.floor(Math.random() * 16777215).toString(16);

const useStyles = makeStyles({
  name: {
    borderBottom: `3px #${randomColor} double`,
    padding: '4px 0 4px 16px',
    fontWeight: 'bold',
    fontSize: '24px',
    color: `#${randomColor}`,
  },
});

/**
 * Displays Name
 * @param {String} props
 */
function CardName(props) {
  const classes = useStyles();
  return <div className={classes.name}>{props.name}</div>;
}

export default CardName;
