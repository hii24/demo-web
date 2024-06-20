import { observer } from 'mobx-react';
import React, { useState } from 'react';
import TabBar from './TabBar/TabBar';
import MyProfileTab from './MyProfile/MyProfile';
import SecurityTab from './Security/Security';
import BillingTab from './Billing/Billing';

const SettingsPage: React.FC = observer(() => {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (id: number) => {
    setActiveTab(id);
  }

  const tabs = [
    { label: 'My profile', id: 0 },
    { label: 'Security', id: 1 },
    { label: 'Security', id: 2 },
  ];

  return (
    <div>
      <TabBar tabs={tabs} activeTab={activeTab} handleClick={handleClick}/>
      {activeTab === 0 && <MyProfileTab/>}
      {activeTab === 1 && <SecurityTab/>}
      {activeTab === 2 && <BillingTab/>}
    </div>
  );
});

export default SettingsPage;
