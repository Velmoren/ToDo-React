import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Header } from './components'
import { ToDoPage, TableToDoPage } from './pages'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter basename={'ToDo-React'}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Helmet>
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
                            rel="stylesheet" />
                        <title>ToDo</title>
                    </Helmet>
                    <GlobalStyle />
                    <Header />
                    <Routes>
                        <Route path="/" element={<ToDoPage />} />
                        <Route path="/table" element={<TableToDoPage />} />
                    </Routes>
                </HelmetProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
