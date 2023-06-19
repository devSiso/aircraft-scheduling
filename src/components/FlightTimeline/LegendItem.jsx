import React from "react"

import { LegendItemWrapper } from './styles'

const LegendItem = ({ color, children }) => (
  <LegendItemWrapper color={color}>
    <span />
    {children}
  </LegendItemWrapper>
)

export default LegendItem;