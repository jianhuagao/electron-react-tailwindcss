import { memo } from 'react';

import { ReactComponent as SettingIcon } from '../../../../assets/ui/setting.svg';
import { ReactComponent as InboxIcon } from '../../../../assets/ui/inbox.svg';
import { ReactComponent as DarkIcon } from '../../../../assets/ui/moon.svg';

export default memo(function Example() {
  return (
    <div className="grid grid-cols-12 gap-4 pt-4">
      <div className="col-span-12 rounded-lg flex items-center justify-center overflow-hidden h-72 dark:bg-white/20 bg-white/90">
        <img src="https://picsum.photos/760/290" alt="" className="w-full" />
      </div>
      {[
        <SettingIcon className="w-5" />,
        <InboxIcon className="w-5" />,
        <DarkIcon className="w-5" />,
      ].map((Icon, i) => (
        <div
          key={i}
          className="rounded-lg col-span-4 gap-3 cursor-pointer dark:hover:bg-white/10 transition-all flex items-center justify-center h-16 dark:bg-white/20 bg-white/90 hover:bg-white/50"
        >
          {Icon}
          <p>Setting</p>
        </div>
      ))}
    </div>
  );
});
