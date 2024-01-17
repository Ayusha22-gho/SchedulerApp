import React from "react";
interface Schedule {
  title: string;
  description: string;
  subject: string;
  frequency: string;
  repeat: string;
  time: string;
}
interface ContainerTableProps {
  schedules: Schedule[];
}
const Table: React.FC<ContainerTableProps> = ({ schedules }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Subject</th>
          <th>Schedule</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {schedules.map((schedule) => (
          <tr >
            <td>{schedule.title}</td>
            <td>{schedule.description}</td>
            <td>{schedule.subject}</td>
            <td>{schedule.frequency}</td>
            <td>{schedule.repeat}</td>
            <td>{schedule.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
