const Invoice3Table2 = ({ heading, rows }) => {
  return (
    <table
      style={{
        width: "18%",
        borderCollapse: "collapse",
        marginTop: "4px",
        textAlign: "center",
      }}
    >
      <thead>
        <tr
          style={{
            backgroundColor: "#0053a6",
            color: "white",
          }}
        >
          <th
            style={{
              border: "1px solid black",
              padding: "5px",
              textAlign: "center",
            }}
            colSpan={3}
          >
            {heading}
          </th>
        </tr>
        <tr style={{ width: "100%", backgroundColor: "#d4d4a4" }}>
          <th style={{ border: "1px solid black", padding: "5px 0 5px 0" }}>
            APPRO
          </th>
          <th style={{ border: "1px solid black", paddingY: "5px 0 5px 0" }}>
            DSTKG
          </th>
          <th style={{ border: "1px solid black", paddingY: "5px 0 5px 0" }}>
            DAY END
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
              padding: "2px",
            }}
          >
            145
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
                23
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
                  fontWeight: "600",
                }}
              >
                400
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "2px",
                  fontWeight: "600",
                }}
              >
                340
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
            <tr
              style={{
                backgroundColor: "#0053a6",
                color: "white",
                height: "30px",
              }}
            >
              <td
                colSpan={2}
                style={{
                  border: "1px solid black",
                  padding: "2px",
                  fontSize: "0.8rem",
                }}
              >
                RESTE EN STOCK
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "2px",
                }}
              >
                123
              </td>
            </tr>
          </>
        )}
      </tbody>
    </table>
  );
};

export default Invoice3Table2;
