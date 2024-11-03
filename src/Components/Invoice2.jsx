const Invoice2 = () => {
  const data = {
    clientName: "Monsieur Roger",
    description: "dalle",
    dosage: "300",
    volume: "30",
    deliveryDate: "26 October 2024",
    createdAt: "24/10/2024",
    heure: "8h",
    telephone1: "+2433674652437",
    telephone2: "+2438746509172",
    address: "Av' Bonyandanya N∘-43b e/ Kasavabu",
  };
  return (
    <div
      style={{
        height: "100vh",
        // width: "100vw",
      }}
    >
      <div
        id="invoice"
        style={{
          width: "210mm",
          height: "297mm",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <section
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ width: "30%" }}>
            <img
              src="../../public/logo.jpeg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <h4 style={{ marginTop: "60px" }}>
            Kinhasa, le{" "}
            <span
              style={{
                borderBottom: "1px dotted black",
                paddingBottom: "2px",
              }}
            >
              {data.createdAt}
            </span>
          </h4>
        </section>
        <section
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "center",
            marginTop: "-40px",
          }}
        >
          <h2>
            <span
              style={{
                borderBottom: "2px solid black",
              }}
            >
              BON DE COMMANDE{" "}
            </span>
            N∘... ....
          </h2>
        </section>
        <table
          style={{
            width: "90%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#c6daff" }}>
              <th
                style={{
                  width: "40%",
                  border: "1px solid black",
                  alignContent: "flex-end",
                  padding: "5px",
                  textAlign: "center",
                }}
              >
                CLIENT
              </th>
              <th
                style={{
                  width: "30%",
                  border: "1px solid black",
                  alignContent: "flex-end",
                  padding: "5px",
                }}
              >
                DESCRIPTION
              </th>
              <th
                style={{
                  width: "15%",
                  border: "1px solid black",
                  alignContent: "flex-end",
                  padding: "5px",
                }}
              >
                DOSAGE
              </th>
              <th
                style={{
                  width: "15%",
                  border: "1px solid black",
                  alignContent: "flex-end",
                  padding: "5px",
                }}
              >
                VOLUME
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: "50px" }}>
              <td
                style={{
                  border: "1px solid black",
                  padding: "4px",
                  fontSize: "1.25rem",
                }}
              >
                {data.clientName}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "4px",
                  fontSize: "1.25rem",
                }}
              >
                {data.description}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "4px",
                  fontSize: "1.25rem",
                }}
              >
                {data.dosage}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "4px",
                  fontSize: "1.25rem",
                }}
              >
                {data.volume}m³
              </td>
            </tr>
            <tr style={{ height: "50px" }}>
              <td
                style={{
                  border: "1px solid black",
                  padding: "4px",
                  alignContent: "flex-start",
                }}
              >
                <h4>DATE DE LIVRAISON</h4>
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "4px",
                  fontSize: "1.25rem",
                }}
              >
                {data.deliveryDate}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "4px",
                  alignContent: "flex-start",
                }}
              >
                <h4>HEURE</h4>
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "4px",
                  fontSize: "1.25rem",
                }}
              >
                {data.heure}
              </td>
            </tr>
            <tr style={{ height: "50px" }}>
              <td
                style={{
                  border: "1px solid black",
                  padding: "4px",
                  alignContent: "flex-start",
                }}
              >
                <h4>TELEPHONE</h4>
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "4px",
                  fontSize: "1.25rem",
                }}
              >
                {data.telephone1}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "4px",
                  fontSize: "1.25rem",
                }}
                colSpan={2}
              >
                {data.telephone2}
              </td>
            </tr>
          </tbody>
        </table>
        <section style={{ display: "flex", width: "90%", minHeight: "50px" }}>
          <div
            style={{
              width: "16%",
              border: "1px solid black",
              borderTop: "none",
              alignContent: "flex-start",
              padding: "5px",
            }}
          >
            <h4>ADRESSSE</h4>
          </div>
          <div
            style={{
              width: "84%",
              border: "1px solid black",
              borderTop: "none",
              borderLeft: "none",
              padding: "5px",
              fontSize: "1.25rem",
            }}
          >
            {data.address}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Invoice2;
