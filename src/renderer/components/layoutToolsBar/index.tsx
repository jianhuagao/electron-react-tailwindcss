import { memo } from 'react';
import { ReactComponent as LeftIcon } from '../../../../assets/ui/chevron-left.svg';
import { ReactComponent as RightIcon } from '../../../../assets/ui/chevron-right.svg';
import { ReactComponent as ArrowIcon } from '../../../../assets/ui/arrow-path.svg';
import { ReactComponent as SettingIcon } from '../../../../assets/ui/setting.svg';
import { ReactComponent as InboxIcon } from '../../../../assets/ui/inbox.svg';
import { ReactComponent as DarkIcon } from '../../../../assets/ui/moon.svg';
import { ReactComponent as ThemeIcon } from '../../../../assets/ui/sparkles.svg';
import { ReactComponent as DownIcon } from '../../../../assets/ui/chevron-down.svg';
import { ReactComponent as SunIcon } from '../../../../assets/ui/sun.svg';

export default memo(function LayoutToolsBar() {
  return (
    <div className="flex items-center gap-5">
      <div className="cursor-pointer group">
        <LeftIcon className="w-[22px] group-hover:-translate-x-[2px] duration-300 transition-transform" />
      </div>
      <div className="cursor-pointer group">
        <RightIcon className="w-[22px] group-hover:translate-x-[2px] duration-300 transition-transform" />
      </div>
      <ArrowIcon className="w-[22px] cursor-pointer hover:animate-wiggle" />
      <div className="ml-auto group transition-all flex rounded-full cursor-pointer bg-white/20 hover:bg-white/10 gap-2 pl-[4px] pr-[10px] py-[4px] text-xs items-center">
        <img
          src="http://oss.roosports.cn/sit/1390602441770274961/1/e6b0362140054b2585993dc62bcbc1ed.png"
          alt="avatar"
          className="rounded-full"
          width={24}
        />
        Admin
        <DownIcon className="w-0 group-hover:w-3 transition-all duration-300" />
      </div>
      <ThemeIcon className="w-[22px] cursor-pointer" />
      <div className="group transition-all flex rounded-full hover:bg-white/10 px-[6px] py-[4px] text-xs items-center">
        <DarkIcon className="w-[22px] cursor-pointer transition-all" />
        <SunIcon className="cursor-pointer group-hover:ml-2 transition-all opacity-0 group-hover:opacity-100 duration-300 w-0 group-hover:w-[22px]" />
      </div>
      <InboxIcon className="w-[22px] cursor-pointer" />
      <SettingIcon className="w-[22px] cursor-pointer mr-2 hover:animate-wiggle" />
    </div>
  );
});
