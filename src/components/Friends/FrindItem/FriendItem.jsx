import PropTypes from 'prop-types';
import { IsOnline, Friend } from './FriendItem.styled';

export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <Friend>
      <IsOnline isOnline={isOnline}></IsOnline>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Friend>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};
