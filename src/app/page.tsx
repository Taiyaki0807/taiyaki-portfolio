import { MainLayout } from "../layouts/main/main-layout";

export default function Home() {
  return (
    <main>
      <MainLayout>
        <section className='mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-20'>
          <p className='mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-500'>
            Portfolio
          </p>
          <h1 className='max-w-3xl text-4xl font-bold leading-tight sm:text-6xl'>
            Hi, I&apos;m Riki Maeda.
            <br />
            Webを学びながら、使いやすいものを作っています。
          </h1>
          <p className='mt-6 max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-300'>
            デザインとコードの両方を少しずつ磨きながら、見る人に伝わるポートフォリオを育てています。
            ここでは制作物、学んだこと、これから挑戦したいことをまとめていきます。
          </p>
          <div className='mt-10 flex flex-wrap gap-3'>
            <a
              href='/project'
              className='rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-80'
            >
              View Projects
            </a>
            <a
              href='/about'
              className='rounded-full border border-foreground/20 px-5 py-3 text-sm font-semibold transition hover:bg-foreground/10'
            >
              About Me
            </a>
          </div>
        </section>
      </MainLayout>
    </main>
  );
}
