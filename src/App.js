import GlobalStyle from './styles/GlobalStyle';
import { MainPage } from './pages'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const App = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
                    rel="stylesheet" />
                <title>ToDo</title>
            </Helmet>
            <GlobalStyle />
            <MainPage />
        </HelmetProvider>
    );
}

export default App;
