import Navigation from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import CardK from "../components/CardK/CardK"
import SubtotalTable from "../components/SubtotalTable"

const Keranjang = () => {
    return (
        <div>
            <Navigation />
            <div style={{ marginTop: "5rem" }}>
                <CardK />
                <CardK />
                <CardK />
                <CardK />
            </div>
                <SubtotalTable />
            <Footer />
        </div>
    )
}

export default Keranjang