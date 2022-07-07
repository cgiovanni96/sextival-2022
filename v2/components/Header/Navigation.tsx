import { Anchor, Box, useMantineTheme } from "@mantine/core";
import Link from "next/link";

const NavigationRoutes = [
  { path: "/", text: "Home" },
  { path: "/", text: "L'evento" },
  { path: "/", text: "Il programma" },
  { path: "/", text: "Lə ospitə" },
  { path: "/", text: "La Nassa" },
];

export const Navigation = () => {
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        zIndex: 10,
        width: "100vw",
        height: "100vh",
        color: "black",
        position: "relative",
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
              border: `2px solid  ${theme.colors["sexyblue"][4]}`,
              color: theme.colors["sexyblue"][4],
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
