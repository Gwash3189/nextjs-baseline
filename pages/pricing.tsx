import React from 'react'
import { MarketingContainer } from 'components/marketing/MarketingContainer'
import { MarketingHeader } from 'components/marketing/MarketingHeader'
import LowestPaymentPlan from 'components/pricing/LowestPaymentPlan'
import HighlightedPaymentPlan from 'components/pricing/HighlightedPaymentPlan'
import HighestPaymentPlan from 'components/pricing/HighestPaymentPlan'

export default function Pricing () {
  return (
    <MarketingContainer>
      <MarketingHeader active='pricing'/>
      <div className="pb-16 mt-16 space-y-4 flex flex-col xl:space-y-0 xl:flex xl:flex-row items-center justify-center">
        <LowestPaymentPlan />
        <HighlightedPaymentPlan />
        <HighestPaymentPlan />
      </div>
    </MarketingContainer>
  )
}
