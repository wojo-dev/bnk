// transfer form

import { useTransfer } from '@/features/transfer/hooks/use-transfer';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { z } from 'zod';
const transferFormSchema = z.object({
  amount: z.number().min(1),
  description: z.string().min(1),
  date: z.string().min(1),
  recipientId: z.string().min(1),
});

type TransferFormSchema = z.infer<typeof transferFormSchema>;

const defaultValues: TransferFormSchema = {
  amount: 0,
  description: '',
  date: '',
  recipientId: '',
};

const TransferForm = () => {
  const { mutateAsync } = useTransfer();
  const form = useForm<TransferFormSchema>({
    resolver: zodResolver(transferFormSchema),
    defaultValues,
  });
  const onSubmit = async (data: TransferFormSchema) => {
    await mutateAsync(data);
  };
  return (
    <FormProvider {...form}>
      <SafeAreaView>
        <View style={styles.container}>
          <Controller
            name="amount"
            control={form.control}
            render={({ field }) => (
              <TextInput
                style={styles.input}
                placeholder="Amount"
                keyboardType="numeric"
                value={field.value ? field.value.toString() : ''}
                onChangeText={(text) => field.onChange(Number(text) || 0)}
                onBlur={field.onBlur}
              />
            )}
          />
          <Controller
            name="description"
            control={form.control}
            render={({ field }) => (
              <TextInput
                style={styles.input}
                placeholder="Description"
                value={field.value}
                onChangeText={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
          <Controller
            name="date"
            control={form.control}
            render={({ field }) => (
              <TextInput
                style={styles.input}
                placeholder="Date"
                value={field.value}
                onChangeText={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
          <Controller
            name="recipientId"
            control={form.control}
            render={({ field }) => (
              <TextInput
                style={styles.input}
                placeholder="Recipient ID"
                value={field.value}
                onChangeText={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
          <Button onPress={form.handleSubmit(onSubmit)} title="Submit" />
        </View>
      </SafeAreaView>
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
});

export default TransferForm;
