import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='#1a237e indigo darken-4'>
      <div className='nav-wrapper wrap'>
        <span className='brand-logo logo'>Meals</span>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/meals'>Meals</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
