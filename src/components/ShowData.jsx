export const ShowData = ({ data }) => {
  console.log(data);
  return (
    <div id="">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Department</th>
            <th>Adress</th>
            <th>Salary</th>
            <th>Marital Status</th>
          </tr>
          {data.map((el) => (
            <tr key={el.id}>
              <td>{el.Name}</td>
              <td>{el.Age}</td>
              <td>{el.Department}</td>
              <td>{el.Adress}</td>
              <td>{el.Salary}</td>
              <td>{el.Status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
