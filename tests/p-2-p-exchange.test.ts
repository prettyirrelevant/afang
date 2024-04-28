import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { AdCreated } from "../generated/schema"
import { AdCreated as AdCreatedEvent } from "../generated/P2PExchange/P2PExchange"
import { handleAdCreated } from "../src/p-2-p-exchange"
import { createAdCreatedEvent } from "./p-2-p-exchange-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let adId = BigInt.fromI32(234)
    let price = BigInt.fromI32(234)
    let adType = 123
    let token = Address.fromString("0x0000000000000000000000000000000000000001")
    let quantity = BigInt.fromI32(234)
    let validUntil = BigInt.fromI32(234)
    let merchant = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAdCreatedEvent = createAdCreatedEvent(
      adId,
      price,
      adType,
      token,
      quantity,
      validUntil,
      merchant
    )
    handleAdCreated(newAdCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AdCreated created and stored", () => {
    assert.entityCount("AdCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AdCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "adId",
      "234"
    )
    assert.fieldEquals(
      "AdCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "price",
      "234"
    )
    assert.fieldEquals(
      "AdCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "adType",
      "123"
    )
    assert.fieldEquals(
      "AdCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "token",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AdCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "quantity",
      "234"
    )
    assert.fieldEquals(
      "AdCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "validUntil",
      "234"
    )
    assert.fieldEquals(
      "AdCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "merchant",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
