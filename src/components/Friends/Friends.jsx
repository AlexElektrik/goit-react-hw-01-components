import PropTypes from "prop-types";
import { FriendList } from "./FriendList.styled";
import { FriendItem } from "./FrindItem/FriendItem";

export const FriendsList = ({ friends }) => {
  return (
    <FriendList className="friend-list">
      {friends.map((friend) => (
        <li key={friend.id}>{<FriendItem friend={friend} />}</li>
      ))}
    </FriendList>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
