import { Popover as UiPopover, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface PopoverProps {
  trigger?: React.ReactNode;
}

export default function Popover({ trigger }: PopoverProps) {
  return (
    <UiPopover className="relative">
      {({ open }) => (
        <>
          <UiPopover.Button>{trigger}</UiPopover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <UiPopover.Panel className="absolute left-1/2 z-10 mt-3 w-[200px] max-w-sm -translate-x-3/4 transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg bg-white/60 dark:bg-white/10 backdrop-blur-xl p-5">
                <p>profile</p>
                <p>profile</p>
                <p>profile</p>
                <p>profile</p>
              </div>
            </UiPopover.Panel>
          </Transition>
        </>
      )}
    </UiPopover>
  );
}
