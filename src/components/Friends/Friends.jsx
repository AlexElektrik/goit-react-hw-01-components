import PropTypes from 'prop-types';
import { FriendList } from './FriendList.styled';
import { FriendListItem } from './FrindItem/FriendItem'

export const FriendsList = ({friends}) => {
    return (
        <FriendList className="friend-list">
            {friends.map( friend => (
                <li className="item" key={friend.id}>
                   {<FriendListItem friend = {friend} />}
                </li>
            ))}
        </FriendList>
    )
};  

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
}