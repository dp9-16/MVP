import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/");
  }
  return (
    <div className='header'>
      <p onClick={handleClick}>Home</p>
      <a href='#about-us'>About Us</a>
    </div>
  )
}

export default Header;