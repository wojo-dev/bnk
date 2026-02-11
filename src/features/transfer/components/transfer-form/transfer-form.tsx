import { Button } from '@/ui/button/button';
import { Chip } from '@/ui/chip/chip';
import { Input } from '@/ui/input/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { transferFormStyles as styles } from './transfer-form.styles';
import {
  defaultValues,
  TransferFormProps,
  transferFormSchema,
  TransferFormSchema,
} from './transfer-form.types';

const QUICK_AMOUNTS = [50, 100, 150, 250, 500];

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
            <View>
              <Input
                title="Amount"
                placeholder="Amount"
                keyboardType="numeric"
                icon={<Text style={styles.currencyLabel}>RM</Text>}
                value={field.value ? field.value.toString() : ''}
                onChangeText={(text) => field.onChange(Number(text) || 0)}
                onBlur={field.onBlur}
                error={fieldState.error?.message}
              />
              <View style={styles.chipGroup}>
                {QUICK_AMOUNTS.map((amount) => (
                  <Chip
                    key={amount}
                    label={`RM ${amount}`}
                    selected={field.value === amount}
                    onPress={() => field.onChange(amount)}
                  />
                ))}
              </View>
            </View>
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

        <Button
          onPress={form.handleSubmit(onSubmit)}
          title={form.formState.isSubmitting ? 'Submitting...' : 'Submit'}
          disabled={form.formState.isSubmitting}
        />
      </View>
    </FormProvider>
  );
};
