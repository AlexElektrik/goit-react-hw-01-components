import PropTypes from 'prop-types';
import {Container, Description, UserName, StatusList, Item, Quantity, Label, Tag} from './User.styled'

export const Profile = ({ profile: { username, tag, location, avatar, stats } }) => {
  return (
    <section className="section  ">
      <Container className="profile container">
        <Description className="description">
          <img 
           src={avatar}
           alt={username}  
           className="avatar"
            width="45"
            height="45"
           />
          <div>
            <UserName className="name"> {username} </UserName>
            <Tag className="tag"> @{tag} </Tag>
            <p className="location"> {location} </p>
          </div>
        </Description>
        <StatusList className="stats">
          <Item>
            <Label className="label">Followers </Label>
            <Quantity className="quantity">{stats.followers}</Quantity>
          </Item>
          <Item>
            <Label className="label">Views </Label>
            <Quantity className="quantity"> {stats.views}</Quantity>
          </Item>
          <Item>
            <Label className="label">Likes </Label>
            <Quantity className="quantity">{stats.likes}</Quantity>
          </Item>
       </StatusList> 
      </Container>
    </section>
      )
};



Profile.propTypes = {
  profile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
     }).isRequired
  }).isRequired

};
      