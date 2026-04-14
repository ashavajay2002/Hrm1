import React from 'react';
import Card from '@shared/components/Card';
import Badge from '@shared/components/Badge';
import Button from '@shared/components/Button';
import Table from '@shared/components/Table';
import { PlusCircle, AlertCircle, Users, Check, X, MoreVertical, Calendar, Info, MedicalServices } from 'lucide-react';

const Leaves = () => {
  const stats = [
    { label: "Today's Presence", value: '142', total: '156', color: 'border-primary', progress: 91 },
    { label: "Pending Requests", value: '18', extra: 'Requires Action', color: 'border-[#934700]', urgent: true },
    { label: "On Leave Today", value: '14', extra: 'Scheduled return: Tomorrow (6)', color: 'border-[#475f89]' },
  ];

  const columns = [
    { 
      key: 'employee', 
      title: 'Employee',
      render: (val, item) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#E5E7EB] flex items-center justify-center font-bold text-xs text-[#1F2937]">
            {item.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="text-sm font-bold text-[#191c1e]">{item.name}</p>
            <p className="text-xs text-[#6B7280]">{item.dept}</p>
          </div>
        </div>
      )
    },
    { 
      key: 'type', 
      title: 'Type',
      render: (val) => (
        <Badge variant={val === 'Sick' ? 'error' : 'secondary'} className="text-[10px] font-bold uppercase tracking-widest">{val}</Badge>
      )
    },
    { 
      key: 'period', 
      title: 'Period',
      render: (val, item) => (
        <div>
          <p className="text-sm font-bold text-[#191c1e]">{item.period}</p>
          <p className="text-[10px] text-[#6B7280] font-medium">{item.days} Days Total</p>
        </div>
      )
    },
    { 
      key: 'status', 
      title: 'Status',
      render: (val) => (
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${val === 'Approved' ? 'bg-green-500' : 'bg-orange-500'}`}></span>
          <span className={`text-xs font-bold ${val === 'Approved' ? 'text-green-600' : 'text-orange-600'}`}>{val}</span>
        </div>
      )
    },
    {
      key: 'actions',
      title: 'Actions',
      render: (_, item) => (
        <div className="flex justify-end gap-2 pr-4">
          <button className="p-1.5 hover:bg-green-50 text-green-600 rounded-lg transition-colors"><Check size={18} /></button>
          <button className="p-1.5 hover:bg-red-50 text-red-600 rounded-lg transition-colors"><X size={18} /></button>
        </div>
      )
    }
  ];

  const data = [
    { id: 1, name: 'Jordan Smith', dept: 'Product Design', type: 'Earned', period: 'Oct 24 - Oct 28', days: 5, status: 'Pending' },
    { id: 2, name: 'Sarah Jenkins', dept: 'Engineering', type: 'Sick', period: 'Oct 21 - Oct 22', days: 2, status: 'Approved' },
    { id: 3, name: 'Markus Aurelio', dept: 'Marketing', type: 'Casual', period: 'Nov 02', days: 1, status: 'Pending' },
  ];

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-black text-[#191c1e] tracking-tight">Leave Management</h2>
          <p className="text-[#414753] font-medium mt-1">Review, approve, and configure organization-wide leave policies.</p>
        </div>
        <Button className="bg-[#005ab6] shadow-lg shadow-primary/20">
          <PlusCircle size={18} />
          Add Adjustment
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className={`border-l-4 ${stat.color}`}>
            <p className="text-[10px] font-black text-[#414753] uppercase tracking-widest mb-2">{stat.label}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-[#191c1e] tracking-tight">{stat.value}</span>
              {stat.total && <span className="text-[#414753] text-sm font-medium">/ {stat.total} Employees</span>}
              {stat.urgent && (
                <span className="flex items-center gap-1 text-[#934700] text-[10px] font-black uppercase tracking-wider bg-orange-50 px-2 py-0.5 rounded-lg ml-auto">
                  <AlertCircle size={12} />
                  Requires Action
                </span>
              )}
            </div>
            {stat.progress ? (
              <div className="mt-4 w-full bg-[#f2f4f6] rounded-full h-1.5 overflow-hidden">
                <div className="bg-[#005ab6] h-full rounded-full transition-all duration-700" style={{ width: `${stat.progress}%` }}></div>
              </div>
            ) : (
              <p className="mt-4 text-[10px] text-[#414753] italic font-medium">{stat.extra}</p>
            )}
          </Card>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Column */}
        <div className="flex-1 space-y-6">
          <div className="flex gap-8 border-b border-[#E5E7EB]">
            <button className="pb-4 text-sm font-black border-b-2 border-primary text-primary transition-all">Leave Requests</button>
            <button className="pb-4 text-sm font-bold text-[#6B7280] hover:text-[#1F2937] transition-all">Policies</button>
            <button className="pb-4 text-sm font-bold text-[#6B7280] hover:text-[#1F2937] transition-all">Calendar</button>
          </div>

          <Card className="p-0 overflow-hidden" noPadding>
            <Table columns={columns} data={data} />
            <div className="p-4 bg-[#F7F9FC] flex justify-between items-center border-t border-[#F1F3F6]">
              <span className="text-[11px] text-[#6B7280] font-bold">Showing 1-10 of 48 requests</span>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm" className="bg-white border-[#E5E7EB]">Previous</Button>
                <Button variant="secondary" size="sm" className="bg-white border-[#E5E7EB]">Next</Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar Column */}
        <div className="w-full lg:w-80 space-y-6">
          <Card className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h3 className="font-black text-[#191c1e] tracking-tight">Active Policies</h3>
              <MoreVertical size={18} className="text-[#6B7280] cursor-pointer" />
            </div>
            {[
              { label: 'Annual Paid Leave', day: '24 Days / Year', info: 'Roll-over enabled (5d)', icon: <Info size={14} />, color: 'primary' },
              { label: 'Sick Leave', day: '12 Days / Year', info: 'Medical certificate req.', icon: <MedicalServices size={14} />, color: 'error' },
            ].map((p, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#F7F9FC] border border-[#F1F3F6] group hover:border-[#4F7DF3] transition-all">
                <p className="text-sm font-black text-[#191c1e] mb-1">{p.label}</p>
                <div className="flex justify-between text-[11px] font-bold text-[#414753] mb-3">
                  <span>{p.day}</span>
                  <span className="text-[#005ab6]">Active</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-[#6B7280] font-medium">
                  {p.icon}
                  {p.info}
                </div>
              </div>
            ))}
            <button className="w-full py-3 rounded-xl border-2 border-dashed border-[#c1c6d5] text-[#6B7280] text-[11px] font-black tracking-tight hover:border-primary hover:text-primary transition-all">
              + New Policy Type
            </button>
          </Card>

          <Card className="bg-[#1672df] text-white">
            <h4 className="font-black mb-6 flex items-center gap-2 tracking-tight">
              <Calendar size={18} />
              Upcoming Holidays
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex flex-col items-center justify-center font-black">
                  <span className="text-[9px] leading-none">OCT</span>
                  <span className="text-base leading-none">31</span>
                </div>
                <div>
                  <p className="text-xs font-black">Halloween</p>
                  <p className="text-[10px] opacity-70 font-bold uppercase tracking-widest">Optional</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex flex-col items-center justify-center font-black">
                  <span className="text-[9px] leading-none">NOV</span>
                  <span className="text-base leading-none">11</span>
                </div>
                <div>
                  <p className="text-xs font-black">Veterans Day</p>
                  <p className="text-[10px] opacity-70 font-bold uppercase tracking-widest">Public Holiday</p>
                </div>
              </li>
            </ul>
            <button className="w-full mt-6 text-[10px] font-black underline underline-offset-4 opacity-80 hover:opacity-100 uppercase tracking-widest">View Calendar</button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Leaves;
