import { appInfo } from '../constants/appInfo';

export default function Home() {
  return (
    <main className='bg-slate-200 min-h-screen px-4 py-3'>
      <h1 className='text-3xl font-bold'>{appInfo.name}</h1>
      <span className='text-sm font-medium'>{appInfo.desc}</span>
      <section className='p-2 w-full'>
        <div className='relative'>
          <label htmlFor='code' className='leading-7 text-sm text-gray-600'>
            Code:
          </label>
          <textarea
            id='code'
            name='code'
            className='w-full bg-gray-100 bg-opacity-50 rounded-sm shadow-md border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
          ></textarea>
        </div>
      </section>
    </main>
  );
}
