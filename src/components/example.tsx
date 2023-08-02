import React from 'react'

interface ExampleProps {
  /**
   * This props will be rendered as a title
   * @default undefined
   */
  name?: string
}

/**
 *
 * @param props
 * @returns ReactElement
 * @description This component will render the value of name props as button title.
 */
export const Example = ({
  name = undefined,
}: ExampleProps): React.ReactElement => {
  return <button>{name || 'Hello'}</button>
}
