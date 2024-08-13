import {
  Animated,
  TextProps,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  NavigationState,
  SceneMap,
  SceneRendererProps,
  TabView,
} from 'react-native-tab-view';
import {useState} from 'react';
import {Raleway} from '../../core/font/font';
import {theme} from '../../core/theme/theme';

interface InterfaceDTabBar {
  screen: any;
  route: any[];
  tintColor?: string;
  backgroundColor?: string;
  style?: {
    position?: 'top' | 'bottom' | 'left' | 'right';
    text?: TextProps['style'];
  };
  paddingHorizontal?: number;
}

export const DTabBar = (props: InterfaceDTabBar) => {
    const layout = useWindowDimensions();

    const renderScene = SceneMap(props.screen);

    const [state, setState] = useState({
        index: 0,
        routes: props.route,
    });

    const handleIndexChange = (index: number) => {
        setState({ index: index, routes: state.routes });
    };

    const renderTabBar = (
        propsTabBar: SceneRendererProps & {
            navigationState: NavigationState<{ key: string; title: string }>;
        }
    ) => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: props.paddingHorizontal ?? 0,
                }}
            >
                {propsTabBar.navigationState.routes.map((route: any, i: number) => {
                    const isActive = state.index === i;
                    return (
                        <TouchableOpacity
                            key={i}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                            }}
                            onPress={() => {
                                setState({
                                    index: i,
                                    routes: state.routes,
                                });
                            }}
                        >
                            <Animated.View
                                style={{
                                    alignItems: 'center',
                                }}
                            >
                                <Animated.Text
                                    style={[
                                        Raleway.Overline1,
                                        {
                                            color: isActive ? theme.colors.primary : '#BDBDBD',
                                        },
                                    ]}
                                >
                                    {route.title}
                                </Animated.Text>
                                {isActive && (
                                    <View
                                        style={{
                                            position: 'absolute',
                                            bottom: -10, // Position below the text
                                            width: '100%', // Adjust width as needed
                                            height: 4, // Adjust height as needed
                                            borderRadius: 2,
                                            backgroundColor: theme.colors.primary,
                                        }}
                                    />
                                )}
                            </Animated.View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    return (
        <TabView
            swipeEnabled={true}
            renderTabBar={renderTabBar}
            navigationState={state}
            renderScene={renderScene}
            onIndexChange={handleIndexChange}
            initialLayout={{ width: layout.width }}
        />
    );
};
