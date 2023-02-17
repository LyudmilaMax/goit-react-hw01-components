import FriendListItem from './FriendsListItem';
import PropTypes from 'prop-types';
import { ListAllFriends } from './FriendList.styled';

const FriendsList = ({ friends }) => {
  return (
    <ListAllFriends>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
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
