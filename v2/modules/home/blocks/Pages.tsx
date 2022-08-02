import { SimpleGrid, AspectRatio, BackgroundImage, Title } from "@mantine/core";
import { shadows } from "@sextival/theme/shadows";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Data = [
  {
    img: "/v2/home/content/home-sextival.png",
    text: "Il Sextival",
    to: "/il-sextival",
  },
  { img: "/v2/home/content/home-nassa.png", text: "La Nassa", to: "/la-nassa" },
  { img: "/v2/home/content/home-ospiti.png", text: "Lə ospitə", to: "/ospiti" },
];

export const Pages = () => {
  const router = useRouter();

  return (
    <SimpleGrid
      cols={1}
      spacing="lg"
      breakpoints={[{ minWidth: 800, cols: 3, spacing: "md" }]}
      mt={80}
    >
      {Data.map((d, i) => (
        <motion.div
          key={i}
          initial={{
            y: 200,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.1 * i },
          }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <AspectRatio
            ratio={16 / 9}
            sx={{ cursor: "pointer", boxShadow: shadows.box }}
            onClick={() => {
              router.push(d.to);
            }}
          >
            <BackgroundImage src={d.img} sx={{ borderRadius: 8 }} />
            <Title
              sx={{
                color: "white",
                marginTop: "auto",
                textShadow: "0 0 4px rgba(0,0,0,.6)",
              }}
            >
              {d.text}
            </Title>
          </AspectRatio>
        </motion.div>
      ))}
    </SimpleGrid>
  );
};