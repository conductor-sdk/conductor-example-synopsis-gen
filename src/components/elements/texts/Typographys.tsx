import { Typography, TypographyProps } from "@mui/material";

const commonStyles = {
  // fontFamily: "Montserrat",
  // fontStyle: "normal",
};

export const TitleInTitleBar = (typographyProps: TypographyProps) => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "17px",
        textAlign: "center",
        color: "#000000",
      }}
      {...typographyProps}
    />
  );
};

export const MainTitle = (typographyProps: TypographyProps) => {
  return (
    <Typography
      variant="h1"
      sx={{
        ...commonStyles,
        fontWeight: 700,
        fontSize: {
          md: "36px",
          sm: "26px",
          xs: "26px",
        },
        lineHeight: "43px",
      }}
      {...typographyProps}
    />
  );
};

export const SubText1 = (typographyProps: TypographyProps) => {
  return (
    <Typography
      variant="h2"
      sx={{
        ...commonStyles,
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "14px",
        textAlign: "center",
      }}
      {...typographyProps}
    />
  );
};

export const SubText2 = (typographyProps: TypographyProps) => {
  return (
    <Typography
      variant="h3"
      sx={{
        ...commonStyles,
        fontWeight: 700,
        fontSize: "16px",
        lineHeight: "23px",
        textAlign: "center",
      }}
      {...typographyProps}
    />
  );
};
