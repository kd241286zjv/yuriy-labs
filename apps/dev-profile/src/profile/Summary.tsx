interface SummaryProps {
  summary: string;
}

export function Summary({ summary }: SummaryProps) {
  return <p className="whitespace-pre-line">{summary}</p>;
}
