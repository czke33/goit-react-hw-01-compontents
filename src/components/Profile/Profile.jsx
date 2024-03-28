/*import user from '../data/user.json'*/
import style from '../Profile/profile.module.css'
import PropTypes from 'prop-types'; // ES6




const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={style.avatar}
        />
        <p className={style.name}>{username}</p>
        <p className={style.tag}>{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className={style.label}>Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className={style.label}>Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className={style.label}>Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
};

Profile.propType = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired, 
    likes: PropTypes.number.isRequired,
  })
}

export default Profile;
 