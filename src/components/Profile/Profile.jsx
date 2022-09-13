import PropTypes from 'prop-types';
import {Wrapper, Text, TextInfo, List, BoxLable, Item} from './Profile.styled'

const Profile = ({username, tag, location, avatar, stats}) => {
    return ( <Wrapper className="profile">
    <div className="description">
      <img
        src={avatar}
        alt="User avatar"
        className="avatar"
        width="200"
      />
      <Text className="name">{username}</Text>
      <TextInfo className="tag">{tag}</TextInfo>
      <TextInfo className="location">{location}</TextInfo>
    </div>
  
    <List className="stats">
      <Item>
        <BoxLable className="label">Followers</BoxLable>
        <span className="quantity">{stats.followers}</span>
      </Item>
      <Item>
        <BoxLable className="label">Views</BoxLable>
        <span className="quantity">{stats.views}</span>
      </Item>
      <Item>
        <BoxLable className="label">likes</BoxLable>
        <span className="quantity">{stats.likes}</span>
      </Item>
    </List>
  </Wrapper> );
}

PropTypes.propTyppes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats:  PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}

export default Profile;

