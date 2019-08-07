import React from 'react';
import { Panel, PanelHeader, HeaderButton, platform, IOS, Div } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

const Info = props => (
    <Panel id={props.id}>
        <PanelHeader left={<HeaderButton onClick={props.go} data-to="home">
    			{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
				</HeaderButton>}
			>
			Тут заголовок 2
		</PanelHeader>
        <Div>Тут тело 2</Div>
    </Panel>
);

export default Info;