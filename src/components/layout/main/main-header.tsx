export const MainHeader = () => {
  return (
    <header className='sticky top-0 z-50 bg-neutral-950 px-6 py-4  text-white'>
      <div className='flex items-center justify-between'>
       <nav className='flex gap-4 text-sm font-bold'>
        <h1 className='text-2xl font-bold'>Portfolio</h1>
        <a href='/about'>About</a>
        <a href='/project'>Project</a>
        <a href='/links'>Links</a>
        <a href='/Play'>Play</a>
       </nav>
      </div>
    </header>
  );
};
