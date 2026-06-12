import { linkedComponent } from '../package.js';
import React from 'react';
import { UserAccount } from '../shapes/UserAccount.js';

interface UserAvatarProps {
  defaultURL?: string;
  onClick?: () => void;
}

const query = UserAccount.select((userAccount) => {
  return {
    accountName: userAccount.name,
    avatar: userAccount.avatar,
  };
});
export const UserAvatar = linkedComponent<typeof query, UserAvatarProps>(
  query,
  ({ accountName, avatar, defaultURL, onClick }) => {
    return (
      <div
        className={''}
        style={{
          backgroundImage: avatar ? `url(${avatar})` : `url(${defaultURL})`,
          display: 'inline-block',
          width: 40,
          backgroundSize: 'cover',
          margin: '0 0.5rem 0.5rem 0',
          height: 40,
          borderRadius: 20,
          cursor: onClick ? 'pointer' : 'default',
        }}
        title={accountName}
        onClick={onClick}
      />
    );
  }
);
