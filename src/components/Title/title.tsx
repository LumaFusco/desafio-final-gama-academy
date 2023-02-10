

type Props = {
    titleText: string;
    subTitle?: string;
}

export const Title = (props: Props) => {
    return(
      <div>
        <h1>{props.titleText}</h1>
        <h4>{props.subTitle}</h4>
      </div>
    );
}