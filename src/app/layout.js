import '@fontsource/rubik/latin.css'
import '@fontsource/raleway/latin.css'
import "@/assets/vendors/tolak-icons/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "tiny-slider/dist/tiny-slider.css";

import '@/assets/css/tolak-color-1.css'
import '@/assets/css/tolak-color-2.css'
import '@/assets/css/tolak-color-3.css'
// import '@/assets/css/tolak-custom-rtl.css'
// import '@/assets/css/tolak-landing.css'
// import '@/assets/css/tolak-rtl.css'
import '@/assets/css/tolak.css'
// import '@/assets/css/tolak-dark.css'

import '@/assets/vendors/animate/animate.min.css'
import "@/assets/vendors/fontawesome/css/all.min.css"
import "@/assets/vendors/icofont/icofont.min.css"
import ThemeProvider from '@/Provider/ThemeProvider';









export const metadata = {
  title: "Home One || Tolak || HTML Template For It Solution & Business",
  description: "Tolak is a modern HTML Template for Business, It Solution, Corporate, Agency, Portfolio shops. The template perfectly fits Beauty Spa, Salon, and Wellness Treatments websites and businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='custom-cursor'><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  );
}
