import PropTypes from 'prop-types';
import {
  ItemFriend,
  StatusFriend,
  ImgFriend,
  NameFriend,
} from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ItemFriend>
      <StatusFriend
       style={{ backgroundColor: `${isOnline ? 'green' : 'red'}` }} 
      ></StatusFriend>
      <ImgFriend src={avatar} alt={name} width="48" />
      <NameFriend>{name}</NameFriend>
    </ItemFriend>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
