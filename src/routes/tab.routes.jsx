import Home from "../screens/Home";
import Category from "../screens/Category";
import Profile from "../screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
return (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Category" component={Category} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);
};
export default TabRoutes;