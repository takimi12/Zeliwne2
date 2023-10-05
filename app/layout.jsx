import Footer from './Footer/Footer';
import Header from './Header/Header';
import './styles/globals.scss'

export default function RootLayout(
    { children }
) {
    return (
        <html lang="pol">
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