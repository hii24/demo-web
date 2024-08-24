import React, { useState } from 'react';
import styles from './styles.module.scss';
import { EResourcingTags } from '../../../api/getResources';

interface IProps {
  onFilterChange: (filter: string) => void,
}

const SessionsFilter: React.FC<IProps> = (props) => {
  const [activeItem, setActiveItem] = useState('All');
  const filterItems = [
    {
      title: 'All',
      isActive: activeItem === 'All',
    },
    {
      title: EResourcingTags.GetCalm,
      isActive: activeItem === EResourcingTags.GetCalm,
    },
    {
      title: EResourcingTags.FeelConfident,
      isActive: activeItem === EResourcingTags.FeelConfident,
    },
    {
      title: EResourcingTags.BecomeComfortable,
      isActive: activeItem === EResourcingTags.BecomeComfortable,
    },
  ];
  const handleItemClick = (type: string) => {
    setActiveItem(type);
    props.onFilterChange(type);
  };
  return (
    <div className={styles.container}>
      {
        filterItems.map((item) => {
          return (
            <SessionFilterItem key={item.title} title={item.title} isActive={item.isActive} onClick={() => handleItemClick(item.title)}/>
          );
        })
      }
    </div>
  );

};

interface ISessionFilterItemProps {
  title: string,
  isActive: boolean,
  onClick: () => void,
}

const SessionFilterItem: React.FC<ISessionFilterItemProps> = (props) => {

  return (
    <div className={`${styles.filterWrapper} ${props.isActive ? styles.isActive : ''}`} onClick={props.onClick}>
      {props.title}
    </div>
  );
};
export default SessionsFilter;
