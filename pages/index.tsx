export default function Main() {
    return (
      <div className="text-purple-900 px-6 lg:px-32 bg-gradient-to-b from-white to-sky-100">
        <header className='w-screen pt-6'>
          <div className='flex flex-col'>
            <h1 className='text-6xl font-bold -ml-6'>🦩</h1>
            <span className='text-gray-300'>Yeah yeah yeah</span>
          </div>
        </header>
        <div className="h-screen flex items-center">
          <section className='w-screen md:w-9/12 xl:w-8/12'>
              <span className="font-bold uppercase tracking-widest">Rapidly build modern sass</span>
                  <h1 className="text-3xl lg:text-5xl font-bold text-pink-500">
                      Big<br/>Bird Tech
                  </h1>
              <p className="font-bold mb-1">The building blocks of your next sass</p>
              <p>A utility-first services framework packed with services such as </p><code className='font-mono font-medium text-purple-500'>permission-service</code>,<code className='font-mono font-medium text-purple-500'> health-service</code> and <code className='font-mono font-medium text-purple-500'>feature-flag-service</code>
              <p>that can be composed to build modern, scalable, reliable sass businesses.</p>
              <p>All from your console.</p>
          </section>
        </div>
        <footer className='flex flex-row-reverse pb-6'>
            <div>
            <p>Yours Truely</p>
            <p className="font-bold text-pink-500">Bird Bird Tech Inc.</p>
            </div>
        </footer>
      </div>
    )
}