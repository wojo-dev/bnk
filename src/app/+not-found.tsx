import { colors } from '@/tokens/colors';
import { sizes } from '@/tokens/sizes';
import { radius, spacing } from '@/tokens/spacing';
import { typography } from '@/tokens/typography';
import { Button } from '@/ui/button/button';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFound() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name="compass" size={32} color={colors.label.placeholder} />
      </View>
      <Text style={styles.heading}>Page not found</Text>
      <Text style={styles.message}>The page you&apos;re looking for doesn&apos;t exist.</Text>
      <Button title="Go Home" variant="secondary" onPress={() => router.replace('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
    backgroundColor: colors.background.neutral,
  },
  iconContainer: {
    width: sizes['5xl'],
    height: sizes['5xl'],
    borderRadius: radius['2xl'],
    backgroundColor: colors.background.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  heading: {
    fontSize: typography.heading.fontSize,
    fontWeight: typography.heading.fontWeight,
    fontFamily: typography.heading.fontFamily,
    lineHeight: typography.heading.lineHeight,
    color: colors.label.text,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  message: {
    fontSize: typography.body.fontSize,
    fontWeight: typography.body.fontWeight,
    fontFamily: typography.body.fontFamily,
    lineHeight: typography.body.lineHeight,
    color: colors.label.placeholder,
    marginBottom: spacing.xl,
    textAlign: 'center',
  },
});
