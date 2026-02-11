export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const paginate = <T>(data: T[], page: number, pageSize: number) => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const nextPage = end < data.length ? page + 1 : null;
  return {
    data: data.slice(start, end),
    nextPage,
  };
};
