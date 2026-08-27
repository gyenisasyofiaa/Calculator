import type { NextPage } from 'next';
import Head from 'next/head';
import Calculator from '../components/Calculator';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kalkulator Pro - Next.js UI</title>
      </Head>

      <main className="min-h-screen bg-gray-300 flex items-center justify-center p-4">
        {/* Kontainer utama dengan padding abu-abu, meniru area di luar kalkulator di gambar */}
        <div className="w-full max-w-sm sm:max-w-md bg-black rounded-3xl p-6 shadow-2xl border-4 border-gray-200">
          <Calculator />
        </div>
      </main>
    </>
  );
};

export default Home;