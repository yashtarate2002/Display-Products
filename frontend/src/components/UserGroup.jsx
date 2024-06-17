import { useEffect, useState } from 'react';
import axios from 'axios';
import '../Style/FeaturedUsers.css';
import UserCard from './UserCard.jsx'


const FeaturedUsers = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.post('https://prod.imkloud.com/api/user-groups/v2/retrieve/5G46npPukBgjkHEWw', {
        auth: {
          apiKey: "3AxFH2MfurQYFS8LRFCHpdHFHrjKhp",
          orgId: "YshrFJcsDP8PT6cjr",
          type:"apiKey",
        },
        pagination: {
          limit: 10, 
          skip: 0,
        },
      });

      setData(response.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <br />
      <br />
      <h1>User Group</h1>
      {error && <div>Error: {error.message}</div>}
      <div className="user-grid">
        {data.map(user => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default FeaturedUsers;
