import "./App.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Invoice from "./Components/Invoice";

function App() {
  // const generatePdf = () => {
  //   const input = document.getElementById("invoice");

  //   html2canvas(input, { scale: 2 }).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/jpeg", 1); // Use JPEG with quality 0.7
  //     const pdf = new jsPDF("l", "mm", "a4");

  //     // const imgWidth = 210; // A4 width in mm
  //     // const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

  //     pdf.addImage(imgData, "JPEG", 0, 0, 210, 297);
  //     pdf.save("invoice_optimized.pdf");
  //   });
  // };


  const generatePdf = () => {
    const input = document.getElementById('invoice');
    input.style.display = 'flex';
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg', 1);
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
      pdf.save(`BillNo_1.pdf`);
    });
    input.style.display = 'none';
  };

  // const rows = 30;
  // const generatePdf = () => {
  //   const page1 = document.getElementById("page1");
  //   const pdf = new jsPDF("l", "mm", "a4");

  //   // Capture the first invoice
  //   html2canvas(page1, { scale: 2 }).then((canvas1) => {
  //     const imgData1 = canvas1.toDataURL("image/jpeg", 1);
  //     pdf.addImage(imgData1, "PNG", 0, 0, 297, 210);

  //     if (rows > 20) {
  //       const page2 = document.getElementById("page2");
  //       html2canvas(page2, { scale: 2 }).then((canvas2) => {
  //         const imgData2 = canvas2.toDataURL("image/png");
  //         pdf.addPage();
  //         pdf.addImage(imgData2, "JPEG", 0, 0, 297, 210);

  //         pdf.save(`ConcreteBill.pdf`);
  //       });
  //     } else {
  //     pdf.save(`ConcreteBill.pdf`);
  //     }
  //   });
  // };

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
      <Invoice
        data={{
          ref: "A001",
          description: "Product Name",
          quantity: 2,
          price: 50,
          total: 100,
        }}
      />
      {/* <PDF2 /> */}
      <button onClick={generatePdf}>Download Invoice</button>
    </main>
  );
}

export default App;
