import { Recipient } from '@/features/recipients/types/recipient';
import { useTransfer } from '@/features/transfer/hooks/use-transfer';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Button, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './transfer-form.styles';
import { TransferFormSchema, defaultValues, transferFormSchema } from './transfer-form.types';

export const TransferForm = ({ recipient }: { recipient: Recipient }) => {
  const { mutateAsync } = useTransfer();
  const form = useForm<TransferFormSchema>({
    resolver: zodResolver(transferFormSchema),
    defaultValues: {
      ...defaultValues,
      recipientId: recipient?.id ?? '',
      date: new Date().toISOString(),
    },
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
          <Text>{recipient?.name}</Text>
          <Button onPress={form.handleSubmit(onSubmit)} title="Submit" />
        </View>
      </SafeAreaView>
    </FormProvider>
  );
};
