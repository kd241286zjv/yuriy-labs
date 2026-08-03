interface SummaryProps {
  summary: string;
}

export function Summary({ summary }: SummaryProps) {
  return <p>{summary}</p>;
}
