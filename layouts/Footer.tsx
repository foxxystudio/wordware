'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
   return (
      //  {/* Footer */}
      <footer className='fixed bottom-0 left-0 right-0 w-full bg-[#0D371F] flex flex-col justify-between gap-[0] h-[572px] md:h-[760px]'>
         <div className="footer-logo-wrapper absolute bottom-[64px] left-0 w-full flex items-center justify-center px-4 md:p-8 py-0 max-md:bottom-2">
            <Link href={'/'}>
               <svg xmlns="http://www.w3.org/2000/svg" className='w-full' width="1848" height="287" viewBox="0 0 1848 287" fill="none">
                  <path d="M0 0H37.4669L91.6636 203.873C94.0679 211.875 96.8228 222.696 100.429 236.334L103.635 224.709C105.238 220.28 107.241 213.083 109.596 203.873L164.243 0H209.674L263.47 203.873C266.676 214.694 269.431 225.514 272.236 236.737L281.002 203.873L336.451 0H371.914L296.179 280.37H251.95L196.551 70.5077L186.583 33.2659L177.016 70.5077L120.415 280.37H75.7853L0 0Z" fill="#FCFEBC" />
                  <path d="M458.566 80.9251C513.163 80.9251 553.034 123.401 553.034 183.441C553.034 243.48 513.163 286.359 458.566 286.359C403.968 286.359 364.097 244.688 364.097 183.441C364.097 122.193 403.167 80.9251 458.566 80.9251ZM458.566 108.152C423.103 108.152 399.56 138.197 399.56 183.441C399.56 228.684 422.301 259.534 458.566 259.534C494.831 259.534 517.571 229.489 517.571 183.441C517.571 137.392 494.029 108.152 458.566 108.152Z" fill="#FCFEBC" />
                  <path d="M587.797 87.3166H622.058V119.375C632.026 96.5264 653.965 80.9251 682.266 80.9251C685.872 80.9251 689.028 80.9251 691.032 81.3277V115.349C687.425 114.946 683.869 114.543 680.262 114.543C642.395 114.543 622.058 136.184 622.058 178.207V280.319H587.797V87.3166Z" fill="#FCFEBC" />
                  <path d="M793.671 80.9253C822.773 80.9253 845.513 96.124 855.481 113.386V0H889.743V280.37H855.481V253.546C844.712 272.368 820.419 286.409 792.92 286.409C742.279 286.409 704.412 248.765 704.412 183.894C704.412 125.011 739.875 80.9756 793.721 80.9756L793.671 80.9253ZM798.88 108.152C763.818 108.152 739.875 139.002 739.875 183.843C739.875 228.684 763.818 259.535 798.88 259.535C833.943 259.535 857.886 229.49 857.886 183.441C857.886 137.392 833.943 108.152 798.88 108.152Z" fill="#FCFEBC" />
                  <path d="M919.845 87.3167H956.911L998.786 230.295C1000.79 236.686 1002.39 241.115 1002.79 243.531L1007.15 230.295L1049.43 87.3167H1092.1L1136.73 230.295L1140.34 241.92L1144.35 229.49L1185.82 87.3167H1220.48L1158.67 280.37H1118.8L1074.97 134.573L1070.56 120.532L1066.16 134.573L1021.93 280.37H982.457L919.895 87.3167H919.845Z" fill="#FCFEBC" />
                  <path d="M1300.67 167.437L1341.74 161.045C1356.12 159.032 1361.28 153.446 1361.28 141.82C1361.28 120.985 1345.35 108.202 1322.61 108.202C1293.91 108.202 1278.38 123.401 1277.18 147.86H1242.92C1244.52 111.826 1272.82 80.9755 1319.85 80.9755C1366.89 80.9755 1394.79 109.007 1394.79 153.848V280.42H1362.08V254.401C1352.51 274.834 1331.37 286.459 1303.07 286.459C1284.34 286.459 1268.41 281.276 1255.64 270.455C1243.27 259.635 1236.91 245.644 1236.91 227.577C1236.91 192.751 1262.8 173.929 1300.67 167.487V167.437ZM1361.28 179.062C1359.27 182.283 1352.11 185.051 1340.14 187.467L1312.24 192.65C1285.54 197.834 1272.37 209.459 1272.37 227.476C1272.37 246.701 1287.5 259.535 1307.83 259.535C1338.54 259.535 1361.23 238.297 1361.23 207.446V179.012L1361.28 179.062Z" fill="#FCFEBC" />
                  <path d="M1441.32 87.3166H1475.58V119.375C1485.55 96.5264 1507.49 80.9251 1535.79 80.9251C1539.4 80.9251 1542.55 80.9251 1544.56 81.3277V115.349C1540.95 114.946 1537.39 114.543 1533.79 114.543C1495.92 114.543 1475.58 136.184 1475.58 178.207V280.319H1441.32V87.3166Z" fill="#FCFEBC" />
                  <path d="M1644.18 80.9251C1700.38 80.9251 1733.09 120.583 1733.09 183.441V190.235H1587.18C1587.58 233.113 1612.68 259.534 1646.59 259.534C1672.48 259.534 1692.82 248.312 1697.23 220.682H1731.09C1726.73 257.924 1697.63 286.359 1646.18 286.359C1588.38 286.359 1552.92 249.117 1552.92 183.038C1552.92 124.156 1591.59 80.9251 1644.23 80.9251H1644.18ZM1644.18 108.152C1612.68 108.152 1591.14 132.56 1588.38 165.826H1696.42C1696.42 130.598 1677.29 108.152 1644.18 108.152Z" fill="#FCFEBC" />
                  <path d="M1748.62 71.1617V26.9749H1731.14V18.671H1775.77V26.9749H1758.39V71.1617H1748.62Z" fill="#FCFEBC" />
                  <path d="M1788.14 18.6206H1803.77L1817.04 56.5669C1817.7 58.5297 1818.15 60.0898 1818.4 61.348C1818.45 60.7441 1819.05 58.429 1819.75 56.5669L1832.52 18.6206H1848V71.1114H1838.58V35.782C1838.58 32.2592 1838.68 29.7931 1838.73 28.2833L1824.41 71.1114H1812.49L1797.31 28.2833C1797.46 30.5984 1797.51 33.0644 1797.51 35.782V71.1114H1788.19V18.6206H1788.14Z" fill="#FCFEBC" />
               </svg>
            </Link>
         </div>

         <div className="content w-full flex items-start justify-between px-16 pt-16 pb-0 max-md:px-4 max-md:pt-16 max-md:pb-0 max-md:relative">
            <div className="image p-[9px] flex items-center justify-center max-md:absolute max-md:top-0 max-md:right-0 max-md:max-w-[265px] max-md:p-4">
               <Image
                  src={'/footer-img.png'}
                  width={399}
                  height={606}
                  alt='Wordware'
                  draggable={false}
                  quality={100}
                  className='max-md:w-full'
               />
            </div>

            <div className="relative z-[1] links flex items-start gap-[64px] max-md:w-full max-md:justify-between max-md:gap-5">
               <div className="links-left links-block flex flex-col pr-[72px] pb-[50px] pl-0 pt-0 max-lg:pr-[50px] max-md:p-0">
                  <Link href={'/story'}>
                     <div className="single-link">
                        <span className='text-[#BBBBB0] hover:text-[#fff] text-[14px] md:text-[18px] whitespace-nowrap not-italic font-normal leading-[300%] tracking-[0.54px] uppercase'>Story</span>
                     </div>
                  </Link>
                  <div className="single-link">
                     <span className='text-[#BBBBB0] hover:text-[#fff] text-[14px] md:text-[18px] whitespace-nowrap not-italic font-normal leading-[300%] tracking-[0.54px] uppercase'>Careers</span>
                  </div>
                  <div className="single-link">
                     <span className='text-[#BBBBB0] hover:text-[#fff] text-[14px] md:text-[18px] whitespace-nowrap not-italic font-normal leading-[300%] tracking-[0.54px] uppercase'>Wordware V1</span>
                  </div>
                  <Link href={'https://sauna.ai/'} target='_blank'>
                     <div className="single-link">
                        <span className='text-[#BBBBB0] hover:text-[#fff] text-[14px] md:text-[18px] whitespace-nowrap not-italic font-normal leading-[300%] tracking-[0.54px] uppercase'>Sauna OS</span>
                     </div>
                  </Link>
               </div>
               <div className="links-right links-block flex flex-col pr-[72px] pb-[50px] pl-0 pt-0 max-lg:pr-[50px] max-md:p-0">
                  <Link href={'https://www.linkedin.com/company/wordware/'} target='_blank'>
                     <div className="single-link">
                        <span className='text-[#BBBBB0] hover:text-[#fff] text-[14px] md:text-[18px] not-italic font-normal leading-[300%] tracking-[0.54px] uppercase'>LinkedIn</span>
                     </div>
                  </Link>
                  <Link href={'https://www.instagram.com/wordware.ai'} target='_blank'>
                     <div className="single-link">
                        <span className='text-[#BBBBB0] hover:text-[#fff] text-[14px] md:text-[18px] not-italic font-normal leading-[300%] tracking-[0.54px] uppercase'>instagram</span>
                     </div>
                  </Link>
                  <div className="single-link">
                     <span className='text-[#BBBBB0] hover:text-[#fff] text-[14px] md:text-[18px] not-italic font-normal leading-[300%] tracking-[0.54px] uppercase'>Youtube</span>
                  </div>
                  <Link href={'https://x.com/wordware'} target='_blank'>
                     <div className="single-link">
                        <span className='text-[#BBBBB0] hover:text-[#fff] text-[14px] md:text-[18px] not-italic font-normal leading-[300%] tracking-[0.54px] uppercase'>X</span>
                     </div>
                  </Link>
               </div>
            </div>
         </div>

         <div className="footer-bottom relative z-[1] w-full px-16 py-6 flex items-center justify-between max-md:px-4 max-md:py-6 max-md:flex-col-reverse max-md:gap-4">
            <span className='text-[#588D6C] text-[14px] md:text-[16px] not-italic font-medium leading-[100%]'>© 2025 Wordware. All rights reserved.</span>

            <div className="terms max-md:w-full flex items-center max-md:justify-between gap-[45px]">
               <Link href={'/terms'}>
                  <div className="single-term">
                     <span className='text-[#588D6C] text-[14px] md:text-[16px] not-italic font-medium leading-[100%] hover:text-[#fff] hover:underline'>Terms & Conditions</span>
                  </div>
               </Link>

               <Link href={'/privacy'}>
                  <div className="single-term">
                     <span className='text-[#588D6C] text-[14px] md:text-[16px] not-italic font-medium leading-[100%] hover:text-[#fff] hover:underline'>Privacy Policy</span>
                  </div>
               </Link>
            </div>
         </div>
      </footer>
   )
}
