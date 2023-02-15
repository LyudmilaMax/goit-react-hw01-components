import PropTypes from 'prop-types';

import {
  ProfileCard,
  Description,
  PhotoUser,
  NameUser,
  TagUser,
  LocationUser,
  StatsList,
  StatsItem,
  Label,
  QuantityStats,
} from './Profile.styled';

const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <Description>
        <PhotoUser src={avatar} alt={username} />
        <NameUser>{username}</NameUser>
        <TagUser>@{tag}</TagUser>
        <LocationUser>{location}</LocationUser>
      </Description>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <QuantityStats>{followers}</QuantityStats>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <QuantityStats>{views}</QuantityStats>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <QuantityStats>{likes}</QuantityStats>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
