// section-title types

import { ViewProps } from 'react-native';

export type SectionTitleProps = ViewProps & {
  title: string;
  actionLabel?: string;
  onAction?: () => void;
};
