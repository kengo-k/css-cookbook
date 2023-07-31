import { andada_pro } from '@/utils/fonts'

export const Section: React.FC<{ title: string; description: string; children?: React.ReactNode }> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      <h3 className={`text-2xl mt-16 mb-4 ${andada_pro.className}`}>{title}</h3>
      <p>{description}</p>
      <section>{children}</section>
    </>
  )
}
