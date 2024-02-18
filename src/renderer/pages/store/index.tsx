import { memo } from 'react';
import clsx from 'clsx';
import { Tab } from '@headlessui/react';

// 新鲜推荐
const Fresh = memo(function Fresh() {
  return (
    <div className="ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2">
      <div className="grid grid-cols-6 gap-2">
        <div
          className="col-span-4 row-span-3 rounded-lg cursor-pointer shadow-lg transition-all hover:shadow-2xl"
          style={{
            backgroundImage:
              'url(https://cdn.akamai.steamstatic.com/steam/apps/1238810/capsule_616x353.jpg?t=1701356409)',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        >
          {/* <img
            src="https://cdn.akamai.steamstatic.com/steam/apps/1238810/capsule_616x353.jpg?t=1701356409"
            alt=""
            className="rounded-md min-h-80 flex-grow flex-shrink"
          /> */}
        </div>
        <div className="flex flex-col col-span-2 row-span-3">
          <p className="text-xl font-semibold pt-1 pb-2">《战地风云5》</p>
          <div className="grid grid-cols-2 gap-1">
            {[
              'https://cdn.akamai.steamstatic.com/steam/apps/1238810/ss_0569f81cafd8b18870d6d5bc296ad557f5576067.600x338.jpg',
              'https://cdn.akamai.steamstatic.com/steam/apps/1238810/ss_73a21e43ec44cac9aab41d122a284582d194d352.600x338.jpg',
              'https://cdn.akamai.steamstatic.com/steam/apps/1238810/ss_0c20c45d2e00feae5b9edfb6526662cc3c669164.600x338.jpg',
              'https://cdn.akamai.steamstatic.com/steam/apps/1238810/ss_d1952d018415b94bed85a503713a05ab12a407d6.600x338.jpg',
            ].map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                className="rounded size-auto cursor-pointer hover:shadow-lg"
              />
            ))}
          </div>
          <div className="text-sm mt-2">
            <strong className="text-[#a3cf06]">为您推荐</strong>
            ，因为您玩过标有以下标签的游戏：
            <div className="flex flex-wrap gap-1 text-xs mt-1">
              {['大逃杀', '第一人称射击游戏', '玩家对战'].map((tag) => (
                <div
                  key={tag}
                  className="rounded dark:bg-gray-400/40 bg-gray-500/50 text-white/80 px-1 py-[2px]"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="flex text-xs mt-2">
            <div className="bg-[#4c6b22] text-[#BEEE11] p-1 rounded-s">
              -92%
            </div>
            <div className="bg-[#384553] p-1 text-[#BEEE11] rounded-e">
              <span className="text-[#738895] line-through mr-1">¥220</span>
              ¥18.24
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

// 销量
const Sales = memo(function Sales() {
  const data = [
    {
      img: 'https://cdn.akamai.steamstatic.com/steam/apps/578080/header.jpg?t=1707123905',
      title: 'PUBG: BATTLEGROUNDS',
      time: '5h ago',
      comments: 'xxx comments',
      shares: 'xxx shares',
    },
    {
      img: 'https://cdn.akamai.steamstatic.com/steam/apps/730/header_schinese.jpg?t=1698860631',
      title: 'Counter-Strike 2',
      time: '5h ago',
      comments: 'xxx comments',
      shares: 'xxx shares',
    },
    {
      img: 'https://cdn.akamai.steamstatic.com/steam/apps/1623730/header.jpg?t=1705662211',
      title: 'Palworld',
      time: '5h ago',
      comments: 'xxx comments',
      shares: 'xxx shares',
    },
    {
      img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/header_schinese.jpg?t=1706698946',
      title: 'Cyberpunk 2077',
      time: '5h ago',
      comments: 'xxx comments',
      shares: 'xxx shares',
    },
    {
      img: 'https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg?t=1706735551',
      title: 'Apex Legends™',
      time: '5h ago',
      comments: 'xxx comments',
      shares: 'xxx shares',
    },
  ];
  return (
    <div className="ring-white/60 cursor-pointer ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2">
      <ul>
        {data.map((item) => (
          <li
            key={item.title}
            className="relative rounded-md p-3 dark:hover:bg-gray-100/20 hover:bg-gray-100 flex gap-4 items-center"
          >
            <img src={item.img} alt="" width={100} className="rounded-md" />
            <div>
              <h3 className="text-sm font-medium leading-5">{item.title}</h3>
              <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500 dark:text-gray-400">
                <li>{item.time}</li>
                <li>&middot;</li>
                <li>{item.comments}</li>
                <li>&middot;</li>
                <li>{item.shares}</li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

const TabComp = memo(function TabComp() {
  const tabItems = ['新鲜推荐', '销量', '类别', '点数商店', '新闻', '实验室'];

  return (
    <div className="w-full">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-[#EEEEEE] dark:bg-blue-900/20 p-1">
          {tabItems.map((itemName) => (
            <Tab
              key={itemName}
              className={({ selected }) =>
                clsx(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  selected
                    ? 'bg-white dark:bg-white/30 text-blue-700/80 dark:text-blue-300 shadow'
                    : 'dark:text-blue-100 text-[#3a4d5c] hover:bg-white/[0.12] dark:hover:text-white',
                )
              }
            >
              {itemName}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="rounded-xl bg-white dark:bg-blue-900/10 p-4 mt-2">
          <Tab.Panel key={0}>
            <Fresh />
          </Tab.Panel>
          <Tab.Panel key={1}>
            <Sales />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
});

export default memo(function Store() {
  return (
    <div className="pt-3">
      <TabComp />
    </div>
  );
});
