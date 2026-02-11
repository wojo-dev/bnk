import { colors } from '@/tokens/colors';
import { Button } from '@/ui/button/button';
import { Chip } from '@/ui/chip/chip';
import { TextArea } from '@/ui/textarea/textarea';
import { Feather } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { transferFormStyles as styles } from './transfer-form.styles';
import {
  defaultValues,
  TransferFormProps,
  transferFormSchema,
  TransferFormSchema,
} from './transfer-form.types';

const QUICK_AMOUNTS = [50, 100, 150, 250, 500];

export const TransferForm = ({ recipient, balance, onTransfer }: TransferFormProps) => {
  const [amountFocused, setAmountFocused] = useState(false);
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.section}>
            <Controller
              name="amount"
              control={form.control}
              render={({ field, fieldState }) => (
                <View style={styles.amountContainer}>
                  <Text style={styles.amountLabel}>Amount</Text>
                  <View
                    style={[
                      styles.amountInputWrapper,
                      amountFocused && styles.amountInputWrapperFocused,
                      fieldState.error && styles.amountInputWrapperError,
                    ]}>
                    <Text style={styles.amountCurrency}>RM</Text>
                    <TextInput
                      style={styles.amountInput}
                      placeholder="0.00"
                      placeholderTextColor={colors.label.placeholder}
                      keyboardType="numeric"
                      value={field.value ? field.value.toString() : ''}
                      onChangeText={(text) => field.onChange(Number(text) || 0)}
                      onFocus={() => setAmountFocused(true)}
                      onBlur={() => {
                        setAmountFocused(false);
                        field.onBlur();
                      }}
                    />
                  </View>
                  {fieldState.error && (
                    <View style={styles.amountError}>
                      <Feather name="alert-circle" size={14} color={colors.label.error} />
                      <Text style={styles.amountErrorText}>{fieldState.error.message}</Text>
                    </View>
                  )}
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
                <TextArea
                  title="Description"
                  placeholder="Description"
                  value={field.value}
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                  error={fieldState.error?.message}
                />
              )}
            />
          </View>
          <View style={styles.spacer} />
          <Button
            onPress={form.handleSubmit(onSubmit)}
            title={`Send RM ${form.watch('amount') || '0.00'}`}
            icon={<Feather name="send" size={18} color="#FFFFFF" />}
            disabled={form.formState.isSubmitting}
          />
        </View>
      </TouchableWithoutFeedback>
    </FormProvider>
  );
};
