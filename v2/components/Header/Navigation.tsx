import { Anchor, Box, useMantineTheme } from "@mantine/core";
import Link from "next/link";

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

  return (
    <Box
      sx={{
        zIndex: 20,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        marginTop: "60px",
        display: "flex",
        flexDirection: "column",
      }}
      px={20}
    >
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
