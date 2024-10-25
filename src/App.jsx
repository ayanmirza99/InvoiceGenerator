import "./App.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Invoice3 from "./Components/Invoice3";

function App() {
  // const generatePdf = () => {
  //   const input = document.getElementById('invoice');
  //   html2canvas(input, { scale: 2 }).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF("p", "mm", "a4");
  //     pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
  //     pdf.save(`invoice_126f534.pdf`);
  //   });
  // };

  const rows = 30;
  const generatePdf = () => {
    const page1 = document.getElementById("page1");
    const pdf = new jsPDF("l", "mm", "a4");

    // Capture the first invoice
    html2canvas(page1, { scale: 2 }).then((canvas1) => {
      const imgData1 = canvas1.toDataURL("image/png");
      pdf.addImage(imgData1, "PNG", 0, 0, 297, 210);

      if (rows > 20) {
        const page2 = document.getElementById("page2");
        html2canvas(page2, { scale: 2 }).then((canvas2) => {
          const imgData2 = canvas2.toDataURL("image/png");
          pdf.addPage();
          pdf.addImage(imgData2, "PNG", 0, 0, 297, 210);

          pdf.save(`invoice_126f534.pdf`);
        });
      } else {
        pdf.save(`invoice_126f534.pdf`);
      }
    });
  };

  return (
    <main
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Invoice3 rows={rows} />
      <button onClick={generatePdf}>Download Invoice</button>
    </main>
  );
}

export default App;
