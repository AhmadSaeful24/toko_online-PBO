import Harga from "../components/Checkot/Harga"
import Navigation from "../components/Navbar/Navbar"
import Jasa from "../components/Checkot/Jsa"
import Footer from "../components/Footer/Footer"

const Checkouts = () => {
    return (
        <div>
            <Navigation />
            <div style={{ marginTop: "7rem" }}>
                <h1 style={{ marginLeft: "15rem", fontSize: "20px", background: "grey", borderRadius: "10px", width: "9rem", height: "2rem", textAlign: "center", color: "white" }}>Pesanan Anda</h1>
                <div style={{ marginLeft: "13rem", marginTop: "1rem", marginBottom: "3rem", width: "70rem" }} className="border-bottom border-dark border-2"></div>
                <Harga />
                <Harga />
                <Jasa />
                <Footer />
            </div>
        </div>
    )
}

export default Checkouts