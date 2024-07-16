import {
  ImageSourcePropType,
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
import {s1} from '../size/DSize.tsx';

interface InterfaceDTabBar {
  screen: any;
  route: any[];
  icon: ImageSourcePropType[];
  changeTitle?: boolean | true;
  tintColor?: string;
  backgroundColor?: string;
  style?: {
    position?: 'top' | 'bottom' | 'left' | 'right';
    text?: TextProps['style'];
  };
  paddingHorizontal?: number;
}

export const DTabBar = (props : InterfaceDTabBar) => {
    const layout = useWindowDimensions();

    const renderScene = SceneMap(props.screen);

    const [state, setState] = useState({
        index: 0,
        routes: props.route,
    });

    const handleIndexChange = (index: number) => {
        setState({index: index, routes: state.routes});
    };

    const renderTabBar = (propsTabBar: SceneRendererProps & {navigationState: NavigationState<{key: string; title: string}>;})  => {
        return (
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: props.paddingHorizontal ?? 0,
            }}>
                {propsTabBar.navigationState.routes.map((route: any, i: number) => {
                    return (
                        <TouchableOpacity
                            key={i}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                backgroundColor: props.backgroundColor ?? '#EDEEF3',
                                paddingTop: s1,
                            }}
                            onPress={() => {
                                setState({
                                    index: i,
                                    routes: state.routes,
                                });
                            }}
                        >
                            {/*<Animated.View*/}
                            {/*    style={{*/}
                            {/*        alignItems: 'center',*/}
                            {/*        flexDirection:*/}
                            {/*            props.style?.position === 'top'*/}
                            {/*                ? 'column'*/}
                            {/*                : props.style?.position === 'bottom'*/}
                            {/*                    ? 'column-reverse'*/}
                            {/*                    : props.style?.position === 'left'*/}
                            {/*                        ? 'row'*/}
                            {/*                        : props.style?.position === 'right'*/}
                            {/*                            ? 'row-reverse'*/}
                            {/*                            : 'row',*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    <Animated.Text*/}
                            {/*        style={*/}
                            {/*            [*/}
                            {/*                Raleway.Overline4,*/}
                            {/*                {*/}
                            {/*                    // flex: 1,*/}
                            {/*                    paddingTop: s1,*/}
                            {/*                    color:*/}
                            {/*                        state.index === i ? theme.colors.primary : '#BDBDBD',*/}
                            {/*                },*/}
                            {/*            ]*/}
                            {/*        }>*/}
                            {/*        {route.title}*/}
                            {/*    </Animated.Text>*/}
                            {/*</Animated.View>*/}
                            {/*<Animated.View*/}
                            {/*    style={{*/}
                            {/*        width: '100%',*/}
                            {/*        marginTop: 4,*/}
                            {/*        height: 2,*/}
                            {/*        borderBottomWidth: 1,*/}
                            {/*        borderBottomColor: '#BDBDBD',*/}
                            {/*    }}*/}
                            {/*/>*/}
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    return (
        <TabView
            swipeEnabled={false}
            renderTabBar={renderTabBar}
            navigationState={state}
            renderScene={renderScene}
            onIndexChange={handleIndexChange}
            initialLayout={{width: layout.width}}
        />
    );
}