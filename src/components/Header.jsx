import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='main-nav'>
      <div className='nav-wrapper'>
        <span className='logo'>UKAD</span>
        <ul id='nav' className='nav'>
          <li className='nav_link'>
            <Link to='/'>HOME</Link>
          </li>
          <li className='nav_link'>
            <Link to='/products'>PRODUCTS</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
