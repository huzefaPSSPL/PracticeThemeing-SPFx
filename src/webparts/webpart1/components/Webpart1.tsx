import * as React from "react";
import styles from "./Webpart1.module.scss";
import type { IWebpart1Props } from "./IWebpart1Props";
import { escape } from "@microsoft/sp-lodash-subset";
import { DefaultButton, Link, Text } from "@fluentui/react";
import { _onMenuClick, addIcon, menuProps } from "./extras";

const Webpart1: React.FC<IWebpart1Props> = ({
  description,
  isDarkTheme,
  environmentMessage,
  hasTeamsContext,
  userDisplayName,
}) => {
  function handleClickOnLink(ev: React.MouseEvent<unknown>) {
    window.alert("clicked on Link component which is rendered as html button");
  }

  return (
    <section
      className={`${styles.webpart1} ${hasTeamsContext ? styles.teams : ""}`}
    >
      <div className={styles.welcome}>
        <img
          alt=""
          src={
            isDarkTheme
              ? require("../assets/welcome-dark.png")
              : require("../assets/welcome-light.png")
          }
          className={styles.welcomeImage}
        />
        <h2>Well done, {escape(userDisplayName)}!</h2>
        <div>{environmentMessage}</div>
        <div>
          Web part property value: <strong>{escape(description)}</strong>
        </div>
      </div>
      <div>
        <h3>Welcome to SharePoint Framework!</h3>
        <p>
          The SharePoint Framework (SPFx) is a extensibility model for Microsoft
          Viva, Microsoft Teams and SharePoint. It&#39;s the easiest way to
          extend Microsoft 365 with automatic Single Sign On, automatic hosting
          and industry standard tooling.
        </p>
        <h4>Learn more about SPFx development:</h4>
        <ul className={styles.links}>
          <li>
            <a href="https://aka.ms/spfx" target="_blank" rel="noreferrer">
              SharePoint Framework Overview
            </a>
          </li>
          <li>
            <a
              href="https://aka.ms/spfx-yeoman-graph"
              target="_blank"
              rel="noreferrer"
            >
              Use Microsoft Graph in your solution
            </a>
          </li>
          <li>
            <a
              href="https://aka.ms/spfx-yeoman-teams"
              target="_blank"
              rel="noreferrer"
            >
              Build for Microsoft Teams using SharePoint Framework
            </a>
          </li>
          <li>
            <a
              href="https://aka.ms/spfx-yeoman-viva"
              target="_blank"
              rel="noreferrer"
            >
              Build for Microsoft Viva Connections using SharePoint Framework
            </a>
          </li>
          <li>
            <a
              href="https://aka.ms/spfx-yeoman-store"
              target="_blank"
              rel="noreferrer"
            >
              Publish SharePoint Framework applications to the marketplace
            </a>
          </li>
          <li>
            <a
              href="https://aka.ms/spfx-yeoman-api"
              target="_blank"
              rel="noreferrer"
            >
              SharePoint Framework API reference
            </a>
          </li>
          <li>
            <a href="https://aka.ms/m365pnp" target="_blank" rel="noreferrer">
              Microsoft 365 Developer Community
            </a>
          </li>
        </ul>
      </div>
      <div>
        <Text>
          When a link has an href,{" "}
          <Link
            href="https://developer.microsoft.com/en-us/fluentui#/controls/web/link"
            underline
          >
            it renders as an anchor tag.
          </Link>{" "}
          Without an href,{" "}
          <Link onClick={handleClickOnLink} underline>
            the link is rendered as a button
          </Link>
          . You can also use the disabled attribute to create a{" "}
          <Link
            disabled
            href="https://developer.microsoft.com/en-us/fluentui#/controls/web/link"
            underline
          >
            disabled link
          </Link>
        </Text>
        <Text>
          It's not recommended to use Links with imgs because Links are meant to
          render textual inline content. Buttons are inline-block or in the case
          of imgs, block. However, it is possible to create a linked image
          button by making a button with an unstyled variant and adding the img
          content and href source to that.
        </Text>

        <DefaultButton
          text="New item"
          iconProps={addIcon}
          menuProps={menuProps}
          // Optional callback to customize menu rendering
          // menuAs={_getMenu}
          // Optional callback to do other actions (besides opening the menu) on click
          onMenuClick={_onMenuClick}
          // By default, the ContextualMenu is re-created each time it's shown and destroyed when closed.
          // Uncomment the next line to hide the ContextualMenu but persist it in the DOM instead.
          // persistMenu={true}
          allowDisabledFocus
          // disabled={disabled}
          // checked={checked}
        />
      </div>
    </section>
  );
};

export default Webpart1;
