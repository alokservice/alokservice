export interface Statistic {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

export const statistics: Statistic[] = [
  { value: 300, suffix: "+", label: "Client Served" },
  { value: 70, suffix: "+", label: "Expert Professionals" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 5, suffix: "+", label: "Years Experience" },
];
