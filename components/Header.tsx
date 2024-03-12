'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import GithubLink from './GithubLink';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

import homeIconDark from '@/public/home-dark.svg';
import homeIconLight from '@/public/home-light.svg';

export default function Header({ language }: { language: string }) {
  const { theme } = useTheme();

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const homeIcon = theme === 'dark' ? homeIconLight : homeIconDark;

  return (
    <header
      className={`flex border-2  items-center align-center justify-between my-8 rounded-3xl p-4 sticky top-5 shadow-2xl ${bgColor}`}
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
