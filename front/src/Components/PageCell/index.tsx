import "./styles.css";

type Props = {
  pageNo: number;
  linkBase: string;
  disabled?: boolean;
  extraClassName?: string;
};
const PageCell: React.FC<Props> = ({
  pageNo,
  linkBase,
  disabled,
  extraClassName,
}) => {
  return (
    <a
      href={linkBase + pageNo.toString()}
      className={"page-cell " + extraClassName + (disabled ? " disabled" : "")}
    >
      <div className={disabled ? "disabled" : ""}>{pageNo.toString()}</div>
    </a>
  );
};

export default PageCell;
