import React from 'react';
import { ButtonsDefaultBlack, ButtonsLargeBlack, ButtonsSmallBlack, ButtonsSmallWhite, ButtonsDefaultWhite,ButtonsLargeWhite } from '../../components/buttons/Buttons';

export default function Home() {
  return (
    <React.Fragment>
        <ButtonsSmallBlack description="Realtor"/>
        <ButtonsDefaultBlack description="Realtor"/>
        <ButtonsLargeBlack description="Realtor"/>
        <ButtonsSmallWhite description="Realtor"/>
        <ButtonsDefaultWhite description="Realtor"/>
        <ButtonsLargeWhite description="Realtor"/>
    </React.Fragment>
  )
}
