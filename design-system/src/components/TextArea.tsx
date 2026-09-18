import * as React from 'react';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

/** Free-text answer field for open-ended questions; resizable, styled to match `TextField`. */
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  { className, ...rest },
  ref
) {
  return <textarea ref={ref} className={['vds-textarea', className].filter(Boolean).join(' ')} {...rest} />;
});
