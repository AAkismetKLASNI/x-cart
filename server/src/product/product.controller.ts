import { Controller, Get } from '@nestjs/common'
import { ProductService } from './product.service'

@Controller('products')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Get()
	async getAll() {
		return await this.productService.getAll()
	}
}
