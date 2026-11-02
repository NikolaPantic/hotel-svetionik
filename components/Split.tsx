import { Fragment, type CSSProperties } from "react";

/**
 * Deli naslov na reči za animaciju "reč po reč" (maska + pomeranje nagore).
 * Tekst ostaje u DOM-u, pa ga čitači ekrana i pretraživači čitaju normalno.
 */
export function Split({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <Fragment key={`${w}-${i}`}>
          <span className="w">
            <span style={{ "--wi": i } as CSSProperties}>{w}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}
