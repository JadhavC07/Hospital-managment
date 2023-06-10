const TableHealth: React.FC<{
  tHead: string[];
  tBody: any;
}> = (props) => {
  const { tHead, tBody } = props;
  const tHeadContent = tHead.map((tHeadValue: any, index: any) => (
    <th key={index} className="py-2 px-4">
      {tHeadValue}
    </th>
  ));

  //  const tBodyTD =   tHead.map((tHeadValue: any, index: any,tBodyValue) => (
  //   <td className="py-2 px-4">{tBodyValue[tHead[0 ,1,2,3,4]]}</td>
  // ));

  const tBodyContent = tBody.map((tBodyValue: any) => (
    <tr key={tBodyValue.id}>
      {tHead.map((columnName: any, index: any) => (
        <th key={index} className="py-2 px-4">
          {tBodyValue[columnName]}
        </th>
      ))}
    </tr>
  ));
  return (
    <div>
      <table className="border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>{tHeadContent}</tr>
        </thead>
        <tbody>{tBodyContent}</tbody>
      </table>
    </div>
  );
};

export default TableHealth;
