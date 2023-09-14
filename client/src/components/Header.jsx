import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/");
  }
  return (
    <div className='header'>
      <div style={{'display':'flex','alignItems':'center','justifyContent':'space-evenly'}}>
      <p onClick={handleClick}>HOME</p>
      <a href='#about-us'>ABOUT US</a>
      </div>
      <div className='logo'>
      </div>
    </div>
  )
}

export default Header;