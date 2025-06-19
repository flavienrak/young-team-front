import React from 'react';
import clsx from 'clsx';

export default function TitleComponent({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  return (
    <p
      className={clsx(
        'bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent',
        className,
      )}
    >
      {value}
    </p>
  );
}
