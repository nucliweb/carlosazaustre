import { Box, Heading, Flex, Text, Tag } from "@chakra-ui/react";
import { MdDateRange } from "react-icons/md";

export const PostListItem = ({ title, date, tags }) => {
  return (
    <Box borderBottom="1px" borderColor="brand.900" p="6">
      <Heading as="h3" size="md" my={2}>
        {title}
      </Heading>
      <Flex align="center" fontSize="sm" color="gray.500">
        <MdDateRange />
        <Text ml={1}>
          {date}{" "}
          {tags.map((tag) => (
            <Tag size="sm" mx={2} colorScheme="brand">
              {tag}
            </Tag>
          ))}
        </Text>
      </Flex>
    </Box>
  );
};