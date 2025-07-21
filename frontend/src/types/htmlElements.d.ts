import React, { ChangeEvent } from "react"

export type OnClick = MouseEvent<HTMLInputElement>

export type OnChange = ChangeEvent<HTMLInputElement>

export type onChangeWithSynthetic = React.SyntheticEvent
