type Props = {
  label: string;
  bgColor: 'primary' | 'white';
  size: 'full' | 'sm';
};

export const Button = ({
  label,
  bgColor = 'primary',
  size = 'full',
}: Props) => {
  return (
    <button
      className={`py-2.5 ${
        bgColor === 'white' ? 'border border-gray-500' : 'text-white'
      } ${
        size === 'full' ? 'w-96 max-sm:w-full' : 'w-32 max-sm:w-32'
      } rounded-2xl bg-${bgColor} text-lg`}
    >
      {label}
    </button>
  );
};
