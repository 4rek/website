'use client';
import ghIconDark from '@/public/github-dark.svg';
import ghIconLight from '@/public/github-light.svg';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

const GithubLink = () => {
  const { theme } = useTheme();
  const ghIcon = theme === 'dark' ? ghIconLight : ghIconDark;

  return (
    <Link href='https://github.com/4rek' passHref target='_blank'>
      <Image src={ghIcon} alt='Github' width={24} height={24} />
    </Link>
  );
};

export default GithubLink;
