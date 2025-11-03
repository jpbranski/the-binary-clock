'use client';

interface TimezoneOption {
  offset: number;
  label: string;
  binaryLabel: string;
}

interface TimezoneListProps {
  selectedTimezone: number;
  onSelectTimezone: (offset: number) => void;
}

const timezones: TimezoneOption[] = [
  { offset: -12, label: 'UTC-12', binaryLabel: '1111 0100' },
  { offset: -11, label: 'UTC-11', binaryLabel: '1111 0101' },
  { offset: -10, label: 'UTC-10', binaryLabel: '1111 0110' },
  { offset: -9, label: 'UTC-9', binaryLabel: '1111 0111' },
  { offset: -8, label: 'UTC-8', binaryLabel: '1111 1000' },
  { offset: -7, label: 'UTC-7', binaryLabel: '1111 1001' },
  { offset: -6, label: 'UTC-6', binaryLabel: '1111 1010' },
  { offset: -5, label: 'UTC-5', binaryLabel: '1111 1011' },
  { offset: -4, label: 'UTC-4', binaryLabel: '1111 1100' },
  { offset: -3, label: 'UTC-3', binaryLabel: '1111 1101' },
  { offset: -2, label: 'UTC-2', binaryLabel: '1111 1110' },
  { offset: -1, label: 'UTC-1', binaryLabel: '1111 1111' },
  { offset: 0, label: 'UTC+0 (Zulu)', binaryLabel: '0000 0000' },
  { offset: 1, label: 'UTC+1', binaryLabel: '0000 0001' },
  { offset: 2, label: 'UTC+2', binaryLabel: '0000 0010' },
  { offset: 3, label: 'UTC+3', binaryLabel: '0000 0011' },
  { offset: 4, label: 'UTC+4', binaryLabel: '0000 0100' },
  { offset: 5, label: 'UTC+5', binaryLabel: '0000 0101' },
  { offset: 6, label: 'UTC+6', binaryLabel: '0000 0110' },
  { offset: 7, label: 'UTC+7', binaryLabel: '0000 0111' },
  { offset: 8, label: 'UTC+8', binaryLabel: '0000 1000' },
  { offset: 9, label: 'UTC+9', binaryLabel: '0000 1001' },
  { offset: 10, label: 'UTC+10', binaryLabel: '0000 1010' },
  { offset: 11, label: 'UTC+11', binaryLabel: '0000 1011' },
  { offset: 12, label: 'UTC+12', binaryLabel: '0000 1100' },
  { offset: 13, label: 'UTC+13', binaryLabel: '0000 1101' },
  { offset: 14, label: 'UTC+14', binaryLabel: '0000 1110' },
  { offset: -11, label: 'AoE (UTC-12)', binaryLabel: '1111 0100' },
];

export default function TimezoneList({ selectedTimezone, onSelectTimezone }: TimezoneListProps) {
  return (
    <div className="space-y-1 overflow-y-auto max-h-[60vh] pr-2">
      {timezones.map((tz) => (
        <button
          key={`${tz.offset}-${tz.label}`}
          onClick={() => onSelectTimezone(tz.offset)}
          className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
            selectedTimezone === tz.offset
              ? 'bg-[#c6a44c] bg-opacity-20 text-[#c6a44c] border border-[#c6a44c]'
              : 'hover:bg-[#c6a44c] hover:bg-opacity-10 border border-transparent'
          }`}
        >
          <div className="flex flex-col">
            <span className="text-sm font-medium">{tz.label}</span>
            <span className="text-xs font-mono opacity-70">{tz.binaryLabel}</span>
          </div>
        </button>
      ))}
    </div>
  );
}
