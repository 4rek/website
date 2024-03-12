import { useTranslation } from '@/i18n';

export default async function Page({
  params: { language },
}: {
  params: { language: string };
}) {
  const { t } = await useTranslation(language);
  return (
    <h1 className='font-bold text-text-heading text-center text-4xl md:text-5xl pt-4 pb-2 overflow-hidden'>
      <span
        className='            bg-gradient-to-bl bg-no-repeat bg-bottom bg-[length:90%_40%]
            from-primary-blue to-primary-blue dark:from-primary-blue dark:to-primary-blue'
      >
        {t('hello')}
      </span>
    </h1>
  );
}
