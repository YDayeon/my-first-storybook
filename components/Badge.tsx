type Props = {
  label: string;
  bgColor?: 'primary' | 'notice' | 'inactive' | 'danger' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  boxShadow?: boolean;
};

const COLOR = {
  primary: 'bg-indigo-600',
  notice: 'bg-orange-500',
  inactive: 'bg-neutral-400',
  danger: 'bg-red-600',
  warning: 'bg-amber-400',
};
const SIZE = {
  sm: 'w-16',
  md: 'w-20',
  lg: 'w-40',
};

export const Badge = ({
  label,
  bgColor = 'primary',
  size = 'md',
  boxShadow = false,
}: Props) => {
  return (
    <button
      className={`pt-1 pb-0.5 text-center items-start text-white rounded-full ${
        COLOR[bgColor]
      } ${SIZE[size]} text-sm ${boxShadow && 'shadow-md'} shadow-zinc-400`}
    >
      {label}
    </button>
  );
};
