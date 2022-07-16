import { Anchor, Box, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import { useStyles } from "./header.styles";

const NavigationRoutes = [
  { path: "/", text: "Home" },
  { path: "/", text: "L'evento" },
  { path: "/", text: "Il programma" },
  { path: "/", text: "Lə ospitə" },
  { path: "/", text: "La Nassa" },
];

type Props = {
  isPastHeroSection: boolean | undefined;
};

export const Navigation = ({ isPastHeroSection }: Props) => {
  const theme = useMantineTheme();

  const {
    classes: { navigation },
  } = useStyles({});

  return (
    <Box px={20} className={navigation}>
      {NavigationRoutes.map((route, i) => (
        <Link key={route.text} href={route.path} passHref>
          <Anchor
            sx={{
              padding: 20,
              border: `2px solid  ${
                isPastHeroSection ? "#FFF" : theme.colors["sexyred"][4]
              }`,
              color: isPastHeroSection ? "#FFF" : theme.colors["sexyred"][4],
              marginBottom: "1rem",
              borderRadius: 8,
              fontSize: 20,
            }}
          >
            {route.text}
          </Anchor>
        </Link>
      ))}
    </Box>
  );
};
