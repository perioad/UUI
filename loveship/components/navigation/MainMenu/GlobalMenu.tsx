import React from 'react';
import cx from 'classnames';
import * as css from './GlobalMenu.scss';
import * as globalMenuIcon from '../../icons/global_menu.svg';
import { IAdaptiveItem, IHasCX } from '@epam/uui';
import { IconContainer } from '@epam/uui-components';

export interface GlobalMenuProps extends IAdaptiveItem, IHasCX {

}

export class GlobalMenu extends React.Component<GlobalMenuProps, any> {
    render() {
        return (
            <div id='global_menu_toggle' className={ cx(css.globalMenuBtn, this.props.cx) } >
                { /* <img className={ css.globalMenuBtn }
                    src='/static/icons/global_menu.svg'
                    onError={ function () { document.getElementById('global_menu_toggle').style.display = 'none'; } }
                /> */}
                <IconContainer icon={ globalMenuIcon } cx={ css.globalMenuIcon } />
            </div>
        );
    }
}
