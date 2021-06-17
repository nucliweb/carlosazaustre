import NextLink from "next/link";
import styled from "@emotion/styled";
import {
  ImTwitch,
  ImYoutube,
  ImInstagram,
  ImTwitter,
  ImGithub,
} from "react-icons/im";
import {
  Container,
  Flex,
  Text,
  Spacer,
  Link,
  UnorderedList,
  ListItem,
  Heading,
} from "@chakra-ui/react";

import { IconTikTok } from "./icons/IconTikTok";
import { Logo } from "./icons/Logo";

const StyledFooter = styled.footer`
  background-color: var(--chakra-colors-secondary-900);
  color: var(--chakra-colors-white);
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Container maxW="container.xl">
        <Flex
          p="4"
          w="100%"
          direction={["column", "column", "column", "row"]}
          justify="space-between"
          textAlign={["center", "center", "center", "left"]}
          align={["center", "center", "center", "flex-start"]}
        >
          <Flex
            w={["60%", "60%", "60%", "25%"]}
            justify={["center", "center", "center", "flex-start"]}
            align={["center", "center", "center", "flex-start"]}
            direction="column"
            textAlign={["center", "center", "center", "left"]}
          >
            <NextLink href="/">
              <a>
                <Flex
                  align="center"
                  justify={["center", "center", "center", "flex-start"]}
                  my={4}
                >
                  <Logo size="40px" />
                  <Text
                    fontFamily="heading"
                    fontSize="xl"
                    fontWeight="bold"
                    px="2"
                  >
                    Carlos Azaustre
                  </Text>
                </Flex>
              </a>
            </NextLink>
            <Flex justify="space-around" direction="row" w="100%">
              <Link href="https://youtube.com/carlosazaustre?sub_confirmation=1">
                <ImYoutube size="20px" />
              </Link>
              <Spacer />
              <Link href="https://twitch.tv/carlosazaustre">
                <ImTwitch size="20px" />
              </Link>
              <Spacer />
              <Link href="https://instagram.com/carlosazaustre">
                <ImInstagram size="20px" />
              </Link>
              <Spacer />
              <Link href="https://twitter.com/carlosazaustre">
                <ImTwitter size="20px" />
              </Link>
              <Spacer />
              <Link href="https://github.com/carlosazaustre">
                <ImGithub size="20px" />
              </Link>
              <Spacer />
              <Link href="https://tiktok.com/@carlosazaustre">
                <IconTikTok size="20px" />
              </Link>
            </Flex>
          </Flex>

          <section>
            <Heading as="h4" size="sm" p="4">
              Páginas
            </Heading>
            <UnorderedList styleType="none">
              <ListItem>
                <NextLink href="/rss.xml">
                  <Link>RSS</Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href="/">
                  <Link>Home</Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href="p//mentoria">
                  <Link>Mentoría</Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href="/p/sobre-mi">
                  <Link>Sobre mi</Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href="/blog">
                  <Link>Blog</Link>
                </NextLink>
              </ListItem>
            </UnorderedList>
          </section>

          <section>
            <Heading as="h4" size="sm" p="4">
              Recursos Gratis
            </Heading>
            <UnorderedList styleType="none">
              <ListItem>
                <NextLink href="/p/curso-nodejs-gratis">
                  <Link>Curso Node.js Gratis</Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href="/p/curso-programacion">
                  <Link>Curso de Programación Gratis</Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href="/p/curso-vue-gratis">
                  <Link>Curso de Vue y Firebase Gratis</Link>
                </NextLink>
              </ListItem>
            </UnorderedList>
          </section>

          <section>
            <Heading as="h4" size="sm" p="4">
              Legal
            </Heading>
            <UnorderedList styleType="none">
              <ListItem>
                <Link href="/privacidad">
                  <a>Política de Privacidad</a>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/cookies">
                  <a>Política de Cookies</a>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/legal">
                  <a>Aviso Legal</a>
                </Link>
              </ListItem>
            </UnorderedList>
          </section>
        </Flex>
      </Container>
    </StyledFooter>
  );
};