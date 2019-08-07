import React from 'react';
import { Panel, View, PanelHeader, Epic, Tabbar, TabbarItem} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import connect from '@vkontakte/vkui-connect-promise';

import Home from './panels/Home';
import Info from './panels/Info';

import Icon28User from '@vkontakte/icons/dist/28/user';
import Icon28Market from '@vkontakte/icons/dist/24/market';
import Icon28Messages from '@vkontakte/icons/dist/28/messages';
import Icon28Favorite from '@vkontakte/icons/dist/28/favorite';
import Icon28More from '@vkontakte/icons/dist/28/more';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            money: [],
            items: [],
            achievements: [],
        	activePanel: 'home',
            fetchedUser: null,
            popout: null,
            activeStory: 'user'
        }

        this.onStoryChange = this.onStoryChange.bind(this);
    }



    onStoryChange (e) {
        this.setState({ activeStory: e.currentTarget.dataset.story })
    }

    loadData(type) {
        const requestAddress = 'http://activeusers.ru/app_api.php';
        fetch(requestAddress).then(results => { return results.json() }).then(data => {
            let newState = {};
            newState[type] = data;
            this.setState(newState);
        }).catch(() => {
            alert('Ошибка!');
        });
    }

    componentDidMount () {
        connect.send("VKWebAppGetUserInfo", {}).then(e => this.setState({fetchedUser: e.data}))
    }

    go = e => {
    	this.setState({activePanel: e.currentTarget.dataset.to})
    }

    /*
    render() {
        return (
            <View popout={this.state.popout} activePanel={this.state.activePanel}>
    			<Home id="home" go={this.go} appState={this.state} fetchedUser={this.state.fetchedUser}/>
    			<Info id="info" go={this.go}/>
			</View>
        )
    }
    */

    render () {
        return (
            <Epic activeStory={this.state.activeStory} tabbar={
                <Tabbar>
                  <TabbarItem
                    onClick={this.onStoryChange}
                    selected={this.state.activeStory === 'user'}
                    data-story="user"
                    text="Профиль"
                  ><Icon28User /></TabbarItem>
                  <TabbarItem
                    onClick={this.onStoryChange}
                    selected={this.state.activeStory === 'shop'}
                    data-story="shop"
                    text="Каталог"
                  ><Icon28Market /></TabbarItem>
                  <TabbarItem
                    onClick={this.onStoryChange}
                    selected={this.state.activeStory === 'messages'}
                    data-story="messages"
                    /* label="12" */
                    text="Рассылка"
                  ><Icon28Messages /></TabbarItem>
                  <TabbarItem
                    onClick={this.onStoryChange}
                    selected={this.state.activeStory === 'rates'}
                    data-story="rates"
                    text="Рейтинги"
                  ><Icon28Favorite /></TabbarItem>
                  <TabbarItem
                    onClick={this.onStoryChange}
                    selected={this.state.activeStory === 'more'}
                    data-story="more"
                    text="Ещё"
                  ><Icon28More /></TabbarItem>
                </Tabbar>
              }>

                <View id="user" activePanel="home">
                    <Home id="home" go={this.go} appState={this.state} fetchedUser={this.state.fetchedUser}/>
                    <Info id="info" go={this.go}/>
                </View>
                <View id="discover" activePanel="discover">
                    <Panel id="discover">
                        <PanelHeader>Discover</PanelHeader>
                    </Panel>
                </View>
                <View id="messages" activePanel="messages">
                    <Panel id="messages">
                        <PanelHeader>Messages</PanelHeader>
                    </Panel>
                </View>
                <View id="notifications" activePanel="notifications">
                    <Panel id="notifications">
                        <PanelHeader>Notifications</PanelHeader>
                    </Panel>
                </View>
                <View id="more" activePanel="more">
                    <Panel id="more">
                        <PanelHeader>More</PanelHeader>
                    </Panel>
                </View>
            </Epic>
        )
    }
}

export default App;