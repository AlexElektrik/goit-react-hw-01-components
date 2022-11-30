import PropTypes from 'prop-types';

export const FriendListItem = ({friend: {avatar, name, isOnline}}) => {
  return (
    <>
      { isOnline ? (<span className="online">isOnline</span>) : (<span className="notOnline">Online</span>)
      }
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  )
};

FriendListItem.propTypes = {
  friend: PropTypes.shape ({
    isOnline: PropTypes.bool,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  })
}