export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    url,
    name,
    login,
    created_at,
  } = user;
  
  

  const createdDate = new Date(created_at);
  const formatedDate = createdDate.toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
});


  return (
    <div className='user'>
      <div>
        <img src={avatar_url} alt='user' className='avatar' />
      </div>
      <div className='name-container'>
        <a href={`https://github.com/${login}`} target="_blank" rel="noopener noreferrer">
          {name || login}
        </a>
        <p>
          User joined on {formatedDate}
        </p>
      </div>
      <div className='profile-info'>
        <p>Public Repos</p>
        <p>{public_repos}</p>
      </div>
      <div>
        <p>Followers</p>
        <p>{followers}</p>
      </div>
      <div>
        <p>Following</p>
        <p>{following}</p>
      </div>
    </div>
  );
}
