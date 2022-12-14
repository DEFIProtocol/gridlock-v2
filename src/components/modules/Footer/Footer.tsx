import { Typography, Space } from 'antd';

const Footer = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          display: 'block',
          color: 'lime',
          margin: '0',
          padding: '0',
        }}
      >
        All Rights Reserved
      </div>
      <h1
        style={{
          display: 'block',
          color: 'lime',
          margin: '0',
          padding: '0',
          fontSize: '150%',
        }}
      >
        gridLock
      </h1>
      <div>
        <a style={{ color: 'lime' }} href="/Home">
          Home |
        </a>
        <a style={{ color: 'lime', marginLeft: '.4%' }} href="/1inch">
          DEX
        </a>
      </div>
    </div>
  );
};

export default Footer;
