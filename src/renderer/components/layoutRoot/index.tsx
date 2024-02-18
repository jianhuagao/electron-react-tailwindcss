import { memo } from 'react';
import TitleBar from '../titleBar';
import LayoutLeft from '../layoutLeft';
import LayoutContent from '../layoutContent';
import { useTheme } from '../../configs/ThemeProvider';
import clsx from 'clsx';

export default memo(function LayoutRoot() {
  const { isDark } = useTheme();
  //mac系统
  const isMacOs = window.osVersion === 'darwin';
  // blurImg
  return (
    <div
      className={clsx(
        isDark || 'blurImg',
        'h-screen relative from-[#424676] select-none to-[#9276A5] via-[#676896] dark:bg-gradient-to-br',
      )}
    >
      {isMacOs && <TitleBar />}
      <div className="flex gap-[6px] h-full">
        {/* 左边导航 */}
        <LayoutLeft />
        {/* 右边页面 */}
        <LayoutContent />
      </div>
    </div>
  );
});
