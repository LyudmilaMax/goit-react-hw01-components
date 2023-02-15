import FriendListItem from './FriendsListItem';
import PropTypes from 'prop-types';
import { ListAllFriends } from './FriendList.styled';

const FriendsList = ({ friends }) => {
  return (
    <ListAllFriends>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ListAllFriends>
  );
};

export default FriendsList;

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
