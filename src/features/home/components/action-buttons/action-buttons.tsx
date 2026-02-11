//
import { IconButton } from '@/ui/button/icon-button';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';
import { Action } from '../../types/action.types';

export const ActionButtons = ({
  actions,
  onActionPress,
}: {
  actions: Action[];
  onActionPress: (action: Action) => void;
}) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignSelf: 'stretch' }}>
      {actions.map((action) => (
        <IconButton
          key={action.id}
          accessibilityLabel={action.accessibilityLabel}
          label={action.label}
          color={action.color}
          icon={<MaterialCommunityIcons name={action.icon as any} />}
          onPress={() => onActionPress(action)}
        />
      ))}
    </View>
  );
};
