/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/display-name */
/* eslint-disable react/react-in-jsx-scope */
import { LobbyScreen } from '../../components/templates/Lobby';
import withLayout from '../../components/templates/Layout/withLayout';

const LobbyLayout = withLayout(LobbyScreen);

export default function () {
  return <LobbyLayout edges={['bottom', 'left', 'right', 'top']} />;
}
