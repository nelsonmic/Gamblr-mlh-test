/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/display-name */
/* eslint-disable react/react-in-jsx-scope */
import { ProfileScreen } from '../../components/templates/Profile';
import withLayout from '../../components/templates/Layout/withLayout';

const ProfileLayout = withLayout(ProfileScreen);

export default function () {
  return <ProfileLayout edges={['bottom', 'left', 'right', 'top']} />;
}
