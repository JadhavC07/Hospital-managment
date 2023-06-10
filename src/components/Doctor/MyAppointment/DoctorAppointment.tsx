import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctorAppointment } from "../../../mainStore/doctor/doctor-action";
import TableHealth from "../../../common/TableHealth";

const DoctorAppointment = () => {
  const dispatch: any = useDispatch();
  const { userData } = useSelector((state: any) => state.user);

  const { appointments } = useSelector((state: any) => state.doctor);

  console.log("appointments", appointments);
  useEffect(() => {
    dispatch(getAllDoctorAppointment(userData.id));

  }, []);
const tHead: string[] = ["id", "bookId", "end", "start", "title", ""];
const tableContent = <TableHealth tHead={tHead} tBody={appointments} />;
  return (
    <div>
      <p>Doctors-Appoitments</p>
      {tableContent}
    </div>
  );
};

export default DoctorAppointment;
