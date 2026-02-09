import React from 'react';
import { Platform, ScrollView, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + 10,
  };

  const contentPlatformStyle = Platform.select({
    android: {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      paddingBottom: insets.bottom,
    },
  });

  return (
    <ScrollView
      style={styles.scrollView}
      contentInset={insets}
      contentContainerStyle={[styles.contentContainer, contentPlatformStyle]}>
      <Text>Explore</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    maxWidth: 100,
    flexGrow: 1,
  },
  titleContainer: {
    gap: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  centerText: {
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  linkButton: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
    justifyContent: 'center',
    gap: 1,
    alignItems: 'center',
  },
  sectionsWrapper: {
    gap: 5,
    paddingHorizontal: 10,
    paddingTop: 3,
  },
  collapsibleContent: {
    alignItems: 'center',
  },
  imageTutorial: {
    width: '100%',
    aspectRatio: 296 / 171,
    borderRadius: 3,
    marginTop: 2,
  },
  imageReact: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});
