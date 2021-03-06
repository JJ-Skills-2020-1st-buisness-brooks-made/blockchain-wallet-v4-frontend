import { FlyoutWrapper } from 'components/Flyout'
import { Icon } from 'blockchain-info-components'
import { Props as OwnProps, State, SuccessStateType } from '.'
import Loading from './template.loading'
import React from 'react'
import styled from 'styled-components'

const CustomFlyoutWrapper = styled(FlyoutWrapper)`
  height: 100%;
`
const Iframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 100%;
  margin-top: 16px;
`

const Success: React.FC<Props> = props => {
  return props.threeDSCallbackReceived ? (
    <Loading polling order={props.type === 'ORDER'} />
  ) : (
    <CustomFlyoutWrapper>
      <>
        {props.type === 'CARD' && (
          <Icon
            cursor
            name='arrow-left'
            size='20px'
            color='grey600'
            role='button'
            onClick={() => {
              props.simpleBuyActions.setStep({
                step: 'ADD_CARD',
                cardId: props.card.id
              })
            }}
          />
        )}
        {props.type === 'ORDER' && (
          <Icon
            cursor
            name='arrow-right'
            size='20px'
            color='grey600'
            role='button'
            style={{ justifyContent: 'flex-end' }}
            onClick={() => {
              props.simpleBuyActions.setStep({
                step: 'ORDER_SUMMARY',
                order: props.order
              })
            }}
          />
        )}
        <Iframe
          src={
            props.domains.walletHelper +
            '/wallet-helper/everypay/#/paymentLink/' +
            encodeURIComponent(
              props.type === 'CARD'
                ? props.providerDetails.everypay.paymentLink
                : props.order.attributes
                ? props.order.attributes.everypay.paymentLink
                : ''
            )
          }
        />
      </>
    </CustomFlyoutWrapper>
  )
}

type Props = OwnProps & State & SuccessStateType

export default Success
