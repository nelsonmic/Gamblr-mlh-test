/* eslint-disable react/react-in-jsx-scope */
import { type ComponentType, type FC } from 'react';
import Layout from './Layout';
import type { LayoutProps } from './Layout';

type WithLayoutProps = LayoutProps & {
  bg?: string;
  edges?: Array<'top' | 'right' | 'bottom' | 'left'>;
  gradient?: boolean;
};

const withLayout = <P extends object>(
  WrappedComponent: ComponentType<P>,
): FC<P & WithLayoutProps> => {
  const WithLayoutComponent: FC<P & WithLayoutProps> = ({
    bg,
    className,
    edges,
    paddingTop,
    ...rest
  }) => (
    <Layout bg={bg} className={className} edges={edges} paddingTop={paddingTop}>
      <WrappedComponent {...(rest as P)} />
    </Layout>
  );

  return WithLayoutComponent;
};

export default withLayout;
