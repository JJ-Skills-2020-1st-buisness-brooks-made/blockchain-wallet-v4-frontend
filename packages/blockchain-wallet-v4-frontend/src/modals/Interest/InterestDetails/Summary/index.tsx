import { FormattedMessage } from 'react-intl'
import {
  Link,
  Text,
  TooltipHost,
  TooltipIcon
} from 'blockchain-info-components'
import { SuccessStateType } from '..'
import FiatDisplay from 'components/Display/FiatDisplay'
import moment from 'moment'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`

const SummaryItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const LineVector = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.grey000};
  margin: 10px 0;
`
const Summary: React.FC<SuccessStateType> = ({
  coin,
  interestRate,
  interestAccountBalance
}) => {
  return (
    <Wrapper>
      <Text color='grey900' weight={600} style={{ marginBottom: '6px' }}>
        <FormattedMessage id='modals.borrow.summary' defaultMessage='Summary' />
      </Text>
      <LineVector />
      <SummaryItemContainer>
        <Text color='grey600' size='14px' weight={500}>
          <FormattedMessage
            id='modals.interest.summary.next'
            defaultMessage='Next interest payment'
          />
        </Text>
        <Text color='grey600' size='14px' weight={500}>
          {moment()
            .add(1, 'month')
            .startOf('month')
            .format('MMMM D, YYYY')}
        </Text>
      </SummaryItemContainer>
      <LineVector />
      <SummaryItemContainer>
        <Text color='grey600' size='14px' weight={500}>
          <FormattedMessage
            id='modals.interest.summary.accrued'
            defaultMessage='Accrued interest this month'
          />
          <TooltipHost id='modals.interest.summary.accrued.tooltip'>
            <TooltipIcon name='info' size='12px' />
          </TooltipHost>
        </Text>
        <FiatDisplay color='grey600' size='14px' weight={500} coin={coin}>
          {interestAccountBalance[coin].pendingInterest}
        </FiatDisplay>
      </SummaryItemContainer>
      <LineVector />
      <SummaryItemContainer>
        <Text color='grey600' size='14px' weight={500}>
          <FormattedMessage
            id='modals.interest.summary.lock'
            defaultMessage='Lock-up period'
          />
          <TooltipHost id='modals.interest.summary.lock.tooltip'>
            <TooltipIcon name='info' size='12px' />
          </TooltipHost>
        </Text>
        <Text color='grey600' size='14px' weight={500}>
          <FormattedMessage
            id='modals.interest.summary.thirtydays'
            defaultMessage='30 days'
          />
        </Text>
      </SummaryItemContainer>
      <LineVector />
      <SummaryItemContainer>
        <Text color='grey600' size='14px' weight={500}>
          <FormattedMessage
            id='modals.interest.summary.rate'
            defaultMessage='Interest rate'
          />
          {' - '}
          <Link href='#' target='_blank' size='14px' weight={500}>
            <FormattedMessage
              id='modals.interest.summary.moredetails'
              defaultMessage='More details'
            />
          </Link>
        </Text>
        <Text color='grey600' size='14px' weight={500}>
          {interestRate[coin]}%
        </Text>
      </SummaryItemContainer>
    </Wrapper>
  )
}

export default Summary