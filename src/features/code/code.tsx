import { FC, PropsWithChildren, useState } from "react";

const Code: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [copied, setCopied] = useState(false);

  const copyTextToClipboard = () => {
    window.navigator.clipboard.writeText(children as string);
    setCopied(true);
  };

  return (
    <div className="code" onClick={copyTextToClipboard}>
      <div>{copied ? "Copied!" : "Click to copy"}</div>
      <code>{children}</code>
    </div>
  );
};

export default Code;
