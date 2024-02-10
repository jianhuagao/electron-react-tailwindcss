import { memo } from 'react';

export default memo(function Example() {
  return (
    <div className="grid grid-cols-2 gap-4 pt-3">
      <div className="col-span-2 rounded-lg flex items-center justify-center h-16 bg-white/20">
        1
      </div>
      <div className="rounded-lg flex items-center justify-center h-16 bg-white/20">
        2
      </div>
      <div className="rounded-lg flex items-center justify-center h-16 bg-white/20">
        3
      </div>
    </div>
  );
});
