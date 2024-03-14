'use client';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import GithubLink from '@/components/GithubLink';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { useEffect, useState } from 'react';

import homeIconDark from '@/public/home-dark.svg';
import homeIconLight from '@/public/home-light.svg';
import Image from 'next/image';

export default function Header({ language }: { language: string }) {
  const { theme, systemTheme } = useTheme();
  const [bgColor, setBgColor] = useState('');
  const [homeIcon, setHomeIcon] = useState('');

  useEffect(() => {
    const currentTheme = theme === 'system' ? systemTheme : theme;
    setBgColor(currentTheme === 'dark' ? 'bg-gray-800' : 'bg-white');
    setHomeIcon(currentTheme === 'dark' ? homeIconLight : homeIconDark);
  }, [theme, systemTheme]);

  return (
    <header
      className={`flex border-2 items-center align-center justify-between my-8 rounded-3xl p-4 sticky top-5 shadow-2xl ${bgColor}`}
    >
      <nav>
        <ul className='ml-auto flex items-center'>
          <li className='mr-3'>
            <Link href='/'>
              <Image src={homeIcon} alt='logo' width={24} height={24} />
            </Link>
          </li>
        </ul>
      </nav>
      <div className='flex align-center'>
        <LanguageSwitcher language={language} />
        <ThemeSwitcher />
        <GithubLink />
      </div>
    </header>
  );
}
