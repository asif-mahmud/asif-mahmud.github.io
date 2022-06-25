import { FC, PropsWithChildren } from "react";

const Code: FC<PropsWithChildren<{}>> = ({ children }) => {
  const copyTextToClipboard = () => {
    window.navigator.clipboard.writeText(children as string);
  };

  return (
    <div className="code" onClick={copyTextToClipboard}>
      <div>Click to copy</div>
      <code>{children}</code>
    </div>
  );
};

export default Code;
