import { LobbyScreen } from 'components/templates/Lobby';
import withLayout from 'components/templates/Layout/withLayout';

const LobbyLayout = withLayout(LobbyScreen);

export default function () {
  return <LobbyLayout edges={['bottom', 'left', 'right', 'top']} />;
}
