import {Link} from 'react-router-dom'
const UserCard = ({ user }) => {
  const { profile } = user;
  const fullName = `${profile.firstName} ${profile.lastName}`;

  return (
    <div className="user-card">
      <img src={profile.profilePic} alt={`${fullName}'s profile`} className="user-image" />
      <h2>{fullName}</h2>
      <p>Email: {profile.email}</p>
      <p>Phone: {profile.phone}</p>
      <p>Job: {profile.jobTitle}</p>
      <Link className="detail-button" style={{textDecoration:'none'}}>Details</Link>

    </div>
  );
};

export default UserCard;
