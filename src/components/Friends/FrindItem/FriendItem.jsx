import PropTypes from 'prop-types';
import { IsOnline, Friend } from './FriendItem.styled';

export const FriendListItem = ({friend: {avatar, name, isOnline}}) => {
  return (
    <Friend>
      <IsOnline isOnline={isOnline}></IsOnline>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Friend>
  )
};

FriendListItem.propTypes = {
  friend: PropTypes.shape ({
    isOnline: PropTypes.bool,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  })
}