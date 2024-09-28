interface SelectInputProps {
  label: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}

export default function SelectInput({ label, options, value, onChange }: SelectInputProps) {
  return (
    <label className="flex flex-col">
      <span className="font-semibold">{label}</span>
      <select
        className="select select-bordered mt-1 p-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">-</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}