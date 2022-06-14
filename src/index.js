import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";

import Layout from "./components/layout/Layout";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Layout>
            <App />
        </Layout>
    </BrowserRouter>
);
