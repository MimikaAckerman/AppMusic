import React from "react";

import { Box, Image, Grid, Text, VStack } from "@chakra-ui/react";
import { nanoid } from "nanoid";

const SearchResults = ({ searchResults }) => {
  return (
    <Grid gridRowGap="1rem">
      {searchResults.map(({ name, artist, thumbnail }) => (
        <Box
          key={nanoid()}
          _hover={{
            background: "teal.500",
            color: "white",
            cursor: "pointer",
          }}
          p=".5rem 1rem"
        >
          <Grid
            sx={{
              gridTemplateColumns: "50px 1fr",
              gridColumnGap: "1rem",
              height: "70px",
              overflow: "hidden",
            }}
          >
            <Box>
              <Image
                src={thumbnail}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            <VStack align="start">
              <Text noOfLines={1}>{name}</Text>
              <Text noOfLines={1}>{artist}</Text>
            </VStack>
          </Grid>
        </Box>
      ))}
    </Grid>
  );
};

export default SearchResults;
