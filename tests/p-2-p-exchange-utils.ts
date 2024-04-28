import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AdCreated,
  FundsWithdrawn,
  OrderExecuted
} from "../generated/P2PExchange/P2PExchange"

export function createAdCreatedEvent(
  adId: BigInt,
  price: BigInt,
  adType: i32,
  token: Address,
  quantity: BigInt,
  validUntil: BigInt,
  merchant: Address
): AdCreated {
  let adCreatedEvent = changetype<AdCreated>(newMockEvent())

  adCreatedEvent.parameters = new Array()

  adCreatedEvent.parameters.push(
    new ethereum.EventParam("adId", ethereum.Value.fromUnsignedBigInt(adId))
  )
  adCreatedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  adCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "adType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(adType))
    )
  )
  adCreatedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  adCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "quantity",
      ethereum.Value.fromUnsignedBigInt(quantity)
    )
  )
  adCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "validUntil",
      ethereum.Value.fromUnsignedBigInt(validUntil)
    )
  )
  adCreatedEvent.parameters.push(
    new ethereum.EventParam("merchant", ethereum.Value.fromAddress(merchant))
  )

  return adCreatedEvent
}

export function createFundsWithdrawnEvent(
  adId: BigInt,
  amount: BigInt,
  merchant: Address
): FundsWithdrawn {
  let fundsWithdrawnEvent = changetype<FundsWithdrawn>(newMockEvent())

  fundsWithdrawnEvent.parameters = new Array()

  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("adId", ethereum.Value.fromUnsignedBigInt(adId))
  )
  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("merchant", ethereum.Value.fromAddress(merchant))
  )

  return fundsWithdrawnEvent
}

export function createOrderExecutedEvent(
  adId: BigInt,
  amount: BigInt,
  buyer: Address,
  merchant: Address
): OrderExecuted {
  let orderExecutedEvent = changetype<OrderExecuted>(newMockEvent())

  orderExecutedEvent.parameters = new Array()

  orderExecutedEvent.parameters.push(
    new ethereum.EventParam("adId", ethereum.Value.fromUnsignedBigInt(adId))
  )
  orderExecutedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  orderExecutedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  orderExecutedEvent.parameters.push(
    new ethereum.EventParam("merchant", ethereum.Value.fromAddress(merchant))
  )

  return orderExecutedEvent
}
