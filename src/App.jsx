import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from './Component/Card';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    height: '100vh',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card />
    </div>
  );
}

export default App;
