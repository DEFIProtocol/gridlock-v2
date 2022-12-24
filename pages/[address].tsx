import { Default } from 'components/layouts/Default';

const address = (name: string, address: string) => {
  console.log(name, address);
  return (
    <>
      <Default pageName={name}>
        <p>
          {' '}
          {name} {address}
        </p>
        =
      </Default>
    </>
  );
};

export default address;
