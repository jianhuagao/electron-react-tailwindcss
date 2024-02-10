import { memo } from 'react';
import TitleBar from '../titleBar';
import LayoutLeft from '../layoutLeft';
import LayoutContent from '../layoutContent';

export default memo(function LayoutRoot() {
  return (
    <div className="h-screen relative from-[#42275a] select-none to-[#734b6d] bg-gradient-to-r">
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
