// import { useTranslation } from '@pancakeswap/localization'
// import { ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'
import { AppBody } from 'components/App'
// import { useState } from 'react'
import { CHAIN_IDS } from 'utils/wagmi'
import Page from 'views/Page'

import { LiquidStakingPageStake } from 'views/LiquidStaking/Stake'
// import { LiquidStakingPageHistory } from 'views/LiquidStaking/History'

// enum ACTIONS {
//   STAKE = 0,
//   UNSTAKE = 1,
//   HISTORY = 2,
// }

const LiquidStakingPage = () => {
  // const { t } = useTranslation()

  // const [selectedTypeIndex, setSelectedTypeIndex] = useState(ACTIONS.STAKE)

  return (
    <Page>
      {/* <ButtonMenu
        mb="32px"
        scale="sm"
        activeIndex={selectedTypeIndex}
        onItemClick={(index) => setSelectedTypeIndex(index)}
        variant="subtle"
      >
        <ButtonMenuItem>{t('Stake')}</ButtonMenuItem>
        <ButtonMenuItem>{t('Unstake')}</ButtonMenuItem>
        <ButtonMenuItem>{t('History')}</ButtonMenuItem>
      </ButtonMenu> */}
      <AppBody>
        <LiquidStakingPageStake />
        {/* {ACTIONS.STAKE === selectedTypeIndex && <LiquidStakingPageStake />}
        {ACTIONS.HISTORY === selectedTypeIndex && <LiquidStakingPageHistory />} */}
      </AppBody>
    </Page>
  )
}

LiquidStakingPage.chains = CHAIN_IDS

export default LiquidStakingPage
