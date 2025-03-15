import { Type } from 'class-transformer'
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class FillProductDto {
	@IsString()
	@IsNotEmpty()
	readonly name: string

	@IsString()
	@IsOptional()
	readonly description?: string

	@IsNumber()
	@Type(() => Number)
	readonly price: number

	@IsString()
	@IsNotEmpty()
	readonly category: string
}
