type TitleComponentProps = {
  title: string;
}

const TitleComponent = ({ title }: TitleComponentProps) => {
  return (
    <div>{title}</div>
  )
};

export { TitleComponent };