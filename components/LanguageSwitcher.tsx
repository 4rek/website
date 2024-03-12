import en from '@/public/flag-en.svg';
import pl from '@/public/flag-pl.svg';
import Image from 'next/image';
import Link from 'next/link';

const LanguageSwitcher = ({ language }: { language: string }) => {
  const newLanguage = language === 'en' ? 'pl' : 'en';
  const flag = language === 'en' ? pl : en;

  return (
    <Link href={`/${newLanguage}`}>
      <Image
        src={flag}
        alt='flag'
        width={24}
        height={24}
        className='cursor-pointer mr-5'
      />
      {/* <span className='mr-3 cursor-pointer'>{newLanguage.toUpperCase()}</span> */}
    </Link>
  );
};

export default LanguageSwitcher;
