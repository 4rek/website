'use client';
import lightModeIcon from '@/public/theme-light.svg';
import darkModeIcon from '@/public/theme.svg';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const icon = currentTheme === 'dark' ? lightModeIcon : darkModeIcon;
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
