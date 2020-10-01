import React from 'react';
import Grid from '@material-ui/core/Grid';

import CardName from './CardName';
import CardPhone from './CardPhone';
import CardWebsite from './CardWebsite';
import CardCompany from './CardCompany';
import CardAddress from './CardAddress';

/**
 * Grid of user info and dissemination of user bio
 * @param {*} props
 */

function CardInfo(props) {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <CardName key='name' name={props.user.name} />
      </Grid>
      <Grid item xs={6}>
        <CardPhone key='phone' phone={props.user.phone} />
        <CardWebsite key='website' website={props.user.website} />
        <CardAddress key='address' address={props.user.address} />
      </Grid>
      <Grid item xs={6}>
        <CardCompany key='company' company={props.user.company} />
      </Grid>
    </Grid>
  );
}

export default CardInfo;
