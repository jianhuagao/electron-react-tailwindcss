import { ReactNode, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { ReactComponent as StoreIcon } from '../../../../assets/menu/store.svg';
import { ReactComponent as CommunityIcon } from '../../../../assets/menu/community.svg';
import { ReactComponent as ChatIcon } from '../../../../assets/menu/chat.svg';
import { ReactComponent as PoweredIcon } from '../../../../assets/menu/powered.svg';

interface MenuItemProps {
  icon: ReactNode;
  title: string;
  path: string;
}

const MenuItem = memo(function MenuItem({ icon, title, path }: MenuItemProps) {
  const { pathname } = useLocation();
  const isCheck = pathname.startsWith(path);
  return (
    <li className='p-1'>
      <Link to={path} className={clsx(
        isCheck && 'bg-gray-300/20',
        'rounded text-sm px-2 py-2 flex z-10 items-center gap-2 dark:text-white/80 text-black/80 cursor-pointer hover:bg-gray-300/40 transition-all',
      )}>
        {icon}
        {title}
      </Link>
    </li>
  );
});

export default memo(function LayoutMenu() {
  return (
    <div className="h-full overflow-y-auto pt-5 pr-[10px]">
      <ul className="">
        <li className="pb-4 last:pb-0">
          <div className="text-xs pl-1 pb-3 dark:text-white/60 text-black/60 font-medium">
            推荐
          </div>
          <ul>
            <MenuItem
              icon={<StoreIcon className="size-5" />}
              title="商店"
              path="/store"
            />
            <MenuItem
              icon={<CommunityIcon className="size-5" />}
              title="社区"
              path="/community"
            />
            <MenuItem
              icon={<ChatIcon className="size-5" />}
              title="聊天"
              path="/chat"
            />
            <MenuItem
              icon={<PoweredIcon className="size-5" />}
              title="客服"
              path="/powered"
            />
          </ul>
        </li>
      </ul>
    </div>
  );
});
