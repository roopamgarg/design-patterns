import AuditTrail from './AuditTrail';

abstract class Task {
  private auditTrail: AuditTrail;

  constructor(auditTrail: AuditTrail) {
    this.auditTrail = auditTrail;
  }

  public execute(): void {
    this.auditTrail.record();

    this.doExecute();
  }

  protected abstract doExecute(): void;
}

export default Task;
