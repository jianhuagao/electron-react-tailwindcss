import { memo } from 'react';
import { clsx } from 'clsx';

export default memo(function TitleBar() {
  //获取操作系统
  const osVersion = window.osVersion;

  return (
    <>
      <div
        className={clsx(
          osVersion !== 'win32' && 'justify-center',
          'h-[40px] absolute left-0 top-0 z-50 w-full flex items-center region-drag px-[12px]',
        )}
      >
        {/* 标题 */}
        <div>{/* Electron-React-Tailwidcss */}</div>
      </div>
    </>
  );
});
