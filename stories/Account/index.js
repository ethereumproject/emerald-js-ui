import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { muiTheme as storyBookMuiTheme } from 'storybook-addon-material-ui';
import Account from '../../src/components/Account';
import muiTheme from '../../src/theme/index';

storiesOf('Account', module)
  .addDecorator(storyBookMuiTheme(muiTheme))
  .add('default', () => (
    <Account
      address="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      name="account1"
    />
  ))
  .add('editable', () => (
    <Account
      address="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      name="account1"
      editable
    />
  ))
  .add('without Name', () => (
    <Account
      address="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      onAddressClick={action('address-click')}
    />
  ))
  .add('Identity Icon', () => (
    <Account
      address="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      identity
    />
  ))
  .add('Identity Icon with name', () => (
    <Account
      address="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      name="account1"
      identity
    />
  ))
  .add('Identity Icon with editable name', () => (
    <Account
      address="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      editable
      name="account1"
      identity
    />
  ))
  .add('Shortened', () => (
    <Account
      address="0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98"
      identity
      addressWidth="200px"
    />
  ));
