// @ts-ignore
import React from 'react';
import { UserAccount } from '../shapes/UserAccount.js';
import { linkedComponent } from '../package.js';

export const UserName = linkedComponent(
  UserAccount.select((u) => u.name),
  ({ name }) => {
    return <div>{name}</div>;
  }
);
