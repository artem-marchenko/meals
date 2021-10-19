import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='nav'>
      <div className='nav-wrapper wrap'>
        <span className='brand-logo logo'>UCAD</span>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
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
