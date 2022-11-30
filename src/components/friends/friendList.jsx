import PropTypes from 'prop-types';
import { FriendListItem } from './friendListItem'

export const FriendsList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map( friend => (
                <li className="item" key={friend.id}>
                   {<FriendListItem friend = {friend} />}
                </li>
            ))}
        </ul>
    )
};  

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
}