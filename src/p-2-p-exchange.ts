import {
  AdCreated as AdCreatedEvent,
  FundsWithdrawn as FundsWithdrawnEvent,
  OrderExecuted as OrderExecutedEvent,
} from "../generated/P2PExchange/P2PExchange"
import { AdCreated, FundsWithdrawn, OrderExecuted } from "../generated/schema"

export function handleAdCreated(event: AdCreatedEvent): void {
  let entity = new AdCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.adId = event.params.adId
  entity.price = event.params.price
  entity.adType = event.params.adType
  entity.token = event.params.token
  entity.quantity = event.params.quantity
  entity.validUntil = event.params.validUntil
  entity.merchant = event.params.merchant

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundsWithdrawn(event: FundsWithdrawnEvent): void {
  let entity = new FundsWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.adId = event.params.adId
  entity.amount = event.params.amount
  entity.merchant = event.params.merchant

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderExecuted(event: OrderExecutedEvent): void {
  let entity = new OrderExecuted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.adId = event.params.adId
  entity.amount = event.params.amount
  entity.buyer = event.params.buyer
  entity.merchant = event.params.merchant

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
