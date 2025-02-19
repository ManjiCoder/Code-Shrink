import { useState } from 'react';
import { appInfo } from '../constants/appInfo';

export default function Home() {
  const [code, setCode] = useState('');
  return (
    <main className='bg-slate-200 min-h-screen px-4 py-3'>
      <h1 className='text-3xl font-bold'>{appInfo.name}</h1>
      <span className='text-sm font-medium'>{appInfo.desc}</span>
      <section className='p-2 w-full py-4 grid grid-cols-2 gap-5'>
        <div className='relative col-span-2'>
          <label htmlFor='code' className='leading-7 text-xl font-medium'>
            Code:
          </label>
          <textarea
            id='code'
            name='code'
            spellCheck={false}
            className='w-full bg-gray-100 bg-opacity-50 rounded-sm shadow-md border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
            placeholder='Paste the come here'
            onChange={(e) => setCode(e.target.value)}
            value={code}
          ></textarea>
        </div>
        <div className='relative'>
          <label htmlFor='code' className='leading-7 text-xl font-medium'>
            Before:
          </label>
          <pre className='mt-3 shadow-md rounded-md p-3 bg-slate-50'>
            {code}
          </pre>
        </div>
        <div className='relative'>
          <label htmlFor='code' className='leading-7 text-xl font-medium'>
            After:
          </label>
          <pre className='mt-3 shadow-md rounded-md p-3 bg-slate-50'>
            {code}
          </pre>
        </div>
      </section>
    </main>
  );
}
