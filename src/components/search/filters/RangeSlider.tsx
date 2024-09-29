"use client";

interface RangeSliderProps {
  value: number[];
  min?: number;
  max?: number;
  step?: number;
  title?: string;
  onChange: (value: number[]) => void;
}

export default function RangeSlider({
                                      value,
                                      min = 0,
                                      max = 1000,
                                      step = 10,
                                      title = "",
                                      onChange,
                                    }: RangeSliderProps) {
  // Типизация event как ChangeEvent для input элементов
  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinValue = Math.min(Number(event.target.value), value[1] - step);
    onChange([newMinValue, value[1]]);
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = Math.max(Number(event.target.value), value[0] + step);
    onChange([value[0], newMaxValue]);
  };

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="min" className="block">
        <div className="flex justify-between font-semibold">
          <div>From</div>
          <div>
            {value[0]} {title}
          </div>
        </div>
        <input
          type="range"
          value={value[0]}
          onChange={handleMinChange}
          className="range range-primary"
          min={min}
          max={max}
          step={step}
        />
      </label>
      <label htmlFor="max" className="block">
        <div className="flex justify-between font-semibold">
          <div>To</div>
          <div>
            {value[1]} {title}
          </div>
        </div>
        <input
          type="range"
          value={value[1]}
          onChange={handleMaxChange}
          className="range range-primary"
          min={min}
          max={max}
          step={step}
        />
      </label>
    </div>
  );
}
