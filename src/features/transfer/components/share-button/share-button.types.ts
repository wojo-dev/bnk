import { TransferDetailData } from '@/features/transfer/components/transfer-detail/transfer-detail.type';
import { StyleProp, ViewStyle } from 'react-native';

export type ShareButtonProps = {
  data: TransferDetailData;
  style?: StyleProp<ViewStyle>;
};
