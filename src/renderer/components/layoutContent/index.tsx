import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import LayoutToolsBar from '../layoutToolsBar';

export default memo(function LayoutContent() {
  return (
    <div className="flex-grow rounded-lg p-5 dark:bg-black/20 bg-[#fafafa]/80 my-[20px] mr-[18px]">
      <LayoutToolsBar />
      <Outlet />
    </div>
  );
});
