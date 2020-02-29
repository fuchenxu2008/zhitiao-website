import React from 'react';
import './topbar.css';

export default function TopBar() {
  const currentTab = 1;
  return (
    <div className="home-top-tab">
      <div className="home-top-item">
        <span
          style={{
            color: currentTab === 0 ? '#40BC96' : '',
            marginLeft: '14%'
          }}
        >
          动态
        </span>
      </div>
      <div className="home-top-item" style={{ width: '34%' }}>
        <span style={{ color: currentTab === 1 ? '#40BC96' : '' }}>最新</span>
      </div>
      <div className="home-top-item">
        <span
          style={{
            color: currentTab === 2 ? '#40BC96' : '',
            marginRight: '14%'
          }}
        >
          热门
        </span>
      </div>
      <div
        className="home-top-line-outer"
        style={{ transform: 'translateX(' + 26.45 * (currentTab - 1) + '%)' }}
      >
        <div className="home-top-line" />
      </div>
    </div>
  );
}
