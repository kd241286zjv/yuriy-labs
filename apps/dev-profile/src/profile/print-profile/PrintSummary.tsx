interface PrintSummaryProps {
  summary: string;
}

export function PrintSummary({ summary }: PrintSummaryProps) {
  return (
    <p className="max-w-[145mm] text-base leading-relaxed text-slate-800 whitespace-pre-line">
      {summary}
    </p>
  );
}
