import { getTokenList } from '../../../../pages/api/oneInch';
import React, { useState } from 'react';
import { Link } from 'next/link';
import { Card } from 'antd';

const style = {
  img: {
    height: '32px',
    width: '32px',
    marginRight: '20px',
    float: 'left',
  },
  name: {
    fontWeight: '600',
    fontSize: '15px',
    lineHeight: '14px',
    color: 'lime',
    position: 'inline-block',
  },
  card: {
    backgroundColor: '#505050',
    width: '100%',
    color: 'lime',
    border: '1px solid #202020',
    margin: '5px auto',
  },
};

function TokenList() {
  const { tokenList } = getTokenList();

  const tokens = tokenList?.tokens;
  console.log(tokenList?.tokens);
  return (
    <>
      {!tokens
        ? null
        : Object.keys(tokens).map((address, index) => (
            <div key={index}>
              <Card style={style.card}>
                <Link to={`/${tokens[address].address}`}>
                  <img src={tokens[address].logoURI} style={style.img} />
                  <div style={style.name}>
                    {tokens[address].name} <br />
                    {tokens[address].symbol}
                  </div>
                </Link>
              </Card>
            </div>
          ))}
    </>
  );
}

export default TokenList;
