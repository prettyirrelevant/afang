import { Transfer as TransferEvent } from "../generated/Wngn/Wngn"
import { Deposit, Withdrawal } from "../generated/schema"

export function handleTransfer(event: TransferEvent): void {
  const nullAddress = '0x0000000000000000000000000000000000000000';

  // Handle deposit
  if (event.params.from.toHexString() === nullAddress) {
    let depositId = event.transaction.hash.concatI32(event.logIndex.toI32());
    let deposit = new Deposit(depositId);
    deposit.to = event.params.to;
    deposit.value = event.params.value;
    deposit.blockNumber = event.block.number;
    deposit.blockTimestamp = event.block.timestamp;
    deposit.transactionHash = event.transaction.hash;
    deposit.save();
  } else if (event.params.to.toHexString() === nullAddress) {     // Handle withdrawal
    let withdrawalId = event.transaction.hash.concatI32(event.logIndex.toI32());
    let withdrawal = new Withdrawal(withdrawalId);
    withdrawal.from = event.params.from;
    withdrawal.value = event.params.value;
    withdrawal.blockNumber = event.block.number;
    withdrawal.blockTimestamp = event.block.timestamp;
    withdrawal.transactionHash = event.transaction.hash;
    withdrawal.save();
  }
}
