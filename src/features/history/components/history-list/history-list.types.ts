// history-list.types.ts

export type HistoryListProps = {
  history: {
    id: string;
    amount: number;
    description: string;
    date: string;
    recipientId: string;
  }[];
};
