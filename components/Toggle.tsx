'use client';

interface ToggleProps {
  label1: string;
  label2: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export default function Toggle({ label1, label2, value, onChange }: ToggleProps) {
  return (
    <button
      onClick={() => onChange(!value)}
      className="flex items-center gap-3 px-4 py-2 rounded-full border border-[#c6a44c] bg-transparent hover:bg-[#c6a44c] hover:bg-opacity-10 transition-all duration-300"
      aria-label={`Toggle between ${label1} and ${label2}`}
    >
      <span className={`text-sm font-medium transition-opacity duration-300 ${!value ? 'text-[#c6a44c] opacity-100' : 'opacity-40'}`}>
        {label1}
      </span>
      <div className="relative w-10 h-5 bg-gray-200 dark:bg-gray-700 rounded-full">
        <div
          className={`absolute top-0.5 left-0.5 w-4 h-4 bg-[#c6a44c] rounded-full transition-transform duration-300 ${
            value ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </div>
      <span className={`text-sm font-medium transition-opacity duration-300 ${value ? 'text-[#c6a44c] opacity-100' : 'opacity-40'}`}>
        {label2}
      </span>
    </button>
  );
}
