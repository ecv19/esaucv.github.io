const pallete = {
  background: 'var(--background)',
  'background-dark': 'var(--background-dark)',
  foreground: 'var(--foreground)',
  meta: 'var(--meta)',
  primary: 'var(--primary)',
  selection: 'var(--selection)',
  clear: 'var(--clear)',
};

module.exports = {
  content: ['./layouts/**/*.html'],
  theme: {
    extend: {
      borderColor: pallete,
      colors: pallete,
      fill: pallete,
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
      maxWidth: {
        xxs: '18rem',
        xxxs: '14rem',
        xxxxs: '10rem',
      },
      screens: {
        xxxs: '320px',
        xxs: '375px',
        xs: '420px',
        msm: { max: '639px' },
      },
      stroke: pallete,
      translate: {
        unset: 'unset',
        vh: '100vh',
        vw: '100vw',
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    zIndex: {
      hidden: -1,
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      20: 20,
      25: 25,
      30: 30,
      40: 40,
      50: 50,
      75: 75,
      100: 100,
      auto: 'auto',
    },
  },
};
