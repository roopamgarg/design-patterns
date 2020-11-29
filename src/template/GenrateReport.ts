import AuditTrail from './AuditTrail';
import Task from './Task';

class GenerateReport extends Task {
  protected doExecute(): void {
    console.log('Generate Report');
  }
}

export default GenerateReport;
