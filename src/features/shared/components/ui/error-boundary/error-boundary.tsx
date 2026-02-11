import { colors } from '@/tokens/colors';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

import { Button } from '@/ui/button/button';

import { errorBoundaryStyles as styles } from './error-boundary.styles';
import { ErrorBoundaryProps } from './error-boundary.types';

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name="alert-circle" size={32} color={colors.label.error} />
      </View>
      <Text style={styles.heading}>Something went wrong</Text>
      <Text style={styles.message}>{error.message}</Text>
      <Button title="Try Again" variant="secondary" onPress={retry} />
    </View>
  );
}
