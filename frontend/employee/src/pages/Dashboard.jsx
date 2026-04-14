import React from 'react';
import Card from '@shared/components/Card';
import Button from '@shared/components/Button';
import Badge from '@shared/components/Badge';
import { Calendar, Clock, FileText, Send, User } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-[#191c1e]">Employee Dashboard</h1>
          <p className="text-[#414753] font-medium mt-1">Check your schedule and pending tasks.</p>
        </div>
        <div className="flex gap-3">
           <Button variant="secondary"><Clock size={18} /> Clock In</Button>
           <Button><Send size={18} /> Request Leave</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Today's Schedule">
           <div className="space-y-4">
              <div className="flex items-start gap-4 p-3 rounded-xl bg-[#F7F9FC] border-s-4 border-[#005ab6]">
                 <div className="text-xs font-black text-[#005ab6]">09:00 AM</div>
                 <div>
                    <h4 className="font-bold text-sm">Morning Sync</h4>
                    <p className="text-[11px] text-[#6B7280]">Google Meet • Engineering Team</p>
                 </div>
              </div>
              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#F7F9FC] transition-colors border-s-4 border-transparent">
                 <div className="text-xs font-bold text-[#6B7280]">01:00 PM</div>
                 <div>
                    <h4 className="font-bold text-sm">Lunch Break</h4>
                 </div>
              </div>
           </div>
        </Card>

        <Card title="Attendance Summary">
           <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-black uppercase text-[#6B7280]">This Week</span>
              <Badge variant="success">98%</Badge>
           </div>
           <div className="space-y-2">
              <div className="h-2 w-full bg-[#F1F3F6] rounded-full overflow-hidden">
                 <div className="h-full bg-[#005ab6] w-4/5"></div>
              </div>
              <p className="text-[10px] text-right font-bold text-[#414753]">32h / 40h completed</p>
           </div>
        </Card>

        <Card title="Quick Resources">
           <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center gap-2 p-4 rounded-xl border border-[#F1F3F6] hover:bg-[#F7F9FC] transition-all">
                 <FileText className="text-blue-500" />
                 <span className="text-[10px] font-bold uppercase">Payslips</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 rounded-xl border border-[#F1F3F6] hover:bg-[#F7F9FC] transition-all">
                 <User className="text-orange-500" />
                 <span className="text-[10px] font-bold uppercase">Benefits</span>
              </button>
           </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
