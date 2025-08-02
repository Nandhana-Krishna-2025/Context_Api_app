import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { useThemeContext } from '../contexts/ThemeContext';

const SettingsScreen = () => {
  const { logout } = useAuth();
  const { toggleTheme, theme, mode } = useThemeContext();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.text }]}>Theme: {mode}</Text>
      <Button title="Toggle Theme" onPress={toggleTheme} color={theme.button} />
      <View style={styles.margin}>
        <Button title="Logout" onPress={logout} color={theme.button} />
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, marginBottom: 10 },
  margin:{marginTop:20},
});
