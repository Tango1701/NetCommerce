import * as React from 'react';
import { BottomNavigation} from 'react-native-paper';

import Home from './HomeScreen';
import Venda from './Venda';
import Perfil from './Perfil';
import Pagar from './Pagar'





const HomeRoute = () => <Home/>

const VenderRoute = () => <Venda/>

const PagarRoute = () => <Pagar/>

const PerfilRoute = () => <Perfil/>

const Menu = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'home', icon: 'home' },
    { key: 'vender', title: 'vender', icon: 'cash-multiple' },
    { key: 'pagar', title: 'pagar', icon: 'cart' },
    { key: 'perfil', title: 'perfil', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    vender: VenderRoute,
    pagar: PagarRoute,
    perfil: PerfilRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Menu;