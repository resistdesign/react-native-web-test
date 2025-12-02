import React, { useMemo, useState } from 'https://esm.sh/react@18.3.1';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'https://esm.sh/react-native-web@0.19.12';

const fields = [
  {
    key: 'name',
    label: 'Name',
    placeholder: 'Ada Lovelace',
    autoComplete: 'name',
  },
  {
    key: 'email',
    label: 'Email',
    placeholder: 'ada@example.com',
    autoComplete: 'email',
    keyboardType: 'email-address',
  },
];

export default function App() {
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const isComplete = useMemo(
    () => formValues.name.trim() && formValues.email.trim() && formValues.message.trim(),
    [formValues]
  );

  const handleChange = (key, value) => {
    setFormValues((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>React Native Web Form</Text>
          <Text style={styles.subtitle}>Fill out the form to say hello.</Text>

          {fields.map((field) => (
            <View key={field.key} style={styles.field}>
              <Text style={styles.label}>{field.label}</Text>
              <TextInput
                style={styles.input}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                keyboardType={field.keyboardType}
                value={formValues[field.key]}
                onChangeText={(value) => handleChange(field.key, value)}
              />
            </View>
          ))}

          <View style={styles.field}>
            <Text style={styles.label}>Message</Text>
            <TextInput
              style={[styles.input, styles.messageInput]}
              placeholder="Tell us a bit about what you need"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              value={formValues.message}
              onChangeText={(value) => handleChange('message', value)}
            />
          </View>

          <TouchableOpacity
            style={[styles.button, !isComplete && styles.buttonDisabled]}
            activeOpacity={0.85}
            onPress={handleSubmit}
            disabled={!isComplete}
          >
            <Text style={styles.buttonText}>{submitted ? 'Submitted' : 'Send message'}</Text>
          </TouchableOpacity>

          {submitted && (
            <View style={styles.summary}>
              <Text style={styles.summaryTitle}>Thanks! Here is what we received:</Text>
              <Text style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Name:</Text> {formValues.name}
              </Text>
              <Text style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Email:</Text> {formValues.email}
              </Text>
              <Text style={styles.summaryItem}>
                <Text style={styles.summaryLabel}>Message:</Text> {formValues.message}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f6f7fb',
  },
  container: {
    flexGrow: 1,
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 520,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: '#4b5563',
    marginBottom: 20,
  },
  field: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 6,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    backgroundColor: '#f9fafb',
    color: '#111827',
  },
  messageInput: {
    minHeight: 120,
  },
  button: {
    marginTop: 8,
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#93c5fd',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  summary: {
    marginTop: 20,
    padding: 14,
    backgroundColor: '#f0f9ff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#bfdbfe',
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    color: '#1e3a8a',
  },
  summaryItem: {
    marginBottom: 6,
    fontSize: 14,
    color: '#111827',
    lineHeight: 20,
  },
  summaryLabel: {
    fontWeight: '700',
  },
});
