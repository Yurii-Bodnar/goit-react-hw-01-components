import PropTypes from 'prop-types';
import {Item, Text, Status} from './FriendListItem.styled'
const FriendListItem = ({ avatar, name, isOnline}) => {
  return (
    <Item className="item">
      <Status className="status" style={{backgroundColor: isOnline ? "blue" : "red"}}>{isOnline}</Status>
      <img  className="avatar" src={avatar} alt="User avatar" width="48" />
      <Text className="name">{name}</Text>
    </Item>
  );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;


// ?{style={backgroundColor:"blue"}} : {style= {backgroundColor:"red"}}