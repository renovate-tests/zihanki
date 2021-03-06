import React from 'react'
import styled from 'styled-components'

import Opener from '../../state/SideMenuManager'
import Column from './Column'
import { faCog, faMoneyBillWave } from '@fortawesome/pro-solid-svg-icons'
import { useTranslation } from 'react-i18next'

type ContainerProps = {}
type Props = {
  className: string
  active: boolean
} & ContainerProps

const Component: React.FC<Props> = ({ className, active }) => {
  const { t } = useTranslation()
  return (
    <>
      <nav
        className={className}
        style={{
          visibility: active ? 'visible' : 'hidden',
        }}
      >
        <ul>
          {[
            {
              text: t('purchase-record'),
              key: 'purchase-record',
              icon: faMoneyBillWave,
            },
            { text: t('settings'), key: 'settings', icon: faCog },
          ].map(({ text, key, icon }) => (
            <Column key={key} icon={icon}>
              {text}
            </Column>
          ))}
        </ul>
      </nav>
    </>
  )
}

const StyledComponent = styled(Component)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  min-width: 60vw;
  height: 100vh;
  padding-top: 64px;
  background: white;
  box-shadow: 8px 0 32px 8px var(--component-shadow-color);
`

const SideMenu: React.FC<ContainerProps> = properties => {
  const opener = Opener.useContainer()
  return <StyledComponent {...properties} active={opener.isOpen} />
}

export default SideMenu
