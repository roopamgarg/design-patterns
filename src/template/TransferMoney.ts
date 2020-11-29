// import AuditTrail from './AuditTrail';
import Task from './Task';

class TransferMoney extends Task {
  protected doExecute(): void {
    console.log('Transferring Money');
  }
}

export default TransferMoney;
