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
    // <div>
      <div
        id="invoice"
        style={{
          width: "210mm",
          height: "297mm",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <section
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "40%" }}>
            <img src="/public/header.jpg" alt="" style={{height: '100%', width: '100%'}} />
          </div>
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
                textAlign: "right",
                color: "#898888",
                lineHeight: "1.25rem",
              }}
            >
              <h4 style={{ fontWeight: 600 }}>RCCM: CD/KNM/RCM/19-B-0D291</h4>
              <h4 style={{ fontWeight: 600 }}>Id. Nat: 01-490-N499993T</h4>
              <h4 style={{ fontWeight: 600 }}>N{"'"}IMPOT A1915112Y</h4>
            </div>
            <div style={{ width: "40%" }}>
              <img
                src="/public/logo.jpeg"
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
              border: "2px solid black",
              padding: "4px 7rem",
              fontWeight: 500,
              fontSize: "1.25rem",
            }}
          >
            FACTURE N° 126f534
          </div>
        </section>
        <section
          style={{ width: "90%", textAlign: "start", marginTop: "20px", fontSize: '1.25rem' }}
        >
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
              backgroundColor: "#eaeaea",
              width: "50%",
              height: "90px",
              padding: "6px",
              fontSize: "1.1rem",
            }}
          >
            <h4 style={{ fontWeight: 500 }}>Client: Ayan Mirza</h4>
            <h4 style={{ fontWeight: 500 }}>Tel: +243472946592</h4>
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
            <tr style={{}}>
              <th
                style={{
                  border: "1px solid black",
                  alignContent: "flex-end",
                  padding: "5px 5px 0 5px",
                  textAlign: "start",
                }}
              >
                Réf Article
              </th>
              <th
                style={{
                  border: "1px solid black",
                  alignContent: "flex-end",
                  padding: "5px 5px 0 5px",
                }}
              >
                Désignation
              </th>
              <th
                style={{
                  border: "1px solid black",
                  alignContent: "flex-end",
                  padding: "5px 5px 0 5px",
                }}
              >
                Quantité
              </th>
              <th
                style={{
                  border: "1px solid black",
                  alignContent: "flex-end",
                  padding: "5px 2px 0 2px",
                }}
              >
                Prix <br /> Unitaire
              </th>
              <th
                style={{
                  border: "1px solid black",
                  alignContent: "flex-end",
                  padding: "5px 8px 0 8px",
                }}
              >
                Prix <br /> Total
              </th>
            </tr>
          </thead>
          <tbody>
            {rowsToRender.map((row, index) => (
              <tr key={index} style={{ height: "30px" }}>
                <td
                  style={{
                    border: "1px solid black",
                    fontWeight: 600,
                    padding: "4px",
                  }}
                >
                  {row.ref || ""}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    fontWeight: 600,
                    padding: "4px",
                  }}
                >
                  {row.description || ""}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    fontWeight: 600,
                    padding: "4px",
                    textAlign: "right",
                  }}
                >
                  {row.quantity || ""}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    fontWeight: 600,
                    padding: "4px",
                    textAlign: "center",
                  }}
                >
                  {row.price || ""}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    fontWeight: 600,
                    padding: "4px",
                    textAlign: "center",
                  }}
                >
                  {row.total || ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <section
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "24px",
            fontSize: "1.15rem",
          }}
        >
          <div
            style={{
              width: "45%",
              backgroundColor: "#eaeaea",
              display: "flex",
              gap: "110px",
              alignItems: "flex-end",
              padding: "0 4px 0 4px",
            }}
          >
            <h4>THT:</h4>
            <h4>{totalPrice} USD</h4>
          </div>
          <div
            style={{
              width: "45%",
              backgroundColor: "#eaeaea",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              paddingLeft: "4px",
            }}
          >
            <h4>Net à payer:</h4>
            <h4
              style={{
                border: "1px solid black",
                width: "30%",
                padding: "4px",
                background: "white",
              }}
            >
              {totalPrice}
            </h4>
          </div>
        </section>
        <section style={{ width: "90%", marginTop: "24px" }}>
          <h3 style={{ fontWeight: 300 }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
        </section>
      </div>
    // </div>
  );
};

export default Invoice;
