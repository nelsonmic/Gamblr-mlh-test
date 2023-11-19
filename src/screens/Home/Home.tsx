/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/display-name */
/* eslint-disable react/react-in-jsx-scope */
import { HomeScreen } from '../../components/templates/Home';
import withLayout from '../../components/templates/Layout/withLayout';

const HomeLayout = withLayout(HomeScreen);

export default function () {
  return <HomeLayout edges={['bottom', 'left', 'right', 'top']} />;
}
