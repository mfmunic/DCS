import React, { useState, useEffect } from 'react';
import CardStyle from '@material-ui/core/Card';

import * as Fetch from '../Actions/Fetch';
import CardInfo from './CardInfo';

/**
 * Card Container
 */

function Card() {
  const [user, setUser] = useState();

  useEffect(() => {
    Fetch.randomUser(setUser);
  }, []);

  if (user)
    return (
      <CardStyle>
        <CardInfo user={user} />{' '}
      </CardStyle>
    );
  else return <div />;
}

export default Card;
