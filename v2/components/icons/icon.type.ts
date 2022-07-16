interface Icon<T> {
  color?: string;
  strokeWidth?: number;
  size?: T;
}

export type EqualSizeIcon = Icon<number>;
export type UnequalSizeIcon = Icon<{ height?: number; width?: number }>;
