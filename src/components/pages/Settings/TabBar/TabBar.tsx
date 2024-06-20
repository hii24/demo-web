import Tab from './Tab/Tab';
import styles from './styles.module.scss';
import React from 'react';

interface TabBarProps {
  tabs: { label: string; id: number }[];
  handleClick: (id: number) => void;
  activeTab: number;
}

const TabBar: React.FC<TabBarProps> = ({tabs, activeTab, handleClick}) => {

  const style = activeTab === 2 ?
    {left: 'calc(67.6% - 6px)',} :
    {left: `calc(${33.2 * activeTab}% + 6px)`};

  return (
    <div className={styles.container}>
      {tabs.map((tab, index) => (
        <Tab key={index} label={tab.label} isActive={tab.id === activeTab} onClick={() => handleClick(tab.id)}/>
      ))}
      <div className={styles.activeTab} style={style}/>
    </div>
  );
};

export default TabBar;
