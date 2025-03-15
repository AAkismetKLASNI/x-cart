import { Product } from '@prisma/client'

export const PRODUCTS: Partial<Product>[] = [
	{
		image: '/uploads/images/phone.jpeg',
		name: 'Quantum X1',
		description:
			'The Quantum X1 is a revolutionary smartphone that combines cutting-edge technology with sleek design. Featuring a holographic display, AI-driven personal assistant, and unparalleled battery life, the Quantum X1 is designed to keep you connected and productive like never before.',
		category: 'Smartphones',
		price: 1000,
		discountPrice: 860,
		isHasSecondDiscount: true
	},
	{
		image: '/uploads/images/phone-2.jpeg',
		name: 'Nebula S1',
		description:
			'The Nebula S1 is a futuristic smartphone that brings the cosmos to your fingertips. With its stellar display, advanced AI capabilities, and interstellar connectivity, the Nebula S1 is designed to take you beyond the ordinary. Experience the universe in the palm of your hand.',
		category: 'Smartphones',
		price: 1300,
		discountPrice: 1100
	},
	{
		image: '/uploads/images/tablet.jpeg',
		name: 'Aurora X3',
		description:
			'The Aurora X3 is a cutting-edge tablet that redefines the boundaries of mobile computing. Featuring a stunning display, powerful processor, and intuitive interface, the Aurora X3 is designed to enhance your productivity and creativity. Experience the future of technology today.',
		category: 'Tablets',
		price: 800,
		discountPrice: 700,
		isHasSecondDiscount: true
	},
	{
		image: '/uploads/images/tablet-2.jpeg',
		name: 'Horizon S2',
		description:
			'The Horizon S2 is a revolutionary tablet that blurs the line between reality and imagination. With its immersive display, intelligent features, and seamless connectivity, the Horizon S2 is designed to transport you to new worlds and inspire your creativity. Explore the possibilities with the Horizon S2.',
		category: 'Tablets',
		price: 1000,
		discountPrice: 900
	},
	{
		image: '/uploads/images/laptop.jpeg',
		name: 'NovaBook X5',
		description:
			'The NovaBook X5 is a state-of-the-art laptop that combines power and portability in a sleek and stylish package. Featuring a high-resolution display, fast processor, and long-lasting battery, the NovaBook X5 is designed to keep you productive and entertained wherever you go. Elevate your computing experience with the NovaBook X5.',
		category: 'Laptops',
		price: 1500,
		discountPrice: 1350
	},
	{
		image: '/uploads/images/laptop-2.jpeg',
		name: 'Stella S3',
		description:
			'The Stellar S3 is a premium laptop that delivers exceptional performance and style. With its stunning display, advanced features, and elegant design, the StellarBook S3 is designed to meet the demands of modern professionals and creatives. Experience the pinnacle of laptop technology with the Stellar S3.',
		category: 'Laptops',
		price: 1800,
		discountPrice: 1600
	},
	{
		image: '/uploads/images/monitor.jpeg',
		name: 'Matrix M1',
		description:
			'The Matrix M1 is a cutting-edge monitor that delivers an immersive viewing experience like no other. Featuring a high-resolution display, fast refresh rate, and advanced features, the Matrix M1 is designed to enhance your productivity and entertainment. Transform your workspace with the Matrix M1.',
		category: 'Monitors',
		price: 500,
		discountPrice: 450
	},
	{
		image: '/uploads/images/monitor-2.jpeg',
		name: 'Horizon H2',
		description:
			'The Horizon H2 is a premium monitor that combines style and performance in a sleek and modern design. With its vibrant display, advanced features, and versatile connectivity options, the Horizon H2 is designed to elevate your viewing experience and inspire your creativity. See the world in a new light with the Horizon H2.',
		category: 'Monitors',
		price: 700,
		discountPrice: 600
	},
	{
		image: '/uploads/images/watch.jpeg',
		name: 'Pulse X1',
		description:
			'The Pulse X1 is a cutting-edge smartwatch that combines style and functionality in a compact and lightweight design. Featuring a vibrant display, advanced health tracking features, and seamless connectivity, the Pulse X1 is designed to keep you informed and motivated throughout the day. Stay connected and stay active with the Pulse X1.',
		category: 'Smartwatches',
		price: 300,
		discountPrice: 260,
		isHasSecondDiscount: true
	},
	{
		image: '/uploads/images/watch-2.jpeg',
		name: 'Vortex S1',
		description:
			'The Vortex S1 is a premium smartwatch that delivers exceptional performance and style. With its sleek design, advanced features, and intuitive interface, the Vortex S1 is designed to enhance your active lifestyle and keep you connected on the go. Elevate your fitness and productivity with the Vortex S1.',
		category: 'Smartwatches',
		price: 400,
		discountPrice: 360
	},
	{
		image: '/uploads/images/headphones.jpeg',
		name: 'Sonic X1',
		description:
			'The Sonic X1 is a revolutionary pair of headphones that combines cutting-edge technology with premium sound quality. Featuring active noise cancellation, immersive audio, and long-lasting battery life, the Sonic X1 is designed to transport you to a world of music and entertainment. Hear the difference with the Sonic X1.',
		category: 'Headphones',
		price: 200,
		discountPrice: 180,
		isHasSecondDiscount: true
	},
	{
		image: '/uploads/images/headphones-2.jpeg',
		name: 'Harmony S1',
		description:
			'The Harmony S1 is a premium pair of headphones that delivers exceptional sound quality and comfort. With its stylish design, advanced features, and wireless connectivity, the Harmony S1 is designed to enhance your listening experience and keep you entertained on the go. Immerse yourself in music with the Harmony S1.',
		category: 'Headphones',
		price: 250,
		discountPrice: 220
	}
]
