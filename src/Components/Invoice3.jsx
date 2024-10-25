import Invoice3Table1 from "./Invoice3Table1";
import Invoice3Table2 from "./Invoice3Table2";

const Invoice3 = ({ rows }) => {
  return (
    <>
      <div
        id="page1"
        style={{
          height: "210mm",
          width: "297mm",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Header Section */}
        <section
          style={{
            width: "100%",
            paddingLeft: "6px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ width: "15%" }}>
            {/* Import the logo image correctly */}
            <img
              src={"../../public/logo.jpeg"} // Proper image import for React
              alt="Logo"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div
            style={{
              width: "70%",
              height: "4px",
              backgroundColor: "#047bcb",
            }}
          ></div>
        </section>
        <section
          style={{
            width: "100%",
            height: "maxContent",
            display: "flex",
            gap: "6px",
          }}
        >
          <Invoice3Table1 rows={rows} />
          <Invoice3Table2 heading={"CIMENT"} rows={rows} />
          <Invoice3Table2 heading={"SABLE"} rows={rows} />
          <Invoice3Table2 heading={"GRAVIER 8/15"} rows={rows} />
          <Invoice3Table2 heading={"GRAVIER 15/25"} rows={rows} />
        </section>
      </div>
      {rows > 20 && (
        <div
          id="page2"
          style={{
            height: "210mm",
            width: "297mm",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <section
            style={{
              width: "100%",
              height: "maxContent",
              display: "flex",
              gap: "6px",
            }}
          >
            <Invoice3Table1 rows={rows - 20} />
            <Invoice3Table2 heading={"CIMENT"} rows={rows - 20} />
            <Invoice3Table2 heading={"SABLE"} rows={rows - 20} />
            <Invoice3Table2 heading={"GRAVIER 8/15"} rows={rows - 20} />
            <Invoice3Table2 heading={"GRAVIER 15/25"} rows={rows - 20} />
          </section>
        </div>
      )}
    </>
  );
};

export default Invoice3;
