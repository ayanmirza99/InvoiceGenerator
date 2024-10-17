const Invoice = () => {
  const data = [
    {
      ref: "001",
      description: "Béton dosé à 350",
      quantity: "40m³",
      price: "150",
      total: "6000",
    },
    {
      ref: "002",
      description: "Ciment standard",
      quantity: "30m³",
      price: "120",
      total: "3600",
    },
  ];

  let totalPrice = 0;
  data.forEach((order) => (totalPrice += Number(order.total)));

  const totalRows = 6;
  const rowsToRender = [...data, ...Array(totalRows - data.length).fill({})];

  return (
    <div>
      <div
        id="invoice"
        style={{
          padding: "20px",
          width: "210mm",
          height: "297mm",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Invoice layout code remains the same */}
        <section
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "40%" }}>cknn</div>
          <div
            style={{
              width: "60%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "60%",
                whiteSpace: "nowrap",
                lineHeight: "2px",
                textAlign: "right",
                color: "#A8a8a8",
              }}
            >
              <h4 style={{ fontWeight: 500 }}>RCCM: CD/KNM/RCM/19-B-0D291</h4>
              <h4 style={{ fontWeight: 500 }}>Id. Nat: 01-490-N499993T</h4>
              <h4 style={{ fontWeight: 500 }}>N{"'"}IMPOT A1915112Y</h4>
            </div>
            <div style={{ width: "40%" }}>
              <img
                src="../../public/logo.png"
                style={{ width: "100%", height: "100%" }}
                alt="logo"
              />
            </div>
          </div>
        </section>
        <section
          style={{ width: "90%", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              border: "1.5px solid black",
              padding: "4px 7rem",
              fontWeight: 500,
              fontSize: "1.25rem",
            }}
          >
            FACTURE N° 126f534
          </div>
        </section>
        <section style={{ width: "90%", textAlign: "start" }}>
          <h4>Date: 24/10/2024</h4>
        </section>
        <section
          style={{ width: "90%", display: "flex", justifyContent: "flex-end" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              backgroundColor: "#cccccc",
              width: "50%",
              lineHeight: "2px",
              gap: "16px",
              padding: "0 0 0 4px",
            }}
          >
            <h4 style={{ fontWeight: 600 }}>Client: Ayan Mirza</h4>
            <h4 style={{ fontWeight: 600 }}>Tel: +243472946592</h4>
          </div>
        </section>
        <table
          style={{
            width: "90%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "5px" }}>
                Réf Article
              </th>
              <th style={{ border: "1px solid black", padding: "5px" }}>
                Désignation
              </th>
              <th style={{ border: "1px solid black", padding: "5px" }}>
                Quantité
              </th>
              <th style={{ border: "1px solid black", padding: "5px" }}>
                Prix Unitaire
              </th>
              <th style={{ border: "1px solid black", padding: "5px" }}>
                Prix Total
              </th>
            </tr>
          </thead>
          <tbody>
            {rowsToRender.map((row, index) => (
              <tr key={index} style={{ height: "30px" }}>
                <td style={{ border: "1px solid black" }}>{row.ref || ""}</td>
                <td style={{ border: "1px solid black" }}>
                  {row.description || ""}
                </td>
                <td style={{ border: "1px solid black" }}>
                  {row.quantity || ""}
                </td>
                <td style={{ border: "1px solid black" }}>{row.price || ""}</td>
                <td style={{ border: "1px solid black" }}>{row.total || ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <section
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "16px",
            fontSize: "1.25rem",
          }}
        >
          <div
            style={{
              width: "45%",
              backgroundColor: "#cccccc",
              display: "flex",
              justifyContent: "space-between",
              padding: "0 8px",
            }}
          >
            <h4>THT:</h4>
            <h4>{totalPrice} USD</h4>
          </div>
          <div
            style={{
              width: "45%",
              backgroundColor: "#cccccc",
              display: "flex",
              justifyContent: "space-between",
              padding: "0 8px",
            }}
          >
            <h4>Net à payer:</h4>
            <h4 style={{ margin: 0 }}>{totalPrice}</h4>
          </div>
        </section>
        <section style={{ width: "90%" }}>
          <h3 style={{ fontWeight: 300 }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod iste
            quas odio placeat eos nulla doloribus nisi sunt quisquam
          </h3>
        </section>
      </div>
    </div>
  );
};

export default Invoice;
