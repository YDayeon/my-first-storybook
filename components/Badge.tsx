type Props = {
  label: string;
  bgColor?: 'primary' | 'warning' | 'inactive';
  size?: 'sm' | 'md' | 'lg';
};

const COLOR = {
  primary: 'bg-indigo-600',
  warning: 'bg-amber-300',
  inactive: 'bg-neutral-400',
};
const SIZE = {
  sm: 'w-24',
  md: 'w-32',
  lg: 'w-40',
};

export const Badge = ({ label, bgColor = 'primary', size = 'md' }: Props) => {
  return (
    <button className={`py-2 ${COLOR[bgColor]} ${SIZE[size]} h-16`}>
      {label}
    </button>
  );
};
