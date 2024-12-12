"use client";

import React from 'react';

import { Heading, Text, Flex, Button, GlitchFx, InlineCode, Logo, LetterFx, Arrow, SmartImage, Tag } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={68}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						border="accent-medium"
						borderStyle="solid-1"
						gap="24"
						padding="24"
						justifyContent="center"
						radius="l"
						onBackground="brand-strong"
					>
						<Flex
							position="relative"
							flex={1} // Adjusted flex value for the avatar
							paddingX="xl"
							direction='column'
							justifyContent='center'
							alignItems='center'>
							<SmartImage
								src={'/images/me.jpg'}
								alt='profil-picture'
								aspectRatio='1/1'
								radius='l'>

							</SmartImage>
							{/* <Avatar size='xl' src='/images/moad.jpeg' /> */}
						</Flex>
						<Flex
							position="relative"
							flex={3} // Adjusted flex value for the details
							direction='column'
							justifyContent='center'
							alignItems='flex-start' // Align items to the start
							gap="16">
							<InlineCode>
								decodedKey, _ := hex.DecodeString("68656c6c6f"); fmt.Println(string(decodedKey))
							</InlineCode>
							<Heading
								wrap="balance"
								variant="display-strong-s">
								<LetterFx trigger="instant">
									Eslam Shakreen
								</LetterFx>
							</Heading>
							<LetterFx trigger='instant'>
								Founder & Backend Warrior: Innovating Solutions and Engineering Excellence at HyperVizion
							</LetterFx>
							<GlitchFx>
								<Flex direction="row" gap="8">
									<Tag variant="accent" size="m" label="Backend" />
									<Tag variant="gradient" size="m" label="AI" />
									<Tag variant="success" size="m" label="GIS" />
								</Flex>
								<Flex direction="column" gap="8" marginTop="16">
									<Heading variant="body-strong-m">Stuff I Like</Heading>
									<Flex direction="row" gap="8">
										<Tag variant="info" size="m" label="Coding" />
										<Tag variant="brand" size="m" label="Anime" />
										<Tag variant="accent" size="m" label="Gaming" />
									</Flex>
								</Flex>
							</GlitchFx>

							<Button
								id="readDocs"
								href=""
								variant="secondary">
								<Flex alignItems="center">
									To HyperVizion
									<Arrow trigger="#readDocs" />
								</Flex>
							</Button>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				as="footer"
				position="relative"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">
				<Text
					variant="body-default-s" onBackground="neutral-weak">
					© {new Date().getFullYear()} <Link href="">HyperVizion</Link>
				</Text>
				<Flex
					gap="12">
					<Button
						href=""
						prefixIcon="linkedin" size="s" variant="tertiary">
						Linkedin
					</Button>
					<Button
						href=""
						prefixIcon="x" size="s" variant="tertiary">
						@Eslam
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
