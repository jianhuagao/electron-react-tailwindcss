import clsx from 'clsx';
import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import LayoutToolsBar from '../layoutToolsBar';

export default memo(function LayoutContent() {
  //mac系统
  const isMacOs = window.osVersion === 'darwin';

  return (
    <div
      className={clsx(
        isMacOs
          ? 'my-[20px] mr-[18px] rounded-lg p-5'
          : 'blurImg-tr !bg-[length:30%]',
        'flex-grow dark:bg-black/20 bg-[#fafafa]/80',
      )}
    >
      <LayoutToolsBar />
      <div className={clsx(isMacOs || 'p-5 pt-2')}>
        <Outlet />
      </div>
    </div>
  );
});
