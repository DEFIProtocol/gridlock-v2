import { Home } from 'components/templates/home';
import { Default } from 'components/layouts/Default';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Default pageName="Home">
      <Home />
    </Default>
  );
};

export default HomePage;
