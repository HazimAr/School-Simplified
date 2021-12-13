import {
	Heading,
	Stack,
	HStack,
	VStack,
	Text,
	Box,
	Image,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Donate() {
	const reasons = [
		{
			title: "A",
			desc: "Text Text Text",
		},
		{
			title: "B",
			desc: "Text Text Text",
		},
		{
			title: "C",
			desc: "Text Text Text",
		},
	];

	return (
		<Container my="100px">
			<ContainerInside>
				<Stack
					direction={{ base: "column-reverse", md: "row" }}
					align="center"
					spacing="45px"
				>
					<Stack display={{ base: "block", md: "none" }}>
						<iframe
							src="https://master.d3o53wn77q6k5v.amplifyapp.com/"
							frameBorder="0"
							width="350px"
							height="600px"
							scrolling="no"
						/>
					</Stack>
					<Box
						rounded={15}
						bg="brand.purple.dark"
						height="600px"
						width="900px"
						display={{ base: "none", md: "block" }}
					>
						<Image
							position="relative"
							left="30%"
							top="-11%"
							src="timmy/timmy_donation_money.png"
						/>
						<iframe
							src="https://master.d3o53wn77q6k5v.amplifyapp.com/"
							frameBorder="0"
							width="100%"
							height="100%"
							style={{ position: "relative", top: "-17%" }}
						/>
					</Box>
					<VStack align="start" width="100%">
						<Heading textAlign="left" py="10px">
							Support School Simplified
						</Heading>
						<Text fontSize="18px" textAlign="left">
							We do not charge anything for our services, and your
							support helps to further our mission to empower the
							next generation to revolutionize the future through
							learning.
							{<br />}
							{<br />}
							Thank you for your generosity in donating to School
							Simplified!
						</Text>
						<Heading textAlign="left" fontSize="18px">
							Here is what your money will go towards:
						</Heading>
						<HStack h="150px" w="100%">
							{reasons.map((reason, index) => {
								return (
									<Box
										bg="brand.purple.dark"
										p={15}
										rounded={10}
										key={index}
										w="100%"
										h="100%"
										align="start"
									>
										<Heading fontSize="16px">
											{reason.title}
										</Heading>
										<Text fontSize="12px">
											{reason.desc}
										</Text>
									</Box>
								);
							})}
						</HStack>
					</VStack>
					<Image
						display={{ base: "none", md: "block" }}
						position="absolute"
						right="20vw"
						top="10vh"
						zIndex={0}
						src="timmy/timmy_rich_2.png"
						w="300px"
					/>
				</Stack>
			</ContainerInside>
		</Container>
	);
}
