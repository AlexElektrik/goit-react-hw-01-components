import PropTypes from "prop-types";
import {
  Container,
  Description,
  UserName,
  StatusList,
  Item,
  Quantity,
  Label,
  Tag,
} from "./User.styled";

export const User = ({
  profile: { username, tag, location, avatar, stats },
}) => {
  return (
    <section>
      <Container>
        <Description>
          <img
            src={avatar}
            alt={username}
            className="avatar"
            width="45"
            height="45"
          />
          <div>
            <UserName> {username} </UserName>
            <Tag> @{tag} </Tag>
            <p> {location} </p>
          </div>
        </Description>
        <StatusList>
          <Item>
            <Label>Followers </Label>
            <Quantity>{stats.followers}</Quantity>
          </Item>
          <Item>
            <Label>Views </Label>
            <Quantity> {stats.views}</Quantity>
          </Item>
          <Item>
            <Label>Likes </Label>
            <Quantity>{stats.likes}</Quantity>
          </Item>
        </StatusList>
      </Container>
    </section>
  );
};

User.propTypes = {
  profile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
