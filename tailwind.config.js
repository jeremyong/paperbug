module.exports = {
  content: [
    'index.html',
    './dist/*.txt',
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    options: {
      safelist: ['bg-red-400', 'bg-violet-400', 'bg-slate-400', 'bg-rose-400', 'bg-zinc-400', 'bg-yellow-400', 'bg-neutral-400', 'bg-amber-400', 'bg-fuchsia-400', 'bg-stone-400', 'bg-orange-400', 'bg-teal-400', 'bg-blue-400', 'bg-lime-400', 'bg-gray-400', 'bg-green-400', 'bg-cyan-400', 'bg-sky-400', 'bg-indigo-400', 'bg-purple-400', 'bg-pink-400', 'text-red-100', 'text-violet-100', 'text-slate-100', 'text-rose-100', 'text-zinc-100', 'text-yellow-100', 'text-neutral-100', 'text-amber-100', 'text-fuchsia-100', 'text-stone-100', 'text-orange-100', 'text-teal-100', 'text-blue-100', 'text-lime-100', 'text-gray-100', 'text-green-100', 'text-cyan-100', 'text-sky-100', 'text-indigo-100', 'text-purple-100', 'text-pink-100']
    }
  }
}

/**
 * I ran into this issue:
 * https://stackoverflow.com/questions/67289894/jit-tailwindcss-using-variable-in-bg-not-rendering-color
 * that is why I add safelist.
 */