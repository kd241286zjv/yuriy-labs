export function classesProcessor(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
