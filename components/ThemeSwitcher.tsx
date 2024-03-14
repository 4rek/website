'use client';
import lightModeIcon from '@/public/theme-light.svg';
import darkModeIcon from '@/public/theme.svg';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const currentIcon = currentTheme === 'dark' ? lightModeIcon : darkModeIcon;
    setIcon(currentIcon);
  }, [theme, systemTheme]);

  return (
    <Image
      src={icon}
      alt='flag'
      width={24}
      height={24}
      className='cursor-pointer mr-5'
      onClick={() =>
        currentTheme == 'dark' ? setTheme('light') : setTheme('dark')
      }
    />
  );
};

export default ThemeSwitcher;
