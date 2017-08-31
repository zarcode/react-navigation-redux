import { TabNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import ForumsScreen from "./ForumsScreen";

export const MainScreenNavigator = TabNavigator(
    {
        HomeScreen: { screen: HomeScreen },
        ForumsScreen: { screen: ForumsScreen },
    }
);

export default MainScreenNavigator;