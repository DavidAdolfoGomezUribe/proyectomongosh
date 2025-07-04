// Iniciar sesión y transacción
const session = db.getMongo().startSession();
const dbSession = session.getDatabase("parqueadero");

try {
    session.startTransaction();
    
   

    print("✅ Transacción realizada correctamente.");
    session.commitTransaction();

} catch (err) {
    print("❌ Error durante la transacción:", err.message);
    session.abortTransaction();
} finally {
    session.endSession();
}