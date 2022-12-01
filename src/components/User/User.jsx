import PropTypes from 'prop-types';
import {Container, Description, UserName, StatusList} from './User.styled'

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
            <p className="tag"> @{tag} </p>
            <p className="location"> {location} </p>
          </div>
        </Description>
        <StatusList className="stats">
          <li>
            <span className="label">Followers </span>
            <span className="quantity">{stats.followers}</span>
          </li>
          <li>
            <span className="label">Views </span>
            <span className="quantity"> {stats.views}</span>
          </li>
          <li>
            <span className="label">Likes </span>
            <span className="quantity">{stats.likes}</span>
          </li>
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
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
     }).isRequired
  }).isRequired

};
      