type Transaction = {
  id: string;
  recipientId: string;
  name: string;
  bank: string;
  currency: string;
  amount: number;
  status: string;
  createdAt: string;
};

declare global {
  var __transactions: Transaction[] | undefined;
}

const seedTransactions: Transaction[] = [
  {
    id: '1',
    recipientId: 'rcp_001',
    name: 'Sarah Lim',
    bank: 'Maybank',
    currency: 'RM',
    amount: 250.0,
    status: 'completed',
    createdAt: '2026-02-10T09:42:00Z',
  },
  {
    id: '2',
    recipientId: 'rcp_002',
    name: 'Mohd Hassan',
    bank: 'CIMB',
    currency: 'RM',
    amount: 500.0,
    status: 'completed',
    createdAt: '2026-02-09T08:15:00Z',
  },
  {
    id: '3',
    recipientId: 'rcp_003',
    name: 'Raj Kumar',
    bank: 'Public Bank',
    currency: 'RM',
    amount: 120.0,
    status: 'completed',
    createdAt: '2026-02-09T16:30:00Z',
  },
  {
    id: '4',
    recipientId: 'rcp_004',
    name: 'Mei Yin Tan',
    bank: 'RHB',
    currency: 'RM',
    amount: 85.5,
    status: 'pending',
    createdAt: '2026-02-09T13:12:00Z',
  },
  {
    id: '5',
    recipientId: 'rcp_005',
    name: 'Nurul Rahman',
    bank: 'Bank Islam',
    currency: 'RM',
    amount: 1200.0,
    status: 'completed',
    createdAt: '2026-02-08T18:00:00Z',
  },
  {
    id: '6',
    recipientId: 'rcp_006',
    name: 'Jason Wong',
    bank: 'Hong Leong',
    currency: 'RM',
    amount: 350.0,
    status: 'completed',
    createdAt: '2026-02-08T11:30:00Z',
  },
  {
    id: '7',
    recipientId: 'rcp_001',
    name: 'Sarah Lim',
    bank: 'Maybank',
    currency: 'RM',
    amount: 75.0,
    status: 'completed',
    createdAt: '2026-02-08T09:00:00Z',
  },
  {
    id: '8',
    recipientId: 'rcp_007',
    name: 'Siti Aisyah',
    bank: 'Bank Rakyat',
    currency: 'RM',
    amount: 430.0,
    status: 'completed',
    createdAt: '2026-02-07T14:20:00Z',
  },
  {
    id: '9',
    recipientId: 'rcp_008',
    name: 'Lim Wei Jie',
    bank: 'AmBank',
    currency: 'RM',
    amount: 60.0,
    status: 'completed',
    createdAt: '2026-02-07T10:45:00Z',
  },
  {
    id: '10',
    recipientId: 'rcp_002',
    name: 'Mohd Hassan',
    bank: 'CIMB',
    currency: 'RM',
    amount: 200.0,
    status: 'completed',
    createdAt: '2026-02-06T17:30:00Z',
  },
  {
    id: '11',
    recipientId: 'rcp_009',
    name: 'Priya Nair',
    bank: 'OCBC',
    currency: 'RM',
    amount: 980.0,
    status: 'completed',
    createdAt: '2026-02-06T12:00:00Z',
  },
  {
    id: '12',
    recipientId: 'rcp_006',
    name: 'Jason Wong',
    bank: 'Hong Leong',
    currency: 'RM',
    amount: 150.0,
    status: 'pending',
    createdAt: '2026-02-05T20:15:00Z',
  },
  {
    id: '13',
    recipientId: 'rcp_010',
    name: 'Ahmad Faizal',
    bank: 'Maybank',
    currency: 'RM',
    amount: 2500.0,
    status: 'completed',
    createdAt: '2026-02-05T08:30:00Z',
  },
  {
    id: '14',
    recipientId: 'rcp_005',
    name: 'Nurul Rahman',
    bank: 'Bank Islam',
    currency: 'RM',
    amount: 310.0,
    status: 'completed',
    createdAt: '2026-02-04T15:45:00Z',
  },
  {
    id: '15',
    recipientId: 'rcp_011',
    name: 'Tan Chee Keong',
    bank: 'Public Bank',
    currency: 'RM',
    amount: 45.0,
    status: 'completed',
    createdAt: '2026-02-04T09:10:00Z',
  },
  {
    id: '16',
    recipientId: 'rcp_003',
    name: 'Raj Kumar',
    bank: 'Public Bank',
    currency: 'RM',
    amount: 800.0,
    status: 'completed',
    createdAt: '2026-02-03T19:00:00Z',
  },
  {
    id: '17',
    recipientId: 'rcp_001',
    name: 'Sarah Lim',
    bank: 'Maybank',
    currency: 'RM',
    amount: 1500.0,
    status: 'completed',
    createdAt: '2026-02-03T11:20:00Z',
  },
  {
    id: '18',
    recipientId: 'rcp_012',
    name: 'Chen Mei Ling',
    bank: 'UOB',
    currency: 'RM',
    amount: 225.0,
    status: 'completed',
    createdAt: '2026-02-02T16:40:00Z',
  },
  {
    id: '19',
    recipientId: 'rcp_004',
    name: 'Mei Yin Tan',
    bank: 'RHB',
    currency: 'RM',
    amount: 670.0,
    status: 'completed',
    createdAt: '2026-02-02T10:05:00Z',
  },
  {
    id: '20',
    recipientId: 'rcp_008',
    name: 'Lim Wei Jie',
    bank: 'AmBank',
    currency: 'RM',
    amount: 90.0,
    status: 'completed',
    createdAt: '2026-02-01T14:30:00Z',
  },
];

globalThis.__transactions ??= seedTransactions;

export const getTransactions = () => globalThis.__transactions!;
export const addTransaction = (transaction: Transaction) => {
  globalThis.__transactions!.unshift(transaction);
};
