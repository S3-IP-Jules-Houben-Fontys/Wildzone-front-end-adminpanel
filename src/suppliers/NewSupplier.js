const NewSupplier = ({
    handleSubmit,
    supplierName, setSupplierName,
    supplierEmail, setSupplierEmail,
    supplierPhoneNumber, setSupplierPhoneNumber,
    supplierCountry, setSupplierCountry,
    supplierPlace, setSupplierPlace,
    supplierPostalCode, setSupplierPostalCode,
    supplierHouseNumber, setSupplierHouseNumber,
    supplierKVKnumber, setSupplierKVKnumber
}) => {
    return (
        <main className="p-3">
            <h1 className="text-center">NewSupplier</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="supplierName" className="">Naam:</label>
                    <input id="supplierName" className="form-control" type="text" required value={supplierName} onChange={(e) => setSupplierName(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="supplierEmail" className="">E-mailadres:</label>
                    <input id="supplierEmail" className="form-control" type="email" required value={supplierEmail} onChange={(e) => setSupplierEmail(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="supplierPhoneNumber" className="">Telefoonnummer:</label>
                    <input id="supplierPhoneNumber" className="form-control" type="tel" required value={supplierPhoneNumber} onChange={(e) => setSupplierPhoneNumber(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="supplierCountry" className="">Land:</label>
                    <input id="supplierCountry" className="form-control" type="text" required value={supplierCountry} onChange={(e) => setSupplierCountry(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="supplierPlace" className="">Plaats:</label>
                    <input id="supplierPlace" className="form-control" type="text" required value={supplierPlace} onChange={(e) => setSupplierPlace(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="supplierPostalCode" className="">Postcode:</label>
                    <input id="supplierPostalCode" className="form-control" type="text" required value={supplierPostalCode} onChange={(e) => setSupplierPostalCode(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="supplierHouseNumber" className="">Huisnummer:</label>
                    <input id="supplierHouseNumber" className="form-control" type="text" required value={supplierHouseNumber} onChange={(e) => setSupplierHouseNumber(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="supplierKVKnumber" className="">KVKnumber:</label>
                    <input id="supplierKVKnumber" className="form-control" type="number" required value={supplierKVKnumber} onChange={(e) => setSupplierKVKnumber(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Create supplier</button>

            </form>
        </main>
    )
}

export default NewSupplier
