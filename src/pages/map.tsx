import React from 'react';
import Home from '../components/Home';
import Layout from '../components/Layout';
import { YMaps, Map } from 'react-yandex-maps';

export default function MapPage(): JSX.Element {
    return (
        <Layout>
            <div style={{ margin: 'auto', width: 'fit-content' }}>
                <YMaps height={2333}>
                    <div>
                        <Map width={900} height={600} defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
                    </div>
                </YMaps>
            </div>
        </Layout>
    );
}
