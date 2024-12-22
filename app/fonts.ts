import localFont from 'next/font/local'

export const ohnoSoftie = localFont({
  src: [
    {
      path: '../assets/OhnoSoftie-Regular-DirsSIr-.woff2',
      weight: '400',
      style: 'Regular',
    },
    {
      path: '../assets/OhnoSoftie-Medium-Ilzr640o.woff2',
      weight: '500',
      style: 'Medium',
    },
    {
      path: '../assets/OhnoSoftie-Bold-CYW-NGOb.woff2',
      weight: '700',
      style: 'Bold',
    }
  ],
  variable: '--font-ohno-softie'
}) 