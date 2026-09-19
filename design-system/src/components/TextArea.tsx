import * as React from 'react';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

/** Campo de resposta livre para perguntas abertas; redimensionável, com o mesmo estilo do `TextField`. */
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  { className, ...rest },
  ref
) {
  return <textarea ref={ref} className={['vds-textarea', className].filter(Boolean).join(' ')} {...rest} />;
});
