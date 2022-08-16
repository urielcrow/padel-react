import { Suspense, lazy } from 'react';
import { Load } from '../../componets';
import {TournamentsProvider} from '../../context/ContextTournaments';
const HomeScreen = lazy(() => import('../../componets/home/HomeScreen'));
const UsuariosScreen = lazy(() => import('../../componets/usuarios/UsuariosScreen'));
const PerfilScreen = lazy(() => import('../../componets/perfil/PerfilScreen'));
const TimeScreen = lazy(() => import('../../componets/time/TimeScreen'));
const GeneralTableScreen = lazy(() => import('../../componets/generalTable/GeneralTableScreen'));
const Tournaments = lazy(() => import('../../componets/tournaments/Tournaments'));


export const rutasAdministrador = [
    {
        path: '/cuenta',
        element: (<Suspense fallback={<Load/>}> <PerfilScreen /> </Suspense>)
    },
    {
        path: '/inicio',
        element: (<Suspense fallback={<Load/>}> <HomeScreen /> </Suspense>)
    },
    {
        path: '/horarios',
        element: (<Suspense fallback={<Load/>}> <TimeScreen /> </Suspense>)
    },
    {
        path: '/usuarios',
        element: (<Suspense fallback={<Load/>}> <UsuariosScreen /> </Suspense>)
    },
    {
        path: '/tabla-general',
        element: (<Suspense fallback={<Load/>}> <GeneralTableScreen /> </Suspense>)
    },
    {
        path: '/torneos',
        element: (  <Suspense fallback={<Load/>}>
                        <TournamentsProvider>
                            <Tournaments /> 
                        </TournamentsProvider>
                    </Suspense>)
    }
];

