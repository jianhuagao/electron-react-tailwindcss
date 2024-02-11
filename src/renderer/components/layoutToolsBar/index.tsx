import { memo } from 'react';
import { ReactComponent as LeftIcon } from '../../../../assets/ui/chevron-left.svg';
import { ReactComponent as RightIcon } from '../../../../assets/ui/chevron-right.svg';
import { ReactComponent as ArrowIcon } from '../../../../assets/ui/arrow-path.svg';
import { ReactComponent as SettingIcon } from '../../../../assets/ui/setting.svg';
import { ReactComponent as InboxIcon } from '../../../../assets/ui/inbox.svg';
import { ReactComponent as DarkIcon } from '../../../../assets/ui/moon.svg';
// import { ReactComponent as ThemeIcon } from '../../../../assets/ui/sparkles.svg';
import { ReactComponent as DownIcon } from '../../../../assets/ui/chevron-down.svg';
import { ReactComponent as ComputerIcon } from '../../../../assets/ui/computer-desktop.svg';
import { ReactComponent as SunIcon } from '../../../../assets/ui/sun.svg';
import { useTheme } from '../../configs/ThemeProvider';
import clsx from 'clsx';
import Drawer from '../headlessComponents/drawer';
import Popover from '../headlessComponents/popover';

const darkIconClassName =
  'cursor-pointer group-hover:mx-1 transition-all opacity-0 group-hover:opacity-100 duration-300 w-0 group-hover:w-[18px]';

export default memo(function LayoutToolsBar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-5">
      <div className="cursor-pointer group">
        <LeftIcon className="w-[22px] group-hover:-translate-x-[2px] duration-300 transition-transform" />
      </div>
      <div className="cursor-pointer group">
        <RightIcon className="w-[22px] group-hover:translate-x-[2px] duration-300 transition-transform" />
      </div>
      <ArrowIcon className="w-[22px] cursor-pointer hover:animate-wiggle" />
      {/* <ThemeIcon className="w-[22px] cursor-pointer" /> */}
      <div className="ml-auto">
        <Popover
          trigger={
            <div className="group transition-all flex rounded-full cursor-pointer bg-gray-300/20 dark:bg-white/20 dark:hover:bg-white/10 gap-2 pl-[4px] pr-[10px] py-[4px] text-xs items-center">
              <img
                // src="http://oss.roosports.cn/sit/1390602441770274961/1/e6b0362140054b2585993dc62bcbc1ed.png"
                src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/2771880/6954da9324550c493555d8ec48987e02c63488da.gif"
                alt="avatar"
                className="rounded-full"
                width={24}
              />
              从来不熬夜
              <DownIcon className="w-0 group-hover:w-3 transition-all duration-300" />
            </div>
          }
        />
      </div>
      <div className="group transition-all flex rounded-full hover:bg-gray-300/20 dark:hover:bg-white/10 px-[6px] py-[4px] text-xs items-center">
        <DarkIcon
          onClick={() => {
            setTheme('dark');
          }}
          className={clsx(
            darkIconClassName,
            theme === 'dark' && 'w-[22px] opacity-100',
          )}
        />
        <SunIcon
          onClick={() => {
            setTheme('light');
          }}
          className={clsx(
            darkIconClassName,
            theme === 'light' && 'w-[22px] opacity-100',
          )}
        />
        <ComputerIcon
          onClick={() => {
            setTheme('system');
          }}
          className={clsx(
            darkIconClassName,
            theme.includes('system') && 'w-[22px] opacity-100',
          )}
        />
      </div>
      <Drawer
        trigger={<InboxIcon className="w-[22px] cursor-pointer" />}
        title="Inbox"
        icon={<InboxIcon className="w-[22px]" />}
      />
      <Drawer
        trigger={
          <SettingIcon className="w-[22px] cursor-pointer mr-2 hover:animate-wiggle" />
        }
        title="Setting"
        icon={<SettingIcon className="w-[22px]" />}
      />
    </div>
  );
});
