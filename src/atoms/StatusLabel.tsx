import "./Atoms.css";

type propsType = {
  children: React.ReactNode;
};

export const StatusLabel = (props: propsType) => {
  return <label className="StatusLabel">{props.children}</label>;
};
