export const buttonVariants = {
  primary: `
    bg-slate-900
    text-white
    hover:bg-slate-800
  `,
  secondary: `
    border
    border-slate-200
    bg-white
    text-slate-700
    hover:bg-slate-100
  `,
  ghost: `
    text-slate-600
    hover:bg-slate-100
  `,
} as const;

export type ButtonVariant = keyof typeof buttonVariants;
