import React from 'react';
import { TabBar } from 'antd-mobile';
import { AppOutline, UnorderedListOutline, UserOutline } from 'antd-mobile-icons';
import { useLocation, useNavigate } from 'react-router-dom';

const tabs = [
  {
    key: 'home',
    title: 'Home',
    icon: <AppOutline />,
    pathlink: "/"
  },
  {
    key: 'calendar',
    title: 'Calendar',
    icon: <UnorderedListOutline />,
    pathlink: "/calendar"
  },
  {
    key: 'sport',
    title: 'Sport',
    icon: <UserOutline />,
    pathlink: "/sport"
  },
];

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const activeTab = tabs.find(tab => tab.pathlink === location.pathname) || tabs[0];

  return (
    <TabBar className='footer' activeKey={activeTab.key} onChange={key => {
      const tab = tabs.find(item => item.key === key);
      if (tab) {
        navigate(tab.pathlink);
      }
    }}>
      {tabs.map(item => (
        <TabBar.Item
          key={item.key}
          icon={item.icon}
          title={item.title}
          itemKey={item.key}
        />
      ))}
    </TabBar>
  );
}

export default Footer;