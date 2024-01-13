import Footer from './Footer/Footer';
import Header from './Header/Header';
import './styles/globals.scss'
import { Plus_Jakarta_Sans } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const PlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  weights: [100,200,300,400, 500, 600, 700, 800,900],
})
 
export const metadata = {
    title: {
        default: 'Żeliwne',
        template: '%s | Żeliwne'
    },
    description: "Najlepszy wybór grzejników żeliwnych",
    keywords: "Grzejniki, żeliwne, żeliwne grzejniki, ",
};






export default function RootLayout(
    { children }
) {
    return (
        <html lang="pol" className={PlusJakartaSans.className}>
            <body>
                <Header />
                <main>
                    {children}
                </main>
            <Footer />
                </body>
        </html>
    );
}