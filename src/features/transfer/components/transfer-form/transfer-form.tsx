import { Recipient } from '@/features/recipients/types/recipient';
import { Input } from '@/features/shared/components/ui/input/input';
import { Button } from '@/ui/button/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { transferFormStyles as styles } from './transfer-form.styles';
import { TransferFormSchema, defaultValues, transferFormSchema } from './transfer-form.types';

type TransferFormProps = {
  recipient: Recipient;
  balance: number;
  onTransfer: (data: TransferFormSchema) => Promise<void>;
};

export const TransferForm = ({ recipient, balance, onTransfer }: TransferFormProps) => {
  const form = useForm<TransferFormSchema>({
    resolver: zodResolver(transferFormSchema),
    defaultValues: {
      ...defaultValues,
      recipientId: recipient?.id ?? '',
      date: new Date().toISOString(),
    },
  });
  const onSubmit = async (data: TransferFormSchema) => {
    if (data.amount > balance) {
      form.setError('amount', { message: 'Amount exceeds your current balance' });
      return;
    }
    await onTransfer(data);
  };
  return (
    <FormProvider {...form}>
      <View style={styles.container}>
        <Controller
          name="amount"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              title="Amount"
              placeholder="Amount"
              keyboardType="numeric"
              value={field.value ? field.value.toString() : ''}
              onChangeText={(text) => field.onChange(Number(text) || 0)}
              onBlur={field.onBlur}
              error={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="description"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              title="Description"
              placeholder="Description"
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              error={fieldState.error?.message}
            />
          )}
        />
        <Text>{recipient?.name}</Text>
        <Button
          onPress={form.handleSubmit(onSubmit)}
          title={form.formState.isSubmitting ? 'Submitting...' : 'Submit'}
          disabled={form.formState.isSubmitting}
        />
      </View>
    </FormProvider>
  );
};
