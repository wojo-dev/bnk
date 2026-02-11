//
import { IconButton } from '@/ui/button/icon-button';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native';
import { Action } from '../../types/action.types';

export const ActionButtons = ({
  actions,
  onActionPress,
}: {
  actions: Action[];
  onActionPress: (action: Action) => void;
}) => {
  return (
    <ScrollView horizontal={true}>
      {actions.map((action) => (
        <IconButton
          key={action.id}
          accessibilityLabel={action.accessibilityLabel}
          icon={<MaterialCommunityIcons name={action.icon as any} />}
          onPress={() => onActionPress(action)}
        />
      ))}
    </ScrollView>
  );
};
