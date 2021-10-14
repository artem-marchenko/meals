function Footer() {
  return (
    <footer className='page-footer'>
      <div className='container'>
        <span className='date'>
          © {new Date().getFullYear()} Copyright Text
        </span>
      </div>
    </footer>
  );
}

export { Footer };
