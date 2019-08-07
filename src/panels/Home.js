import React from 'react';
import { Panel, PanelHeader, Group, Div, Button, Avatar, ListItem, Tabs, TabsItem, FixedLayout, HorizontalScroll } from '@vkontakte/vkui';
const Home = props => (
    <Panel id={props.id}>
        <PanelHeader>ActiveUsers</PanelHeader>
        <FixedLayout vertical="top" >
            <HorizontalScroll>
                <Tabs theme="header" type="buttons">
                    <TabsItem data-to="home"
                        onClick={props.go}
                        selected={props.appState.activePanel === 'home'}
                        >
                        Профиль
                    </TabsItem>
                    <TabsItem data-to="info"
                        onClick={props.go}
                        selected={props.appState.activePanel === 'info'}
                        >
                        Инфо
                    </TabsItem>
                </Tabs>
            </HorizontalScroll>
        </FixedLayout>

        <Div>Тут тело</Div>
        {props.fetchedUser &&
        <Group title="">
            <ListItem
                before={props.fetchedUser.photo_200 ? <Avatar src={props.fetchedUser.photo_200}/> : null}
                description={props.fetchedUser.city && props.fetchedUser.city.title ? props.fetchedUser.city.title : ''}
                >
                {`${props.fetchedUser.first_name} ${props.fetchedUser.last_name}`}
            </ListItem>
        </Group>}

        <Group title="Меню">
        	<Div>
        		<Button level="secondary" onClick={props.go} data-to="info">
        			Информация
        		</Button>
        	</Div>
        </Group>
    </Panel>
);
export default Home;