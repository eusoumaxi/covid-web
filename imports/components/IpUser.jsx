import styles from "../styles/Modal.modules.css";

export default ipUser = (data) => {
  return (
    <div className={styles.ip}>
      <div className={styles.ipHead}>
        <h2>{data.country}</h2>
      </div>
      <div className="ip-content">
        <h6>Quieres ver los casos mas recientes de {data.country}?</h6>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary btn-xs">
          CERRAR
        </button>
        <a href="/country/{data.code}">
          <button type="button" rel="prefetch" className="btn btn-primary btn-xs">
            VER CASOS
          </button>
        </a>
      </div>
    </div>
  );
};
