import React from 'react';

const Menu = ({ onSectionChange, menuOpened, setMenuOpened }) => {

  console.log(menuOpened);

  return (
    <div className='btn-menu'>
      <button
        type='button'
        onClick={() => { setMenuOpened(!menuOpened) }}
        className='fixed z-20 top-12 right-12 p-3 bg-indigo-600 h-11 w-11 rounded-md'
      >
        <div className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? 'rotate-45 translate-y-0.5' : ''}`}></div>
        <div className={`bg-white h-0.5 rounded-md w-full transition-all my-1 ${menuOpened ? 'hidden' : ''}`}></div>
        <div className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? '-rotate-45 ' : ''}`}></div>
      </button>

      <div className={`box-navigation fixed z-10 top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col ${menuOpened ? 'w-96' : 'w-0'}`}>
        <div className='content-navigation flex-1 flex flex-col justify-center gap-6 p-8'>
          <MenuButton label={'About'} onClick={() => onSectionChange(0)}/>
          <MenuButton label={'Skills'} onClick={() => onSectionChange(1)}/>
          <MenuButton label={'Projects'} onClick={() => onSectionChange(2)}/>
          <MenuButton label={'Contact'} onClick={() => onSectionChange(3)}/>
        </div>
      </div>
    </div>
  );
}

const MenuButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors'
    >
      {label}
    </button>
  )
}

export default Menu;
