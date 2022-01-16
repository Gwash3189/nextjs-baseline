import Head from 'next/head'
import useSWR from 'swr'
const fetcher = (url: string, opts = {}) => fetch(url, opts).then((res) => res.ok ? res.json() : Promise.reject(res))

export default function Home() {
  const { data, error } = useSWR('/api/health', fetcher)
  
  const successTextColor = data?.health ? 'text-green-600' : null
  const errorTextColor = error ? 'text-red-600' : null

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Fullstack NextJS with nextjs-backend-helpers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Fullstack NextJS with nextjs-backend-helpers
        </h1>

        <p className="mt-3 text-2xl">
          Database Check
        </p>
        <p className="mt-3 text-2xl">
          <code className={"p-3 font-mono text-lg bg-gray-100 rounded-md " + (successTextColor || errorTextColor)}>
            Am I Healthy? { data?.health?.toggle ? 'Yes I am.' : 'No I am Not.'}
          </code>
        </p>
      </main>
    </div>
  )
}
