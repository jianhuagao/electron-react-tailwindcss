import { memo } from 'react';
import { ReactComponent as MenuHomeIcon } from '../../../../assets/menu-home.svg';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default memo(function LayoutMenu() {
  const { pathname } = useLocation();
  return (
    <div className="h-full overflow-y-auto pt-5 pr-[10px]">
      <ul className="">
        {[1].map((x) => (
          <li key={x} className="pb-4 last:pb-0">
            <div className="text-xs pl-1 pb-3 text-white/60 font-medium">
              Getting Started
            </div>
            <ul>
              {['/home', '/example'].map((s) => {
                const isCheck = pathname.startsWith(s);
                return (
                  <li
                    key={s}
                    className={clsx(
                      isCheck && 'bg-gray-300/20',
                      'rounded text-sm px-2 py-2 mb-1 last:mb-0 text-white/80 cursor-pointer hover:bg-gray-300/40 transition-all',
                    )}
                  >
                    <Link to={s} className="flex items-center gap-2">
                      <MenuHomeIcon className="size-5" />
                      {s.replace('/', '')}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
});