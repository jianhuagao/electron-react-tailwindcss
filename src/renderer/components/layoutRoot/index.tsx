import { memo } from 'react';
import TitleBar from '../titleBar';
import LayoutLeft from '../layoutLeft';
import LayoutContent from '../layoutContent';
import { useTheme } from '../../configs/ThemeProvider';
import clsx from 'clsx';

export default memo(function LayoutRoot() {
  const { isDark } = useTheme();
  // blurImg
  return (
    <div
      className={clsx(
        isDark || 'blurImg',
        'h-screen relative from-[#42275a] select-none to-[#734b6d] dark:bg-gradient-to-r',
      )}
    >
      <TitleBar />
      <div className="flex gap-[6px] h-full">
        {/* 左边导航 */}
        <LayoutLeft />
        {/* 右边页面 */}
        <LayoutContent />
      </div>
    </div>
  );
});
