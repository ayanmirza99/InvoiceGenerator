import './App.css'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Invoice2 from './Components/Invoice2';

function App() {

  const generatePdf = () => {
    const input = document.getElementById('invoice');
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      pdf.save(`invoice_126f534.pdf`);
    });
  };

  return (
    <main style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <Invoice2 />
      <button onClick={generatePdf}>Download Invoice</button>
    </main>
  )
}

export default App
