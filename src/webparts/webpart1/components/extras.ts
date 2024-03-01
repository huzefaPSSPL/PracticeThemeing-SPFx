import { IContextualMenuProps, IIconProps } from "@fluentui/react";

export const menuProps: IContextualMenuProps = {
  // For example: disable dismiss if shift key is held down while dismissing
  onDismiss: ev => {
    if (ev && 'shiftKey' in ev) {
      ev.preventDefault();
    }
  },
  items: [
    {
      key: 'emailMessage',
      text: 'Email message',
      iconProps: { iconName: 'Mail' },
    },
    {
      key: 'calendarEvent',
      text: 'Calendar event',
      iconProps: { iconName: 'Calendar' },
    },
  ],
  directionalHintFixed: true,
};

export const addIcon: IIconProps = { iconName: 'Add' };

/* export function _getMenu(props: IContextualMenuProps): JSX.Element {
  // Customize contextual menu with menuAs
  return (<ContextualMenu { ...props } />);
} */

export function _onMenuClick(ev?: React.SyntheticEvent<any>): void {
  console.log(ev);
}
