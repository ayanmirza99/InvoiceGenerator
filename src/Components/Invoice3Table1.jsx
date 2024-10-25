const Invoice3Table1 = ({ rows }) => {
  return (
    <table
      style={{
        width: "25%",
        borderCollapse: "collapse",
        marginTop: "4px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <thead>
        <tr style={{ width: "100%", background: "#0053a6" }}>
          <th
            colSpan="3"
            style={{
              border: "1px solid black",
              padding: "5px",
              height: "30px",
            }}
          ></th>
        </tr>
        <tr style={{ backgroundColor: "#d4d4a4" }}>
          <th style={{ border: "1px solid black", padding: "5px" }}>NUM</th>
          <th
            style={{
              border: "1px solid black",
              padding: "5px",
              width: "60%",
            }}
          >
            Date
          </th>
          <th style={{ border: "1px solid black", padding: "5px" }}>
            Volume/m³
          </th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ height: "20px" }}>
          <td
            style={{
              border: "1px solid black",
              padding: "2px",
            }}
          >
            -
          </td>
          <td
            style={{
              border: "1px solid black",
              fontWeight: 600,
              padding: "2px",
            }}
          >
            STOCK INITIAL
          </td>
          <td
            style={{
              border: "1px solid black",
              padding: "2px",
            }}
          >
            -
          </td>
        </tr>
        {(rows <= 20 ? Array(rows) : Array(20)).fill(0).map((_, index) => {
          return (
            <tr key={index} style={{ height: "20px" }}>
              <td
                style={{
                  border: "1px solid black",
                  padding: "2px",
                }}
              >
                {index}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "2px",
                }}
              >
                12-12-2024
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "2px",
                }}
              >
                38
              </td>
            </tr>
          );
        })}
        {rows <= 20 && (
          <>
            <tr style={{ height: "20px", backgroundColor: "#d4d4a4" }}>
              <td
                style={{
                  border: "1px solid black",
                  padding: "2px",
                }}
              ></td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "2px",
                  fontWeight: "600",
                }}
              >
                SUS TOTAL
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "2px",
                  fontWeight: "600",
                }}
              >
                1200
              </td>
            </tr>
            <tr>
              <td
                colSpan={3}
                style={{
                  border: "1px solid black",
                  padding: "2px",
                  height: "30px",
                  backgroundColor: "#0053a6",
                }}
              ></td>
            </tr>
          </>
        )}
      </tbody>
    </table>
  );
};

export default Invoice3Table1;
