import { IsString } from 'class-validator'
import { CreateTransactionDto } from './create-transaction.dto'

export class UpdateTransactionDto extends CreateTransactionDto {
	@IsString()
	transactionId: string
}
