/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/react-in-jsx-scope */
import { WagerScreen } from '../../components/templates/Wager';
import withLayout from '../../components/templates/Layout/withLayout';

const WagerLayout = withLayout(WagerScreen);

export default function () {
  return <WagerLayout edges={['bottom', 'left', 'right', 'top']} />;
}
