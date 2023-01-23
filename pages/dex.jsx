import { Default } from '../src/components/layouts/Default';
import { getTokenList } from './api/oneInch';
import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { Link } from '@chakra-ui/react';

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
  heading: {
    alignItems: 'center',
  },
};

function dex() {
  const { tokenList } = getTokenList();
  const [query, setQuery] = useState('');

  const tokens = tokenList?.tokens;
  //Object.keys(tokenList?.tokens).map((adr) => adr.name).toLowerCase().includes(query.toLowerCase())
  console.log(tokenList?.tokens);

  //<Link as={`/${tokens[address].address}`} href="/[address]">
  return (
    <Default pageName="DEX">
      <div className={style.heading}>
        <div>DEX</div>
        <input placeholder="Search..." type="text" onChange={(e) => setQuery(e.target.value)} />
      </div>
      {!tokens
        ? null
        : Object.keys(tokens)
            .filter((adr) => {
              if (query == '') {
                return adr;
              } else {
                return tokens[adr].name.toLowerCase().includes(query.toLowerCase());
              }
            })
            .map((address, index) => (
              <div key={index}>
                <Card style={style.card}>
                  <Link href={`/${tokens[address].name}`}>
                    <img src={tokens[address].logoURI} style={style.img} />
                    <div style={style.name}>
                      {tokens[address].name} <br />
                      {tokens[address].symbol}
                    </div>
                  </Link>
                </Card>
              </div>
            ))}
    </Default>
  );
}

export default dex;
