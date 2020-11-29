import AuditTrail from './AuditTrail';
import Task from './Task';
import TransferMoney from './TransferMoney';

const main = () => {
  const auditTrail: AuditTrail = new AuditTrail();
  const task = new TransferMoney(auditTrail);
  task.execute();
};

export default main;
