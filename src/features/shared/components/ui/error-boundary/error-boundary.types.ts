export type ErrorBoundaryProps = {
  error: Error;
  retry: () => void;
};
