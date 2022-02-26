import React, { useEffect } from "react";
import OptionButton from "../components/option-button";
import Hint from "../components/hint";
import { Accordion, HStack, VStack, Box, Text } from "@chakra-ui/react";

const Game = ({ serverData }) => {
  //see https://github.com/gatsbyjs/gatsby/issues/13355#issuecomment-483290533
  useEffect(() => {
    document.title = "Image Match - via useEffect!";
  });

  return (
    <>
      <Accordion>
        <Text mt={4} mb={4}>
          Image match: a toy app that uses Gatsby's runtime SSR to present
          pictures and names of random animals. I created this to help my
          daughter practice her "sight words."
        </Text>
      </Accordion>
      <HStack spacing={8} alignItems="start" maxW="inherit">
        <Box>
          <Hint
            imageUrl={serverData.photo.urls.regular}
            photographerName={serverData.photo.user?.name}
            photographerUserName={serverData.photo.user?.username}
          />
        </Box>
        <Box minW={100}>
          <VStack spacing={2}>
            {serverData.options.map((option) => {
              return (
                <OptionButton
                  name={option}
                  key={option}
                  answer={serverData.answer}
                />
              );
            })}
          </VStack>
        </Box>
      </HStack>
    </>
  );
};

export default Game;

const shuffle = (array) => {
  // from here https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export async function getServerData() {
  const animalNames = [
    "bird",
    "cat",
    "dog",
    "fish",
    "bear",
    "elephant",
    "giraffe",
    "fox",
    "frog",
    "goat",
    "pig",
    "alligator",
    "cow",
    "camel",
    "unicorn",
    "horse",
    "dinosaur",
    "hippo",
    "puffin",
    "rhino",
  ];
  // 6 random animal names
  const options = shuffle(animalNames).slice(2, 8);

  // set one of them as the answer
  let answer = options[Math.floor(Math.random() * options.length)];
  try {
    const res = await fetch(
      `https://api.unsplash.com/photos/random?query=${answer}&topics=${options.join(
        ","
      )},animals&content_filter=high&orientation=squarish&client_id=${
        process.env.GATSBY_UNSPLASH_API_KEY
      }`
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        `Something went wrong when getting images! ${JSON.stringify(data)}`
      );
    }

    return {
      props: {
        photo: data,
        options: options,
        answer: answer,
      },
    };
  } catch (error) {
    console.log(`An error occurred: ${error}`);
  }
}
