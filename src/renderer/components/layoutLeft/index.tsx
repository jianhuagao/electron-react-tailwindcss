import clsx from 'clsx';
import { memo } from 'react';
import LayoutMenu from '../layoutMenu';
import tailwindcssIcon from '../../../../assets/tailwindcss.svg';

export default memo(function LayoutLeft() {
  //获取操作系统
  const osVersion = window.osVersion;

  return (
    <div
      className={clsx(
        'min-w-[200px] rounded-tr-lg flex flex-col py-5 pl-[18px]',
        osVersion !== 'win32' && 'pt-10',
      )}
    >
      {/* logo部分 */}
      <div className="py-3">
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <img width="160" alt="tailwindcss" src={tailwindcssIcon} />
        </a>
      </div>
      {/* 导航部分 */}
      <LayoutMenu />
    </div>
  );
});
