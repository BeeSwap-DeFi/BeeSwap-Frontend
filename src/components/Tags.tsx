import React from 'react'
import { Tag, VerifiedIcon, CommunityIcon, BinanceIcon } from '@pancakeswap-libs/uikit'

const RiskTag = ({ risk }) => (
  <Tag variant={risk >= 2 ? 'failure' : 'success'} outline startIcon={<VerifiedIcon />}>
    Pancakeswap v{risk}
  </Tag>
)

const CoreTag = () => (
  <Tag variant="secondary" outline startIcon={<VerifiedIcon />}>
    Core
  </Tag>
)

const CommunityTag = () => (
  <Tag variant="textSubtle" outline startIcon={<CommunityIcon />}>
    Community
  </Tag>
)

const BinanceTag = () => (
  <Tag variant="binance" outline startIcon={<BinanceIcon />}>
    Binance
  </Tag>
)

export { CoreTag, CommunityTag, BinanceTag, RiskTag }
