import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import { PRODUCTS } from './products.data'

const prisma = new PrismaClient()

async function main() {
	console.log('Начало заполнения базы данных...')

	const numberOfProducts = 10
	console.log(`Создание ${numberOfProducts} товаров...`)

	for (const productData of PRODUCTS) {
		const product = await prisma.product.create({
			data: {
				name: productData.name,
				description: productData.description,
				image: productData.image,
				price: productData.price,
				discountPrice: productData.discountPrice,
				isHasSecondDiscount: productData.isHasSecondDiscount,
				category: productData.category,
				createdAt: faker.date.recent({ days: 60 }),
				updatedAt: faker.date.recent({ days: 30 })
			}
		})
		console.log(`Товар создан: ${product.name}`)
	}

	console.log('\n')

	const numberOfPromoCodes = 5
	console.log(`Создание ${numberOfPromoCodes} промокодов...`)

	for (let i = 0; i < numberOfPromoCodes; i++) {
		const promo = await prisma.promoCode.create({
			data: {
				code: faker.string.alphanumeric(10),
				discount: parseFloat(
					faker.number.float({ min: 5, max: 50, fractionDigits: 2 }).toFixed(2)
				)
			}
		})
		console.log(`Промокод создан: ${promo.code}`)
	}

	console.log('\n')

	console.log('Заполнение базы данных завершено успешно.')
}

main()
	.catch(e => {
		console.error('Ошибка при заполнении базы данных:', e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
