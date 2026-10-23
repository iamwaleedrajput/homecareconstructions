import { Fragment, type ElementType } from "react";

type LinesProps = {
  text: string;
  highlight?: string;
  as?: ElementType;
  id?: string;
};

export default function Lines({
  text,
  highlight,
  as: Tag = "h2",
  id,
}: LinesProps) {
  const lines = text.split("\n");

  return (
    <Tag id={id}>
      {lines.map((line, index) => (
        <Fragment key={`${index}-${line}`}>
          {index > 0 ? <br /> : null}
          {line}
        </Fragment>
      ))}
      {highlight ? (
        <>
          <br />
          <span>{highlight}</span>
        </>
      ) : null}
    </Tag>
  );
}
