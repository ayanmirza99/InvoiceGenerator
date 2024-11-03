const PDF2 = () => {
  return (
    <div
      id="page1"
      style={{
        height: "210mm",
        width: "297mm",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        padding: "4mm",
        paddingTop: "0.2mm",
      }}
    >
      <section
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <div style={{ padding: "2mm", border: "1mm solid black" }}>
          <h1 style={{ fontWeight: 500 }}>
            RAPPORT DE PRODUCTION CENTRALE A BETON MOIS DE JULLIET
          </h1>
        </div>
      </section>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "2mm",
        }}
      >
        <thead
          style={{
            height: "8mm",
            padding: "1.5mm 0 1.5mm 0",
            color: "white",
            backgroundColor: "#c6c6c6",
          }}
        >
          <th
            style={{
              borderLeft: "0.5mm solid black",
              borderTop: "0.5mm solid black",
            }}
          >
            <h4>DATES</h4>
          </th>
          <th
            style={{
              borderLeft: "0.5mm solid black",
              borderTop: "0.5mm solid black",
            }}
          >
            <h4>NOMS DU CLIENT</h4>
          </th>
          <th
            style={{
              borderLeft: "0.5mm solid black",
              borderTop: "0.5mm solid black",
            }}
          >
            <h4>DOSAGE</h4>
          </th>
          <th
            style={{
              borderLeft: "0.5mm solid black",
              borderTop: "0.5mm solid black",
            }}
          >
            <h4>QTES LUMUMBA</h4>
          </th>
          <th
            style={{
              borderLeft: "0.5mm solid black",
              borderTop: "0.5mm solid black",
            }}
          >
            <h4>QTES MPETI</h4>
          </th>
          <th
            style={{
              borderLeft: "0.5mm solid black",
              borderTop: "0.5mm solid black",
            }}
          >
            <h4>CLIENTS</h4>
          </th>
          <th
            style={{
              border: "0.5mm solid black",
              borderBottom: "none",
            }}
          >
            <h4>MONTANTS/$</h4>
          </th>
        </thead>
        <tbody>
          {Array(31)
            .fill(0)
            .map((item, index) => {
              return (
                <tr key={index} style={{ height: "6mm", textAlign: "center" }}>
                  <td
                    style={{
                      borderLeft: "0.5mm solid black",
                      borderTop: "0.5mm solid black",
                    }}
                  >
                    <h4>{index + 1}/10/2024</h4>
                  </td>
                  <td
                    style={{
                      borderLeft: "0.5mm solid black",
                      borderTop: "0.5mm solid black",
                    }}
                  >
                    <h4>LUMUMBA</h4>
                  </td>
                  <td
                    style={{
                      borderLeft: "0.5mm solid black",
                      borderTop: "0.5mm solid black",
                    }}
                  >
                    <h4>250</h4>
                  </td>
                  <td
                    style={{
                      borderLeft: "0.5mm solid black",
                      borderTop: "0.5mm solid black",
                    }}
                  >
                    <h4>60</h4>
                  </td>
                  <td
                    style={{
                      borderLeft: "0.5mm solid black",
                      borderTop: "0.5mm solid black",
                    }}
                  >
                    <h4>38</h4>
                  </td>
                  <td
                    style={{
                      borderLeft: "0.5mm solid black",
                      borderTop: "0.5mm solid black",
                    }}
                  >
                    <h4>64</h4>
                  </td>
                  <td
                    style={{
                      border: "0.5mm solid black",
                      borderBottom: "none",
                    }}
                  >
                    <h4>$6460</h4>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div style={{ width: "100%", borderTop: "0.5mm solid black" }}></div>
    </div>
  );
};

export default PDF2;
