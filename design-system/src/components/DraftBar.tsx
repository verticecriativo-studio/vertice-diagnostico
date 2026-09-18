import * as React from 'react';

export interface DraftBarProps {
  /** Short badge text, e.g. "RASCUNHO". */
  tag: React.ReactNode;
  children: React.ReactNode;
}

/** Sticky top banner flagging a non-production/preview mode of the page. */
export function DraftBar({ tag, children }: DraftBarProps) {
  return (
    <div className="vds-draftbar">
      <span className="vds-draftbar-tag">{tag}</span>
      <span className="vds-draftbar-msg">{children}</span>
    </div>
  );
}
